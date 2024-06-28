
let urlMap = {}

let lastRegister;

function load(path){
    return new Promise(function (resolve, reject){
        const script = document.createElement('script');
        script.src = urlMap[path] || path;
        script.async = true;
        document.body.appendChild(script);
        script.addEventListener('load',function(){
          let _lastRegister =  lastRegister;
          lastRegister=undefined;
            resolve(_lastRegister)
        })
    })
    
}

function processScipts(){
    document.querySelectorAll('script').forEach(ele => {
        if (ele.type === 'systemjs-importmap') {
            const moduleData = JSON.parse(ele.innerHTML)?.imports;
     
            for (const moduelName in moduleData) {
                if (Object.hasOwnProperty.call(moduleData, moduelName)) {
                    urlMap[moduelName] = moduleData[moduelName];
                }
            }
        }
    })
}

const windowSet =new Set();

function saveGlobalProperty(){
    for (const k in window) {
        if (Object.hasOwnProperty.call(window, k)) {
            windowSet.add(k);
        }
    }
}
saveGlobalProperty();
function getLastGlobalProperty(){
    for (const k in window) {
        if (Object.hasOwnProperty.call(window, k)) {
            if(windowSet.has(k)) continue;

            saveGlobalProperty();
            return window[k];
        }
    }
}

function SystemJs() {

}

SystemJs.prototype.import = function (id) {
    return Promise.resolve(processScipts()).then(()=>{
        const lastSepIndex = location.href.lastIndexOf('/');
        const baseURL = location.href.slice(0, lastSepIndex+1);
        if(id.startsWith('./')){
            console.log(baseURL+ id.slice(2),'=====');
            return baseURL+ id.slice(2);
        }
    }).then(path=>{
        let exec;
        return load(path).then((registerParams)=>{
            /**
             * execute: 是真正执行的渲染逻辑
             * setters：是用来保存加载后的资源，加载资源调用setters
             */
            // setters: [
            //     function (module) {
            //       Object.keys(module).forEach(function (key) {
            //         __WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
            //       });
            //     },
            //     function (module) {
            //       Object.keys(module).forEach(function (key) {
            //         __WEBPACK_EXTERNAL_MODULE_react_dom__[key] = module[key];
            //       });
            //     }
            //   ],
            const {setters, execute} = registerParams[1](()=>{});
            exec = execute;
            return [registerParams[0], setters]
        }).then(([registation, setters])=>{
            return Promise.all(registation.map((dep,i)=>{
             return load(dep).then(()=>{
                const property =  getLastGlobalProperty();
                setters[i](property);
             })   
            }))
        }).then(()=>{
            exec();
        })
    })

}
SystemJs.prototype.register = function (deps, declare) {
    lastRegister = [deps, declare]
}

const System = new SystemJs();

System.import('./react-app-build/bundle.js').then(()=>{
    console.log('模块加载完毕')
})
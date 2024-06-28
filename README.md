# 手写SystemJS 

模拟SystemJS加载原理

# 原理解析

1、配置importmap，模块名-模块链接，调用System.Import加载模块（用构建工具指定libraryTarget：system）

2、遍历type="systemjs-importmap"的script，获取所有模块

3、通过动态添加script标签，加载模块的script脚本内容

4、执行模块内容，获取绑定到window上面的新加属性，window快照，完成System.register步骤

5、执行模块注册完成后，调用回调函数（例如此处是加载完react、react-dom后，将reactNode渲染到页面指定节点内），完成模块加载
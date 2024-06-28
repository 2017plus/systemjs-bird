import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
function App() {



  function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  function BuildHeap(arr) {
    let len = arr.length
    // 因为二叉树的特点， 当前节点 i   左子节点 2i+1  右子节点 2i+2
    let start = Math.floor(len / 2) - 1
    for (let i = start; i >= 0; i--) {
      heapify(arr, i, len)
    }
  }

  function HeapSort(arr) {
    console.log('原数组：', arr);
    const result = [];

    let last = arr.length - 1
    // 1.创建小顶堆
    BuildHeap(arr)
    for (let i = last; i >= 0; i--) {
      console.log('堆：', arr);

      // 把堆顶的值和末尾的值交换
      swap(arr, 0, i);
      // 把末尾（堆顶）的值放进结果里
      result.push(arr.pop());
      // 重新构建堆的顺序
      heapify(arr, 0)
    }

    return result;
  }

  function heapify(arr, i) {

    let current = i
    // 父节点 i   左子节点 2i+1  右子节点 2i+2
    //        0
    //    1       2  
    //  3   4   5   6
    let left = 2 * i + 1
    let right = 2 * i + 2

    if (arr[current] > arr[left]) {
      current = left
    }
    if (arr[current] > arr[right]) {
      current = right
    }
    if (current != i) {
      swap(arr, i, current)

      // 当前节点和字节点替换后，针对当前节点的子节点，去跟他的左右子节点做比较替换
      heapify(arr, current)
    }
  }

  useEffect(() => {
  }, [window.location.href])

  function countSort(arr) {

    // 获取数组中的最大值，用于初始化计数数组
    let maxValue = 0;
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] > maxValue) {
        maxValue = arr[index];
      }
    }

    let buckenLen = maxValue + 1,
      bucket = new Array(buckenLen),
      sortedIndex = 0;

    // 遍历数组，给计数数组的指定索引赋值+1
    for (let i = 0; i < arr.length; i++) {
      bucket[arr[i]] = Number(bucket[arr[i]] || 0) + 1;  // 可能有多个相同值
    }

    for (let j = 0; j < buckenLen; j++) {
      while (bucket[j] > 0) {
        // 取出计数数组的索引，将索引值依次赋值给有序数组，有几个值就赋值几次
        arr[sortedIndex] = j;
        sortedIndex++;
        bucket[j]--;
      }

    }

    return arr
  }

  useEffect(() => {
    const arr = [];
    for (let index = 0; index < 1000000; index++) {
      arr.push(Math.floor(Math.random() * 1000000))
    }


    console.log('排序后：', HeapSort([5, 2, 1, 4, 3, -1, 4, 6, 0, 8, 9, 72, 235, 23, 456, 62, 231, 12]))
    // console.log(countSort([5, 2, 1, 4, 3, 1, 4, 6, 8, 9, 3]))

    // console.time()
    // console.time();
    // countSort(arr)
    // console.timeEnd()

    const container = document.querySelector(".container");
    const w = container.clientWidth;
    container.style.setProperty('--w', w + 'px');


    window.onresize = (e) => {
      const w = container.clientWidth;
      container.style.setProperty('--w', w + 'px');
    }


  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {
          // <img src={logo} className="App-logo" alt="logo" />
        }
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="container" id='module-container'>
        <div className="item"></div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';

const isLoading = false  //true 

// 1，用 if--else 来写
// const loadData = ()=> {
//     if(isLoading){
//         return <div>loading....</div>
//     }
//     return <div>数据加载完成，显示加载后的数据</div>
// }

// const title =(
//     <h1>
//         条件渲染：
//         {loadData()}
//     </h1>
// )

// 2, 还可以用三元表达式写：
const loadData = () => {
    return isLoading ? (<div>loading...</div>) : (<div>数据加载完成，显示加载后的数据</div>)
}

const title = (
    <h1>
        条件渲染：
        {loadData()}
    </h1>
)


// 渲染react元素
ReactDOM.render(title, document.getElementById('root'))
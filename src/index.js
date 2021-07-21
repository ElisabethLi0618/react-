import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

// 通过函数组件绑定事件：
// function App(){
//     // 事件处理程序
//     function handleClick(){
//         console.log('函数组件中的事件绑定，事件触发了');
//     }
//     return(
//         <button onClick={handleClick}>点击一下</button>
//     )
// }

class App extends React.Component {
    //简化语法初始化state()
    state = {
        count: 0
    }
    render(){
        return(
            <div>
               <h1>计数器： { this.state.count }</h1>
               <button onClick={() => {
                   this.setState({
                       count:this.state.count + 1
                   })
               }}>+1</button>
            </div>
        )
    }
}


// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))
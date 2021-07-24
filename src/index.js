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
        txt: '',
        content: '',
        city: 'hz',
        isChecked: false
    }

    handleForm = e => {
        //获取当前DOM 对象
        const target = e.target

        //根据类型获取值  先判断  ？是checkbox 就获取 checked  ：否就获取 value
        const value = target.type ==='checkbox'
        ? target.checked
        : target.value

        // 获取 name 
        const name = target.name

        this.setState({
            [name]: value
        })
        this.setState({
            txt: e.target.value
        })
    }
    // //处理副文本框的变化
    // handleContent = e =>{
    //     this.setState({
    //         content: e.target.value
    //     })
    // }
    // //处理下拉框的变化
    // hanleCity = e =>{
    //     this.setState({
    //         city: e.target.value
    //     })
    // }
    // //处理副选框的变化
    // handleChecked = e =>{
    //     this.setState({
    //         isChecked: e.target.checked
    //     })
    // }
    
   
    render(){
        return(
            <div>
                {/* 文本框 */}
               <input type="text" name="txt" value={this.state.txt} onChange={this.handleForm} />
               <br/>

               {/* 副文本框 */}
               <textarea  name="content" value={this.state.content} onChange={this.handleForm}></textarea>
               <br/>
               {/* 下拉框 */}
               <select name="city" value={this.state.city} onChange={this.handleForm}>
                   <option value="sh">上海</option>
                   <option value="bj">北京</option>
                   <option value="hz">杭州</option>
               </select>
               {/* 复选框 */}
               <input type="checkbox" name="isChecked" checked={this.state.isChecked} onChange={this.handleForm}/>
            </div>
        )
    }
}


// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))
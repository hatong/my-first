import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class Square extends React.Component {
    render() {
        return (
            <button className="square">
            {/* TODO */}
            </button>
    );
    }
}
class Board extends Component {
    renderSquare(i) {
        return <Square />;
    }

    render() {
        const status = 'Next player: X';

        return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
        </div>
    );
    }
}
class Game extends Component {
    render() {
        return (
            <div className="game">
            <div className="game-board">
            <Board />
            </div>
            <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
            </div>
            </div>
    );
    }
}

 /*ReactDOM.render(
 <Game />,
 document.getElementById('root')
 );*/

// ========================================
/*my code*/
class Clock extends Component{
    constructor(props){
        /*
         * super 代表父类的构造函数，调用了父类的方法，这是js的一个特性，和react无关（官网好像是这么说的）。
         * 在用到constructor方法的时候，必须使用super；如果没有用在用到constructor方法的时候，可以不加这一句
        */
        super(props);
        this.state = {
            date:new Date(),
            isToggleOn : true,
            textContent:'带参数修改',
        };
        // 这个绑定事件是必须的，以保证this在回调函数中是可用的;
        // 如果回调函数是箭头函数，则可以不这样绑定，但是这种方式会造成额外渲染，通常建议绑定事件的方式
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        this.timeId = setInterval(() => this.tick(),1000);
    }
    componentWillUnmount(){
        clearInterval(this.timeId);
    }
    tick(){
        this.setState({
           date: new Date(),
        });
    }
    handleClick(){
        //setState() 可以接收一个函数，这个函数接受两个参数，第一个参数表示上一个状态值(this.state)，第二参数表示当前的 props
        this.setState(prevState =>({
            isToggleOn: !prevState.isToggleOn,
        }));
    }
    handleTextContent(fixed,e){
        this.setState(prevState =>({
            textContent: fixed,
        }));
    }
    render(){
        return (
            <div>
                <Game />        {/*注意:这个component只能放在<div>里面，否则报错*/}
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button><br/>
                <button onClick={this.handleTextContent.bind(this,'带参数成功')}>{this.state.textContent}</button>
            </div>
        );
    }

}
ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
);

//========================================



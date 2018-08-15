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
class UserGreeting extends  Component{
    render(){
        return  <span>Welcome back!</span>;
    }
}
class GuestGreeting extends  Component{
    render(){
        return  <span>Please sign up.</span>;
    }

}
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
            toggleDisabled:<UserGreeting/>,
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
        if(this.state.isToggleOn){
            this.state.toggleDisabled= <GuestGreeting/>;
        }else{
            this.state.toggleDisabled = <UserGreeting/>;
        }

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
                <button onClick={this.handleClick}>{this.state.isToggleOn ? 'sign' : 'unsign'}</button><br/>
                <p>条件渲染： {this.state.toggleDisabled}</p>
                <button onClick={this.handleTextContent.bind(this,'带参数成功')}>传参</button><br/>
                <p>{this.state.textContent}</p><br/>
            </div>
        );
    }

}

/*
* 状态提升(在我的理解中，这是类似vue的父子组件以及兄弟组件之间的数据沟通)
* 在React中，状态分享是通过将state数据提升至离需要这些数据的组件最近的父组件来完成的。这就是所谓的状态提升。
* 我们会将 TemperatureInput 组件自身保存的 state 移到 Calculator 中。
* */
const scaleName={
    c:'摄氏',
    f:'华氏'
};
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
class BoilingVerdict extends Component{
    constructor(props){
        super(props);
    }
    render(){
        /*
        * 这里用state是错误的，state是组件自己管理数据，控制自己的状态，可变
        * props是外部参数，props不可改变(只读)；
        * 没有state的叫做无状态组件，有state的叫做有状态组件
        * */
        // if(this.state.celsius >=100){   //error
        if(this.props.celsius >=100){
            return <p>水会烧开</p>;
        }
        return <p>水不会烧开</p>;
    }
}

class TemperatureInput   extends Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperation:''};
    }
    handleChange(e) {
        // this.setState({temperature: e.target.value});
        this.props.onTemperatureChange(e.target.value);
    }
    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>输入一个{scaleName[scale]}温度</legend>
                <input value={temperature} onChange={this.handleChange} />
                {/*<BoilingVerdict celsius={parseFloat(temperature)} />*/}
            </fieldset>
        );
    }
}
class Calculator extends Component{
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: ''};
    }
    handleCelsiusChange(temperature){
        this.setState({scale: 'c', temperature});
    }
    handleFahrenheitChange(temperature){
        this.setState({scale: 'f', temperature});
    }
    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ?  tryConvert(temperature,toCelsius): temperature;
        const fahrenheit  = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

ReactDOM.render(
    // <Clock/>,
    <Calculator />,
    document.getElementById('root')
);

//========================================



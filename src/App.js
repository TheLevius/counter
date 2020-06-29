import React from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import CounterSettings from "./components/CounterSettings/CounterSettings";

class App extends React.Component {
    state =  {
        count: 0,
        maxValue: 1,
        maxValueCache: 1,
        startValue: 0,
        startValueCache: 0,
        invalidValue: 'incorrect value!',
        instruction: `enter values and press 'set'`,

    }

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem("counterState", stateAsString)
    }

    restoreState = () => {

        let stateAsString = localStorage.getItem("counterState");
        if (stateAsString) {
            this.state = JSON.parse(stateAsString);
        };
        this.setState({...this.state});
    }

    componentDidMount() {
        this.restoreState();
    }

    setCacheMaxValue = (maxValue) => {
        this.setState({maxValueCache: +maxValue});
    }

    setCacheStartValue = (startValue) => {
        this.setState({startValueCache: +startValue});
    }

    incCount = () => {
       if (this.state.count < this.state.maxValue) {
            this.setState({count:  this.state.count + 1});
       }
    }

    resetCount = () => {
        this.setState({count: this.state.startValue});
    }

    setInputsValue = (maxValue, startValue) => {
        this.setState({
            count: +startValue,
            maxValue: +maxValue,
            startValue: +startValue
        });
    }

    render() {
        return(
            <div className="App flex">
                <CounterSettings state={this.state} setCacheMaxValue={this.setCacheMaxValue} setCacheStartValue={this.setCacheStartValue} setInputsValue={this.setInputsValue} saveState={this.saveState} />
                <Counter state={this.state} incCount={this.incCount} resetCount={this.resetCount}/>
            </div>
        );
    }
}

export default App;

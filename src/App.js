import React from 'react';
import './App.css';
import Main from "./components/Main/Main";

class App extends React.Component {
    state =  {
        count: 0
    }

    incCount = () => {
       if (this.state.count < 5) {
            this.setState({count:  this.state.count + 1});
       }
    }

    resetCount = () => {
        this.setState({count: 0});
    }



    render() {
        return(
            <div className="App">
                <Main state={this.state} incCount={this.incCount}  resetCount={this.resetCount}/>
            </div>
        );
    }
}

export default App;

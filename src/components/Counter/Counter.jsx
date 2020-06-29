import React from 'react';
import styles from './Counter.module.css';
import Display from "./Display/Display";
import ControlPanel from "./ControlPanel/ControlPanel";

class Counter extends React.Component {
    render() {
        return (
            <div className="Counter">
                <div className={styles._container}>
                    <div className={styles._box}>
                        <Display state={this.props.state}/>
                        <ControlPanel incCount={this.props.incCount}
                                      resetCount={this.props.resetCount}
                                      state={this.props.state}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Counter;
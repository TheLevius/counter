import React from 'react';
import styles from './Main.module.css';
import Display from "./Display/Display";
import ControlPanel from "./ControlPanel/ControlPanel";

class Main extends React.Component {
    render() {
        return (
            <div className={styles._wrapper}>
                <div className={styles._container}>
                    <div className={styles._box}>
                        <Display count={this.props.state.count}/>
                        <ControlPanel incCount={this.props.incCount}  resetCount={this.props.resetCount} count={this.props.state.count}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
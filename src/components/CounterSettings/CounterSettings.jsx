import React from 'react';
import styles from './CounterSettings.module.css';
import InputsBoard from "./InputsBoard/InputsBoard";
import ControlPanel from "./ControlPanel/ControlPanel";


class CounterSettings extends React.Component {
    render() {
        return (
            <div className="CounterSettings">
                <div className={styles._container}>
                    <div className={styles._box}>
                        <InputsBoard state={this.props.state} setCacheMaxValue={this.props.setCacheMaxValue} setCacheStartValue={this.props.setCacheStartValue}/>
                        <ControlPanel state={this.props.state} setInputsValue={this.props.setInputsValue} saveState={this.props.saveState}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CounterSettings;
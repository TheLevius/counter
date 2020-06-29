import React from 'react';
import styles from './ControlPanel.module.css';
import Button from "../../Button/Button";

class ControlPanel extends React.Component {

    onSetInputsValue = () => {
        let maxValue = this.props.state.maxValueCache;
        let startValue =  this.props.state.startValueCache;
        this.props.setInputsValue(maxValue, startValue);
        this.props.saveState();
    }

    toggleDisable = () => {
        return (
            (this.props.state.startValueCache === this.props.state.startValue && this.props.state.maxValueCache === this.props.state.maxValue)
            || this.props.state.startValueCache < 0
            || this.props.state.maxValueCache <= this.props.state.startValueCache
        );
    }

    render() {

        return (
            <div className={styles._controlPanel}>
                <Button btnName={'set'} clickFn={this.onSetInputsValue} disabledStatus={this.toggleDisable()}/>
            </div>
        );
    }
}

export default ControlPanel;
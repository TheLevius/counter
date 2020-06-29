import React from 'react';
import styles from './ControlPanel.module.css';
import Button from "../../Button/Button";

class ControlPanel extends React.Component {

    render() {

        return (
            <div className={styles._controlPanel}>
                <Button btnName={'inc.'} clickFn={this.props.incCount} disabledStatus={this.props.state.count === this.props.state.maxValue
                || !(this.props.state.startValueCache === this.props.state.startValue && this.props.state.maxValueCache === this.props.state.maxValue)}/>
                <Button btnName={'reset'} clickFn={this.props.resetCount} disabledStatus={this.props.state.count === this.props.state.startValue}/>
            </div>
        );
    }
}

export default ControlPanel;
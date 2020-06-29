import React from 'react';
import styles from './InputBoard.module.css';

class InputsBoard extends React.Component {

    componentDidMount() {

    }

    onCacheMaxValueChanged = (e) => {
        let maxValue = e.currentTarget.value;
        this.props.setCacheMaxValue(maxValue);
        this.setInputStyle();
    }

    onCacheStartValueChanged = (e) => {
        let startValue = e.currentTarget.value;
        this.props.setCacheStartValue(startValue);
    }

    setInputStyle = () => {
        if (
            this.props.state.startValueCache < 0
            || this.props.state.maxValueCache <= this.props.state.startValueCache
            ) {
            return `${styles._numberInputs} ${styles._numberInvalid}`;
        } else {
            return `${styles._numberInputs}`;
        }
    }


    render() {
        return (
            <div className="InputsBoard block">
                <div className={styles._box}>
                    <div className={styles._numberInputsBox}>
                        <h4 className={styles._inputsSignHead}>Max Value:</h4>
                        <input type="number" className={this.setInputStyle()} id="maxValue" onChange={this.onCacheMaxValueChanged} value={this.props.state.maxValueCache} />
                    </div>
                    <div className={styles._numberInputsBox}>
                        <h4 className={styles._inputsSignHead}>Start Value:</h4>
                        <input type="number" className={this.setInputStyle()} id="startValue" onChange={this.onCacheStartValueChanged} value={this.props.state.startValueCache}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default InputsBoard;
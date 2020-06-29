import React from 'react';
import styles from './Display.module.css';

class Display extends React.Component {

    setCounterStyle = () => {
        if (this.props.state.startValueCache < 0 || this.props.state.startValueCache >= this.props.state.maxValueCache) {
            return `${styles._counterInfo} ${styles._counterInvalid}`;
        } else if (!(this.props.state.startValueCache === this.props.state.startValue && this.props.state.maxValueCache === this.props.state.maxValue)) {
            return `${styles._counterInfo} ${styles._counterInstruction}`;
        } else {
            return (this.props.state.maxValue === this.props.state.count)
                ? `${styles._counterInfo} ${styles._counterLimit}`
                : `${styles._counterInfo} ${styles._counterCorrect}`;
        }
    }

    render() {

        return(
            <div className={this.props.state.startValueCache < 0 || this.props.state.startValueCache >= this.props.state.maxValueCache ? `${styles._display} ${styles._displayError}` : `${styles._display}`}>
                <div className={this.setCounterStyle()}>
                    {
                    (this.props.state.startValueCache < 0 || this.props.state.startValueCache >= this.props.state.maxValueCache)
                    ? this.props.state.invalidValue
                    : (this.props.state.maxValueCache === this.props.state.maxValue && this.props.state.startValueCache === this.props.state.startValue
                        ? this.props.state.count
                        : this.props.state.instruction)
                    }

                </div>
            </div>
        )
    }
}

export default Display;
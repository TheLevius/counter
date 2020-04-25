import React from 'react';
import styles from './ControlPanel.module.css';

class ControlPanel extends React.Component {

    render() {

        return (
            <div className={styles._controlPanel}>
                <button type='button' className={styles._incBtn} onClick={this.props.incCount} disabled={this.props.count === 5}>inc.</button>
                <button type="button" className={styles._resetBtn} onClick={this.props.resetCount} disabled={this.props.count === 0}>reset</button>
            </div>
        );
    }
}

export default ControlPanel;
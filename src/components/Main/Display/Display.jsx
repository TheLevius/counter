import React from 'react';
import styles from './Display.module.css';

class Display extends React.Component {
    render() {

        return(
            <div className={styles._display}>
                <div className={this.props.count === 5 ? `${styles._counterInfo} ${styles._counterLimit}` : styles._counterInfo}>
                    {this.props.count}
                </div>
            </div>
        )
    }
}

export default Display;
import React from 'react';
import styles from './button.module.css';

const Button = (props) => (<button type="button" className={styles._btn} onClick={props.clickFn} disabled={props.disabledStatus}>{props.btnName}</button>)

export default Button;
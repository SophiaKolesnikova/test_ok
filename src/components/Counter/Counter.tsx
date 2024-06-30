import React from 'react';
import classes from './styles.module.css';
import cn from "classnames";

export interface CounterProps {
    variant: 'primary' | 'secondary';
    size: 'xs' | 's' | 'm' | 'l' | 'xl';
    children?: React.ReactNode;
}

const Counter: React.FC<CounterProps> = ({size, variant, children}) => {
    const mainCn = cn(classes.counter, classes[size], classes[variant]);
    return (
        <div className={mainCn}>{children}</div>
    );
};

export default Counter;
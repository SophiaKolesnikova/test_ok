import React from 'react';
import Loader from "../Loader/Loader.tsx";
import classes from './styles.module.css';
import cn from 'classnames';

export interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    size: 's' | 'm' | 'l';
    variant: 'primary' | 'secondary';
    type?: 'button' | 'submit' | 'reset';
    disabled: boolean;
    loading: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    size,
    variant,
    type,
    disabled,
    loading
}) => {
    const mainCn = cn(classes.button, classes[size], classes[variant], disabled ? classes.disabled : '');
    return (
        <button
            className={mainCn}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {loading && !disabled ? <Loader size={size} variant={variant}/> : children}
        </button>
    );
};

export default Button;

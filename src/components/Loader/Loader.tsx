import React from 'react';
import classes from './styles.module.css';
import cn from "classnames";

interface LoaderProps {
    size: string;
    variant: string;
}

const Loader: React.FC<LoaderProps> = ({size, variant}) => {
    const mainCn = cn(classes.loader, classes[size], classes[variant]);
    return (
        <div className={mainCn}></div>
    );
};

export default Loader;
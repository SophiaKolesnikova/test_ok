import React from 'react';
import styles from './styles.module.css';

interface LoaderProps {
    message?: string;
}

const Loader: React.FC<LoaderProps> = ({ message = 'Загрузка...' }) => {
    return (
        <div className={styles.loader}>
            {/*<div className={styles.loaderAnimation}></div>*/}
            <p>{message}</p>
        </div>
    );
};

export default Loader;
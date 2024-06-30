import React from 'react';

interface LabelProps {
    label: string;
}

const Label: React.FC<LabelProps> = ({label}) => {
    return (
        <p style={{margin: '0'}}>{label}</p>
    );
};

export default Label;
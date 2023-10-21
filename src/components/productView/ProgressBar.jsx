import React from 'react';


const containerStyle = {
    marginTop: '10px',
    marginBottom: '20px',
    border: '1px solid rgb(70, 163, 88)',
    borderRadius: '6px',
    background: '#ededed',

};

const contentStyle = {
    background: 'rgb(70, 163, 88)',
    height: '24px',
    textAlign: 'center',
    lineHeight: '24px',
    fontFamily: 'sans-serif',
    transition: '0.3s',
    color: 'white'

};

 export const ProgressBar = ({progress}) => {
    const state = `${progress}%`;
    return (
        <div style={containerStyle}>
            <div style={{...contentStyle, width: state}}>
                {progress >= 0 ? state : ''}
            </div>
        </div>
    );
};

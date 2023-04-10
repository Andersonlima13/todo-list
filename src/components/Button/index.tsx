//import { children } from 'react';
//import './styles.css'
import React from 'react'


interface Props {
    children: React.ReactNode;
    onClick: () => void;

  }


const Button: React.FC<Props> = ({ children, onClick }) => {
    return (
        <Button onClick={onClick}>
           {children}
        </Button>
    )
}

export default Button 
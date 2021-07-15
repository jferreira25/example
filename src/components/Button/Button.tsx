
import {  Button, PropTypes } from '@material-ui/core'
import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>&{
    classNames:string,
    fullWidth?:boolean,
    color:PropTypes.Color,
    children?:ReactNode,
    variant:'text' | 'outlined' | 'contained'
};

export function ButtonComponent({...props}:ButtonProps){
    return (
         <Button
         type={props.type}
         fullWidth = {props.fullWidth}
         variant={props.variant}
         color = {props.color}
         className={props.className}
       >
            {props.children}
        </Button>
    )
}
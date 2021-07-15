import {InputHTMLAttributes,forwardRef} from 'react'
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

type InputProps = InputHTMLAttributes<HTMLInputElement>&{
    label?:string,
    variant:string,
    fullWidth:boolean,
    error?:boolean,
    errorMessage?:string
};

const Input:
  React.FC<InputProps> =  forwardRef(({...props},ref)=>{
    return (
        
        <TextField
            inputRef = {ref}
            onChange = {props.onChange}
            error = {props.error ? true:false}
            name = {props.name}
            margin="normal"
            fullWidth ={props.fullWidth}
            label={props.label}
            type={props.type}
            autoComplete={props.autoComplete}
            variant="outlined"
            helperText={props.errorMessage}
      />
    )
}) 
export {Input};
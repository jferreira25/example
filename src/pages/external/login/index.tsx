import { Input } from "../../../components/Input/Input";
import {  Card, CardContent, Container, CssBaseline } from '@material-ui/core';
import { Grid, Avatar, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import useStyles from "./style";
import { ButtonComponent } from "../../../components/Button/Button";
import {  Post } from "../../../services/authentication";
import { useForm } from "react-hook-form";
import { loginRequest } from "../../../models/loginRequest";
import { yupResolver } from '@hookform/resolvers/yup';
import { ILoginResponse } from "../../../models/loginResponse";

export function LoginHome(){
  const { control, handleSubmit, formState: { errors }, reset , register }  = useForm({
  resolver: yupResolver(loginRequest),
  shouldUnregister: false,
});

  async function handleSignIn(login:any){
    

   var loginResponse = await Post<ILoginResponse>(login);

   if(loginResponse?.token)
     alert('authenticado');
  }

  const classes = useStyles();
    return(
      
        <Container component="main" maxWidth="sm" className={classes.container}>
          <Card className={classes.card}>
            <CardContent>
              <CssBaseline />
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <form className={classes.form} noValidate  onSubmit={ handleSubmit(handleSignIn) }>
                  <Input
                    error={ !! errors.email?.message }
                    errorMessage = {errors.email?.message}
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="email"
                    autoComplete="email"
                    autoFocus
                    {...register("email")}
                  />
                  <Input
                    error={ !! errors.senha?.message }
                    errorMessage = {errors.senha?.message}
                    variant="outlined"
                    required
                    fullWidth
                    label="senha"
                    type="senha"
                    id="senha"
                    autoComplete="senha"
                    {...register("senha")}
                  />
                
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <ButtonComponent
                    type="submit"
                    fullWidth
                    variant = "contained"
                    color="primary"
                    classNames={classes.submit}
                  >
                    Sign In
                  </ButtonComponent>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </CardContent>
          </Card>
        </Container>
        );
}
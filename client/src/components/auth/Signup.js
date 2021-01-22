import React, {useState} from 'react'
import {makeStyles, TextField, Grid, Button} from "@material-ui/core"
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/actions/auth';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        width: '25ch',
      },
    },
    body :{
        marginTop: 10
    },
    btnBody: {
        marginTop: 10
    },
    btn: {
        backgroundColor: "#11698e",
        color: "#fff"
    }
  }));

const Signup = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const [signup, setSignup] = useState({
        name: '',
        email: '',
        password: ''
    })


    const onChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value })
    }


    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(register(signup))
        console.log(signup)
    }

    if (isAuthenticated) {
        return <Redirect to="/home" />
    }

    return (
        <Grid container direction="column" justify="center" alignItems="center">
            <Grid item>
                <Grid container item className={classes.body}>
                <form className={classes.root} noValidate autoComplete="off">
                    <Grid item>
                        <TextField id="name" name="name" autoFocus label="Name" variant="filled" onChange={onChange} />
                    </Grid>
                    <Grid item>
                        <TextField id="email" name="email" label="Email" variant="filled" onChange={onChange} />
                    </Grid>
                    <Grid item>
                        <TextField id="password" name="password" label="Password" variant="filled" type="password" onChange={onChange} />
                    </Grid>
                </form>
                </Grid>
            </Grid>
            <Grid item className={classes.btnBody}>
                <Button className={classes.btn} onClick={onSubmit}>Submit</Button>
            </Grid>
        </Grid>
    )
}

export default Signup

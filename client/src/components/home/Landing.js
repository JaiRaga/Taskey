import React from 'react'
import { Grid, Typography, Button, makeStyles } from "@material-ui/core"
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
    },
    body: {
        marginTop: "20px"
    },
    innerChild: {
        
    }
}))

const Landing = () => {
    const classes = useStyles()
    const history = useHistory()
    return (
        <Grid container justify="center" className={classes.root}>
            <Grid item xs={10} className={classes.body}>
                <Grid container item direction="column" justify="flex-end" alignItems="center" className={classes.innerChild}>
                    <Grid item><Typography variant="h2" align="center">Get Things Done</Typography></Grid>
                    <Grid item>
                        <Button size="large" color="primary" onClick={() => history.push("/login")}>Login</Button>
                        <Button size="large" color="primary" onClick={() => history.push("/signup")}>SignUp</Button>
                    </Grid>
                </Grid>
            </Grid>
            
        </Grid>
    )
}

export default Landing

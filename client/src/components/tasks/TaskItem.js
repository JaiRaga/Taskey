import React from 'react'
import { Grid, Paper, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    margin: {
        margin: 10,
        padding: 40
    }
}))

const TaskItem = ({task}) => {
    const classes = useStyles()
    return (
        // <Grid container item justify="center">
        //     <Grid item>
                <Paper elevation={11} className={classes.margin}>
                    {task.description}
                </Paper>
        //     </Grid>
        // </Grid>
    )
}

export default TaskItem

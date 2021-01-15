import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, makeStyles, useMediaQuery } from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu"
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    color: {
        backgroundColor: "#c70039"
    }, 
    menuButton: {
        marginRight: theme.spacing(2),
        color: "#fff"
    },
    title: {
        flexGrow: 1,
    }
}));

const Navbar = () => {
    const classes = useStyles()
    const screenSize = useMediaQuery('(max-width:600px)')
    console.log(screenSize, typeof screenSize)
    return (
        <AppBar position="static" className={classes.color}>
            <Toolbar>
                {screenSize ? (
                <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                    <MenuIcon />
                </IconButton>
                ) : (
                <IconButton edge="start" className={classes.menuButton} aria-label="home">
                    <DoneOutlineIcon />
                </IconButton>
                )}
                <Typography></Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar

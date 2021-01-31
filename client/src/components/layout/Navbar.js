import React, { Fragment } from 'react'
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	makeStyles,
	useMediaQuery,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core'
import { useHistory, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import MenuIcon from '@material-ui/icons/Menu'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline'
import TwitterIcon from '@material-ui/icons/Twitter'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import PersonIcon from '@material-ui/icons/Person'
import HomeIcon from '@material-ui/icons/Home'
import PersonPinIcon from '@material-ui/icons/PersonPin'
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun'
import AdjustIcon from '@material-ui/icons/Adjust'
import { logout } from '../../redux/actions/auth'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	color: {
		backgroundColor: '#c70039',
	},
	menuButton: {
		marginRight: theme.spacing(2),
		color: '#fff',
	},
	title: {
		flexGrow: 1,
	},
	link: {
		textDecoration: 'none',
		color: 'white',
	},
	icons: {
		color: 'white',
		minWidth: '35px',
	},
	right: {
		display: 'flex',
		marginLeft: 'auto',
	},
}))

const Navbar = () => {
	const classes = useStyles()
	const history = useHistory()
	const dispatch = useDispatch()
	const screenSize = useMediaQuery('(max-width:600px)')
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

	const authLinks = (
		<Fragment>
			{/* <List className={classes.list}>
				<Link to='/dashboard' className={classes.link}>
					<ListItem button>
						<ListItemIcon className={classes.icons}>
							<TwitterIcon />
						</ListItemIcon>
						<ListItemText primary='Twitter' />
					</ListItem>
				</Link>
			</List> */}
			<List className={classes.right}>
				<Link to='/home' className={classes.link} underline='none'>
					<ListItem button>
						<ListItemIcon className={classes.icons}>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary='Tasks' />
					</ListItem>
				</Link>

				<Link to='/profile' className={classes.link} underline='none'>
					<ListItem button>
						<ListItemIcon className={classes.icons}>
							<PersonPinIcon />
						</ListItemIcon>
						<ListItemText primary='Profile' />
					</ListItem>
				</Link>

				<Link to='/settings' className={classes.link} underline='none'>
					<ListItem button>
						<ListItemIcon className={classes.icons}>
							<AdjustIcon />
						</ListItemIcon>
						<ListItemText primary='Setting' />
					</ListItem>
				</Link>

				<Link to='/' className={classes.link} underline='none'>
					<ListItem button onClick={() => dispatch(logout())}>
						<ListItemIcon className={classes.icons}>
							<DirectionsRunIcon />
						</ListItemIcon>
						<ListItemText primary='Logout' />
					</ListItem>
				</Link>
			</List>
		</Fragment>
	)

	const guestLinks = (
		<Fragment>
			<List className={classes.right}>
				<Link to='/login' className={classes.link} underline='none'>
					<ListItem button>
						<ListItemIcon className={classes.icons}>
							<PersonIcon />
						</ListItemIcon>
						<ListItemText primary='Login' />
					</ListItem>
				</Link>

				<Link to='/signup' className={classes.link} underline='none'>
					<ListItem button>
						<ListItemIcon className={classes.icons}>
							<PersonAddIcon />
						</ListItemIcon>
						<ListItemText primary='Register' />
					</ListItem>
				</Link>
			</List>
		</Fragment>
	)

	return (
		<AppBar position='static' className={classes.color}>
			<Toolbar>
				{screenSize ? (
					<IconButton
						edge='start'
						className={classes.menuButton}
						aria-label='menu'
						onClick={() => history.push('/home')}>
						<MenuIcon />
					</IconButton>
				) : (
					<IconButton
						edge='start'
						className={classes.menuButton}
						aria-label='home'>
						<DoneOutlineIcon />
					</IconButton>
				)}
				{isAuthenticated ? authLinks : guestLinks}
			</Toolbar>
		</AppBar>
	)
}

export default Navbar

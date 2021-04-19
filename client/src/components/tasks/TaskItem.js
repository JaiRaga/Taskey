import React from 'react'
import {
	Grid,
	Paper,
	Button,
	makeStyles,
	ButtonBase,
	IconButton,
	Typography,
} from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import EventBusyIcon from '@material-ui/icons/EventBusy'

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: 10,
		padding: '40px 10px 40px 40px',
		marginBottom: 30,
		backgroundColor: (props) => (props.completed ? '#99ff99' : '#e0e0d1'),
	},
	description: {
		paddingTop: 15,
	},
	completed: {
		color: green[700],
	},
	editIcon: {
		backgroundColor: theme.palette.editIcon,
	},
	deleteIcon: {
		backgroundColor: theme.palette.deleteIcon,
	},
	// icons: {
	//     display: 'flex'
	// },
	// icon: {
	//     marginLeft: 'auto'
	// }
}))

const TaskItem = ({ task }) => {
	const completed = task.completed
	const classes = useStyles({ completed })
	console.log(task.description.length, task.description)
	return (
		// <Grid container item justify="center">
		//     <Grid item>
		<Paper elevation={11} className={classes.margin}>
			<Grid container item>
				<Grid item xs={8}>
					<Typography align='center' className={classes.description}>
						{task.description}
					</Typography>
				</Grid>

				<Grid item xs={4} className={classes.icons}>
					<Grid container item className={classes.icon} justify='center'>
						<Grid item>
							<IconButton className={classes.completed}>
								<CheckCircleIcon />
							</IconButton>
						</Grid>
						<Grid item>
							<IconButton color='primary'>
								<EventBusyIcon />
							</IconButton>
						</Grid>
						<Grid item>
							<IconButton color='secondary'>
								<DeleteOutlineIcon />
							</IconButton>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Paper>
		//     </Grid>
		// </Grid>
	)
}

export default TaskItem

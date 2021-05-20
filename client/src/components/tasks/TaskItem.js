import React, { useState, Fragment, useEffect } from 'react'
import {
	Grid,
	Paper,
	Button,
	makeStyles,
	ButtonBase,
	IconButton,
	Typography,
	TextField,
} from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import CloseIcon from '@material-ui/icons/Close'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import EventBusyIcon from '@material-ui/icons/EventBusy'
import { useDispatch } from 'react-redux'
import { updateTask, deleteTask } from '../../redux/actions/task'

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: 10,
		padding: '40px 10px 15px 40px',
		marginBottom: 30,
		backgroundColor: (props) => (props.completed ? '#99ff99' : '#e0e0d1'),
	},
	description: {
		paddingTop: 15,
	},
	completed: {
		color: green[700],
	},
	close: {
		color: '#ee0000',
	},
	editIcon: {
		backgroundColor: theme.palette.editIcon,
	},
	deleteIcon: {
		backgroundColor: theme.palette.deleteIcon,
	},
	date: {
		marginTop: 15,
	},
	// icons: {
	//     display: 'flex'
	// },
	// icon: {
	//     marginLeft: 'auto'
	// }
}))

const TaskItem = ({ task }) => {
	// Complete Task
	const [completed, setCompleted] = useState(task.completed)
	// let completed = task.completed

	// for styling
	const classes = useStyles({ completed })

	const dispatch = useDispatch()

	// for modifing tasks complete state
	const handleComplete = () => {
		console.log('complete', completed, !completed)
		setCompleted((prev) => !prev)
		// completed = !completed
		console.log('complete', completed)
	}

	// Edit task
	const [edit, setEdit] = useState(false)
	const [description, setDescription] = useState(task.description)

	const toggleEdit = () => {
		console.log('Edit modal')
		setEdit(true)
	}

	const handleEdit = () => {
		dispatch(updateTask(description, task.completed, task._id))
		setEdit(false)
	}

	const handleChange = (e) => {
		console.log(e.target.value)
		setDescription(e.target.value)
	}

	useEffect(() => {
		dispatch(updateTask(task.description, completed, task._id))
	}, [completed])

	return (
		// <Grid container item justify="center">
		//     <Grid item>
		<Paper elevation={11} className={classes.margin}>
			<Grid container item>
				<Grid item xs={8}>
					<Typography align='center' className={classes.description}>
						{edit ? (
							<Grid container item direction='column'>
								<TextField
									id='edit-task'
									label='Edit task'
									varaint='filled'
									multiline
									value={description}
									onChange={handleChange}
								/>
								<Button onClick={handleEdit}>Edit</Button>
							</Grid>
						) : (
							task.description
						)}
					</Typography>
				</Grid>

				<Grid item xs={4} className={classes.icons}>
					<Grid container item className={classes.icon} justify='center'>
						<Grid item>
							<IconButton onClick={handleComplete}>
								{completed ? (
									<CloseIcon className={classes.close} />
								) : (
									<CheckCircleIcon className={classes.completed} />
								)}
							</IconButton>
						</Grid>
						<Grid item>
							<IconButton color='primary' onClick={toggleEdit}>
								<EventBusyIcon />
							</IconButton>
						</Grid>
						<Grid item>
							<IconButton
								color='secondary'
								onClick={() => dispatch(deleteTask(task._id))}>
								<DeleteOutlineIcon />
							</IconButton>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				container
				item
				justify='flex-end'
				alignItems='flex-end'
				className={classes.date}>
				<Grid item>
					{task.createdAt === task.updatedAt
						? new Date(task.createdAt).toString()
						: task.updatedAt}
				</Grid>
			</Grid>
		</Paper>
		//     </Grid>
		// </Grid>
	)
}

export default TaskItem

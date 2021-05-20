import React, { useEffect, useState } from 'react'
import {
	Grid,
	makeStyles,
	Hidden,
	CircularProgress,
	Fab,
	Button,
	Modal,
	Backdrop,
	Fade,
	TextField,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { useSelector, useDispatch } from 'react-redux'
import Tasks from '../tasks/Tasks'
import { addTask, loadTasks } from '../../redux/actions/task'
import CreateTask from '../tasks/CreateTask'
import { Fragment } from 'react'
import { useHistory } from 'react-router'

const useStyles = makeStyles((theme) => ({
	root: {},
	body: {
		// backgroundColor: "#444"
	},
	sides: {
		// backgroundColor: "#666"
	},
	createTask: {
		position: 'fixed',
		bottom: theme.spacing(2),
		right: theme.spacing(2),
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}))

const Home = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		setTimeout(() => dispatch(loadTasks()), 300)
	}, [])
	const classes = useStyles()
	let tasks = useSelector((state) => state.task.tasks)

	const history = useHistory()

	if (history.location.pathname === '/tasks') {
		tasks = tasks.filter((task) => task.completed === false)
		console.log(tasks)
	}

	// Modal
	const [open, setOpen] = useState(false)

	const handleOpen = () => setOpen(true)

	const handleClose = () => setOpen(false)

	const [description, setDescription] = useState('')

	console.log(description)

	const submit = () => {
		dispatch(addTask(description))
		handleClose()
	}

	return (
		<Grid container justify='center' className={classes.root}>
			<Hidden only={['xs']}>
				<Grid item sm={2} md={3} className={classes.sides}>
					{/* <CreateTask /> */}
				</Grid>
			</Hidden>

			<Grid item xs={12} sm={8} md={6} className={classes.body}>
				{!!tasks.length ? (
					<Fragment>
						<Tasks tasks={tasks} />
						<Modal
							aria-labelledby='transition-modal-title'
							aria-describedby='transition-modal-description'
							className={classes.modal}
							open={open}
							onClose={handleClose}
							closeAfterTransition
							BackdropComponent={Backdrop}
							BackdropProps={{
								timeout: 500,
							}}>
							<Fade in={open}>
								<div className={classes.paper}>
									<h2 id='transition-modal-title'>Create Task</h2>
									<p id='transition-modal-description'>
										Enter a description for the task.
									</p>
									<TextField
										id='description'
										name='description'
										label='Description'
										variant='filled'
										value={description}
										onChange={(e) => setDescription(e.target.value)}
										multiline
										fullWidth
									/>
									<Button color='primary' onClick={submit}>
										Submit
									</Button>
								</div>
							</Fade>
						</Modal>
						<Hidden only={['lg', 'xl']}>
							<Fab
								className={classes.createTask}
								onClick={handleOpen}
								color='secondary'
								aria-label='create task'>
								<AddIcon />
							</Fab>
						</Hidden>
						<Hidden only={['xs', 'sm', 'md']}>
							<Button
								className={classes.createTask}
								onClick={handleOpen}
								color='secondary'
								variant='contained'
								size='large'
								aria-label='create task'>
								Create Task
							</Button>
						</Hidden>
					</Fragment>
				) : (
					<Grid container item justify='center'>
						<CircularProgress />
					</Grid>
				)}
			</Grid>

			<Hidden only={['xs']}>
				<Grid item sm={2} md={3} className={classes.sides}>
					Sides
				</Grid>
			</Hidden>
		</Grid>
	)
}

export default Home

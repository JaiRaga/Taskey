import React, { useEffect } from 'react'
import {
	Grid,
	makeStyles,
	Hidden,
	CircularProgress,
	Fab,
	Button,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { useSelector, useDispatch } from 'react-redux'
import Tasks from '../tasks/Tasks'
import { loadTasks } from '../../redux/actions/task'
import CreateTask from '../tasks/CreateTask'
import { Fragment } from 'react'

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
}))

const Home = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		setTimeout(() => dispatch(loadTasks()), 300)
	}, [])
	const classes = useStyles()
	const tasks = useSelector((state) => state.task.tasks)

	return (
		<Grid container justify='center' className={classes.root}>
			<Hidden only={['xs']}>
				<Grid item xs={0} sm={2} md={3} className={classes.sides}>
					<CreateTask />
				</Grid>
			</Hidden>

			<Grid item xs={12} sm={8} md={6} className={classes.body}>
				{!!tasks.length ? (
					<Fragment>
						<Tasks tasks={tasks} />
						<Hidden only={['lg', 'xl']}>
							<Fab
								className={classes.createTask}
								color='secondary'
								aria-label='create task'>
								<AddIcon />
							</Fab>
						</Hidden>
						<Hidden only={['xs', 'sm', 'md']}>
							<Button
								className={classes.createTask}
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
				<Grid item xs={0} sm={2} md={3} className={classes.sides}>
					Sides
				</Grid>
			</Hidden>
		</Grid>
	)
}

export default Home

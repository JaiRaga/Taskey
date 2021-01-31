import React, { useEffect } from 'react'
import { Grid, makeStyles, Hidden, CircularProgress } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import Tasks from '../tasks/Tasks'
import { loadTasks } from '../../redux/actions/task'

const useStyles = makeStyles((theme) => ({
	root: {},
	body: {
		// backgroundColor: "#444"
	},
	sides: {
		// backgroundColor: "#666"
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
					Sides
				</Grid>
			</Hidden>

			<Grid item xs={12} sm={8} md={6} className={classes.body}>
				{!!tasks.length ? (
					<Tasks tasks={tasks} />
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

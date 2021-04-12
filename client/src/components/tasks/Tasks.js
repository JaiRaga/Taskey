import React from 'react'
import { Grid } from '@material-ui/core'
import TaskItem from './TaskItem'

const Tasks = ({ tasks }) => {
	return (
		<Grid container item direction='column' justify='center'>
			<Grid item>
				{tasks.map((task) => (
					<TaskItem key={task._id} task={task} />
				))}
			</Grid>
		</Grid>
	)
}

export default Tasks

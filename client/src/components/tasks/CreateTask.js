import React from 'react'
import { Grid, Button } from '@material-ui/core'

const CreateTask = () => {
	const handleClick = () => console.log('Hello')
	return (
		<Grid continer item justify='center' alignItems='center'>
			<Grid item>
				<Button onClick={handleClick}>Create Task</Button>
			</Grid>
		</Grid>
	)
}

export default CreateTask

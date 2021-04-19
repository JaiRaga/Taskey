import React from 'react'
import { makeStyles, Grid, Button } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
	container: {
		color: '#fff',
		border: `1px solid ${grey[700]}`,
	},
}))

const ProfileNavItem = ({ tab }) => {
	const classes = useStyles()
	return (
		<Button fullWidth className={classes.container}>
			{tab}
		</Button>
	)
}

export default ProfileNavItem

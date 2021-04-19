import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import ProfileNavItem from './ProfileNavItem'

const useStyles = makeStyles((theme) => ({
	container: {
		color: '#fff',
	},
}))

const ProfileNav = () => {
	const classes = useStyles()
	const tabs = ['tasks', 'social media']
	return (
		<Grid container item className={classes.container} direction='column'>
			{tabs.map((tab) => (
				<Grid item>
					<ProfileNavItem tab={tab} />
				</Grid>
			))}
		</Grid>
	)
}

export default ProfileNav

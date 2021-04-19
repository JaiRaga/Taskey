import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import { green, grey } from '@material-ui/core/colors'
import ProfileNav from './ProfileNav'
import ProfileMain from './ProfileMain'

const useStyles = makeStyles((theme) => ({
	container: {
		height: '94.2vh',
		color: '#fff',
		backgroundColor: grey[600],
	},
	profileNav: {
		border: `1px solid ${grey[700]}`,
	},
	main: {},
}))

const Profile = () => {
	const classes = useStyles()
	return (
		<Grid container justify='center'>
			<Grid container item xs={12} sm={10} md={6} className={classes.container}>
				<Grid item sm={3} lg={4} className={classes.profileNav}>
					<ProfileNav />
				</Grid>
				<Grid item className={classes.main}>
					<Grid container item>
						<ProfileMain />
						<Grid item></Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Profile

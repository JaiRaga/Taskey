import React from 'react'
import {
	Avatar,
	Grid,
	IconButton,
	makeStyles,
	useMediaQuery,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles((theme) => ({
	small: {
		width: theme.spacing(6),
		height: theme.spacing(6),
		margin: 10,
	},
	large: {
		width: theme.spacing(20),
		height: theme.spacing(20),
		margin: '10px',
	},
	info: {
		margin: 10,
	},
}))

const ProfileMain = () => {
	const classes = useStyles()
	const screen = useMediaQuery('(max-width:600px)')
	console.log(screen)
	return (
		<Grid container item>
			<Avatar
				alt='name'
				src=''
				variant='rounded'
				className={screen ? classes.small : classes.large}
			/>
			<Grid item>
				<Grid
					container
					item
					className={classes.info}
					direction='column'
					spacing={1}>
					<Grid item>Name: firstname lastname</Grid>
					<Grid item>completed: 100</Grid>
					<Grid item>
						<Grid container item spacing={3}>
							<Grid item>email: email@test.com</Grid>
							<IconButton size='small' color='primary'>
								<CloseIcon />
							</IconButton>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default ProfileMain

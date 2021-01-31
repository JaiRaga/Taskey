import React from 'react'
import { Grid, Hidden, makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: '#094',
	},
	sidenav: {
		backgroundColor: '#888',
	},
	sidenavBtn: {
		marginBottom: 5,
	},
	main: {
		backgroundColor: '#222',
		color: '#fff',
	},
}))

const Setting = (prop) => {
	const classes = useStyles()
	const demo = [
		{ name: 'first', body: 'content1' },
		{ name: 'first', body: 'content 2' },
		{ name: 'first', body: 'content 3' },
		{ name: 'first', body: 'content 4' },
		{ name: 'first', body: 'content 5' },
		{ name: 'first', body: 'content 6' },
	]
	console.log(prop)

	let mainContent = demo[0]
	const handleClick = (ind = 0) => {
		mainContent = demo[ind]
		console.log('clicked', mainContent)
	}

	console.log(mainContent)

	return (
		<Grid container justify='center'>
			<Grid
				container
				item
				xs={11}
				md={10}
				className={classes.container}
				justify='flex-start'>
				<Grid item xs={12} md={3} className={classes.sidenav}>
					<Grid container item direction='column'>
						{demo.map((name, index) => (
							<Button
								className={classes.sidenavBtn}
								onClick={() => handleClick(index)}>
								{name.name}
							</Button>
						))}
					</Grid>
				</Grid>
				<Hidden only={['xs', 'sm']}>
					<Grid item xs={0} md={8} className={classes.main}>
						{mainContent.body}
					</Grid>
				</Hidden>
			</Grid>
		</Grid>
	)
}

export default Setting

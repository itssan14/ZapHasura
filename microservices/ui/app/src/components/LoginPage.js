import React from 'react'
import Grid from 'material-ui/Grid'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import Navbar from './Navbar'
import Popover from 'material-ui/Popover'
import Typography from 'material-ui/Typography'
import axios from 'axios'

export default class Login extends React.Component {
	state = {
		error: false
	}

	handleClose = () => {
		this.setState({ error: false })
	}

	handleSubmit = event => {
		event.preventDefault()
		let uname = event.target.uname.value
		let pwd = event.target.pwd.value
		if (uname !== '' && pwd !== '') {
			axios
				.post('https://api.chowder46.hasura-app.io/login', {
					uname: uname,
					password: pwd
				})
				.then(res => {
					window.location = '/form'
				})
				.catch(err => {
					console.log(`${err}`)
				})
		} else {
			this.setState({ error: true })
		}
	}

	render() {
		return (
			<div>
				<Navbar />
				<Grid
					container
					alignItems="center"
					justify="center"
					spacing={0}
					style={{ height: '90vh' }}
				>
					<Grid item xs={10} sm={8} md={6} lg={4} xl={3}>
						<Paper style={{ paddingBottom: '2em', paddingTop: '1em' }}>
							<form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
								<Grid
									container
									alignItems="center"
									justify="center"
									spacing={0}
								>
									<Grid item xs={10}>
										<TextField
											label="Username"
											name="uname"
											margin="normal"
											placeholder="example@gmail.com"
											fullWidth
											required
											autoFocus
										/>
									</Grid>
								</Grid>
								<Grid
									container
									alignItems="center"
									justify="center"
									spacing={0}
								>
									<Grid item xs={10}>
										<TextField
											label="Password"
											name="pwd"
											margin="normal"
											placeholder="Enter Password"
											fullWidth
											required
										/>
									</Grid>
								</Grid>
								<Grid
									container
									alignItems="center"
									justify="center"
									spacing={0}
								>
									<Grid item>
										<Button
											raised
											type="submit"
											color="primary"
											style={{ marginTop: '1em' }}
										>
											SUBMIT
										</Button>
									</Grid>
								</Grid>
							</form>
							<Grid container alignItems="center" justify="center" spacing={0}>
								<Grid item>
									<Button
										href="/register"
										color="primary"
										style={{ marginTop: '1em' }}
									>
										SIGN UP
									</Button>
								</Grid>
							</Grid>
						</Paper>
					</Grid>
				</Grid>
				{/* Error Message */}
				<Popover
					open={this.state.error}
					anchorEl={null}
					anchorReference="anchorEl"
					onClose={this.handleClose}
					anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
					transformOrigin={{ vertical: 'top', horizontal: 'center' }}
					anchorPosition={{ top: 200, left: 400 }}
				>
					<Typography style={{ padding: '20px 20px' }}>
						Please enter valid information for all fields.
					</Typography>
				</Popover>
			</div>
		)
	}
}

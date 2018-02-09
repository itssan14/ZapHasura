import React from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import MenuItem from 'material-ui/Menu/MenuItem'
import Typography from 'material-ui/Typography'
import AddIcon from 'material-ui-icons/Add'
import Popover from 'material-ui/Popover'
import Fetch from 'isomorphic-fetch'
import axios from 'axios'

export default class RegFrom extends React.Component {
	state = {
		open: false,
		errOpen: false,
		age: '',
		gender: ''
	}

	dbStore = event => {
		const url = 'https://data.chowder46.hasura-app.io/v1/query'
		let requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		}
		let body = {
			type: 'insert',
			args: {
				table: 'user',
				objects: [
					{
						name: event.target.name.value,
						address: event.target.address.value,
						bday: event.target.date.value,
						age: event.target.age.value,
						gender: event.target.gender.value,
						email: event.target.email.value
					}
				]
			}
		}
		requestOptions.body = JSON.stringify(body)
		// AJAX REQUEST TO MICROSERVICE TO INSERT DATA
		Fetch(url, requestOptions)
			.then(function(response) {
				return response.json()
			})
			.then(function(result) {
				console.log(result)
				this.setState({ open: true })
			})
			.catch(function(error) {
				console.log('Request Failed:' + error)
			})
	}

	webHook = event => {
		axios
			.post('https://api.chowder46.hasura-app.io/hook', {
				name: event.target.name.value,
				address: event.target.address.value,
				bday: event.target.date.value,
				age: event.target.age.value,
				gender: event.target.gender.value,
				email: event.target.email.value
			})
			.then(data => {
				data.json()
			})
			.then(function(result) {
				console.log(result)
				this.setState({ open: true })
			})
			.catch(function(error) {
				console.log('Request Failed:' + error)
			})
	}

	handleSubmit = event => {
		event.preventDefault()
		/**
		 * Verify if all the required fields are filled
		 * If the required fields are filled then compare the password and conform password
		 * If they match send the info via post method
		 */
		if (
			event.target.name.value !== '' &&
			event.target.email.value !== '' &&
			event.target.date.value !== '' &&
			event.target.age.value !== '' &&
			event.target.gender.value !== ''
		) {
			/**
			 * Store the data into Hasura database
			 * URL : https://data.chowder46.hasura-app.io/v1/query
			 */
			this.dbStore(event)
			// Pass data to backend to store in the respective sheets.
			this.webHook(event)
		} else {
			this.setState({ errOpen: true })
		}
	}

	handleChange = event => {
		this.setState({
			age: event.target.value
		})
	}

	handleChangeGen = event => {
		this.setState({
			gender: event.target.value
		})
	}

	handleClose = () => {
		this.setState({ open: false, errOpen: false, fopen: false })
	}
	render() {
		const ageArr = [
			'15-18',
			'18-20',
			'20-25',
			'25-40',
			'40-50',
			'50-55',
			'55-60',
			'60 & above'
		]
		const genderArray = ['Male', 'Female', 'Cannot Disclose']
		return (
			<div>
				<form
					noValidate="false"
					autoComplete="off"
					onSubmit={this.handleSubmit}
				>
					<Grid container justify="center" alignItems="center" spacing={0}>
						<Grid item xs={8}>
							<TextField
								label="Name"
								name="name"
								margin="normal"
								placeholder="Please enter your complete name"
								fullWidth
								required
								autoFocus
							/>
						</Grid>
						<Grid item xs={8}>
							<TextField
								label="Email"
								name="email"
								margin="normal"
								placeholder="example@example.com"
								fullWidth
								required
							/>
						</Grid>
						<Grid item xs={8}>
							<TextField
								label="Address"
								placeholder="Please enter your address"
								name="address"
								multiline
								fullWidth
							/>
						</Grid>
						<Grid item xs={8}>
							<Grid container direction="row" alignItems="center">
								{/* Date Input Field */}
								<Grid item xs={4}>
									<TextField
										id="date"
										label="Birthday"
										type="date"
										name="bdate"
										helperText="Please select your birthday"
										InputLabelProps={{ shrink: true }}
										fullWidth
										required
									/>
								</Grid>
								{/* Age Input Field */}
								<Grid item xs={4}>
									<TextField
										select
										name="age"
										label="Select Age"
										value={this.state.age}
										onChange={this.handleChange}
										helperText="Please select your age group"
										margin="normal"
										fullWidth
										required
									>
										{ageArr.map(option => (
											<MenuItem key={option} value={option}>
												{option}
											</MenuItem>
										))}
									</TextField>
								</Grid>
								{/* Gender Input Field */}
								<Grid item xs={4}>
									<TextField
										select
										label="Select Gender"
										name="gender"
										value={this.state.gender}
										onChange={this.handleChangeGen}
										helperText="Please select your gender"
										margin="normal"
										fullWidth
										required
									>
										{genderArray.map(option => (
											<MenuItem key={option} value={option}>
												{option}
											</MenuItem>
										))}
									</TextField>
								</Grid>
							</Grid>
						</Grid>
						<Grid
							container
							justify="flex-end"
							spacing={0}
							style={{ paddingTop: '1.5rem' }}
						>
							<Grid item xs={3} style={{ paddingLeft: '7rem' }}>
								<Button
									type="submit"
									variant="fab"
									color="primary"
									onSubmit={this.handleSubmit}
								>
									<AddIcon />
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</form>
				<Popover
					open={this.state.open}
					anchorEl={null}
					anchorReference="anchorEl"
					onClose={this.handleClose}
					anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
					transformOrigin={{ vertical: 'top', horizontal: 'center' }}
					anchorPosition={{ top: 200, left: 400 }}
				>
					<Typography style={{ padding: '20px 20px' }}>
						Registered Successfully.
					</Typography>
				</Popover>
				<Popover
					open={this.state.errOpen}
					anchorEl={null}
					anchorReference="anchorEl"
					onClose={this.handleClose}
					anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
					transformOrigin={{ vertical: 'top', horizontal: 'center' }}
					anchorPosition={{ top: 200, left: 400 }}
				>
					<Typography style={{ padding: '20px 20px' }}>
						Please enter valid input for all required fields.
					</Typography>
				</Popover>
			</div>
		)
	}
}

import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import 'normalize-css'
// Components
import NotFound from './components/NotFound'
import RegForm from './components/RegForm'
import Navbar from './components/Navbar'

const App = () => (
	<div>
		<Navbar />
		<RegForm />
	</div>
)

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" component={App} exact={true} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
)

ReactDOM.render(<Router />, document.getElementById('root'))
registerServiceWorker()

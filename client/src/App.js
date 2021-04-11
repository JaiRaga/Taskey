import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/routing/PrivateRoute'
import Navbar from './components/layout/Navbar'
import Landing from './components/home/Landing'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Home from './components/home/Home'
import Setting from './components/setting/Setting'
// import Register from "./component/auth/Register";
// import Dashboard from "./component/layout/Dashboard";
import setAuthToken from './utils/setAuthToken'

import './App.css'

// Redux
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './redux/actions/auth'
// import Tasks from "./component/Tasks/Tasks";
// import Task from "./component/Tasks/Task";
// import AddTask from "./component/Tasks/AddTask";
// import UpdateTask from "./component/Tasks/UpdateTask";
import { loadTasks } from './redux/actions/task'

if (localStorage.token) {
	setAuthToken(localStorage.token)
}

function App() {
	useEffect(() => {
		store.dispatch(loadUser())
		store.dispatch(loadTasks())
	}, [])

	return (
		<Provider store={store}>
			<Router>
				<Navbar />
				<Route exact path='/' component={Landing} />
				<Switch>
					<Route exact path='/signup' component={Signup} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/settings' component={Setting} />
					<PrivateRoute exact path='/home' component={Home} />
					{/* <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/tasks' component={Tasks} />
            <Route exact path='/task/:id' component={Task} />
            <Route exact path='/add-task' component={AddTask} />
            <Route exact path='/edit-task' component={UpdateTask} /> */}
				</Switch>
			</Router>
		</Provider>
	)
}

export default App

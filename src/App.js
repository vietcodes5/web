import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header'
import Content from './components/Content'
// import Footer from './components/Footer'
import './css/App.css';

function App(props) {
	return ( 
		<Router>
			<Header />
			<Content />
			{/* <Footer /> */}
		</Router>
	);
}

export default App;
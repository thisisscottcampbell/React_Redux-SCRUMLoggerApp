import React, { useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
	useEffect(() => {
		//init Materialzie
		M.AutoInit();
	});
	return (
		<div>
			<SearchBar />
			<div className="container">
				<Logs />
			</div>
		</div>
	);
};

export default App;

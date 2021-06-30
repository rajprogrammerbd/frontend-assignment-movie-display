import { useState, useEffect } from "react";
import axios from 'axios';
import logo from './../images/logo.svg';
import searchBar from "./../images/searchBar.png";
import Details from "./details";
import Main from "./main";
import "./app.scss";

function App() {

	const [ state, setState ] = useState({ error: false, data: [], showingData: [], text: "", showDetails: false, clickedObj: undefined });

	const trim = () => {
		setState({ ...state, text: state.text.trim() });
	}
	
	const typed = e => {
        const result = state.data.filter(v => {
			if ( e.currentTarget.value.trim() === "" ) {
				return v;
			} else if ( v.original_title.toUpperCase().includes(e.currentTarget.value.toUpperCase()) ) {
					return v;
			}

			return undefined;
        });

        setState({ ...state, showingData: result, text: e.currentTarget.value })
    }

	const setDetails = (obj) => {
		// console.log('set details button clicked');
		setState({ ...state, showDetails: true, clickedObj: obj });
	}

	const setFromOutside = () => {
		setState({ ...state, showDetails: !state.showDetails });
	}

	useEffect(() => {

		axios.get(`${process.env.REACT_APP_API_DOMAIN}${process.env.REACT_APP_MOVIE_DB_API_KEY}`).then(obj => {
			const { items } = obj.data;

			setState({ ...state, data: items, showingData: items, error: false });
		}).catch(() => {
			setState({ ...state, data: [], showingData: [], error: true });
		});

	}, []);


	return (
		<>
			<header>
				<a href="/" className="homepage_link"><img src={logo} alt="Timescale" /></a>
				<div className="searchBar">
					<input type="text" value={state.text} onBlur={trim} onChange={e => typed(e)} className="input_form" placeholder="Search for a movie" />
					<img src={searchBar} className="icon_search" alt="search bar" />
				</div>
            </header>
			<Main data={state.showingData} setDetails={setDetails} error={state.error} />
			{ ( state.showDetails ) ? <Details obj={state.clickedObj} setFromOutside={setFromOutside} /> : null }
		</>
	);
}

export default App;

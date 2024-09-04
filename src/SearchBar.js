import {useState} from "react";
import "./SearchBar.css";

function SearchBar({ passChildFormData }) {
	const [cuisineType, setCuisineType] = useState("");
	const [location, setLocation] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		passChildFormData([cuisineType, location]);
	};

	
	return (
					
		<div className="searchBar">
			<form onSubmit={handleSubmit}>
				<input className="inputField" onChange={e => setCuisineType(e.target.value)} placeholder="Cuisine Type" required></input>
				<input className="inputField" onChange={e => setLocation(e.target.value)} placeholder="Location" required></input>
				<button className="submitButton" type="submit">Find Food!</button>
			</form>
		</div>
	);
	
}


export default SearchBar;

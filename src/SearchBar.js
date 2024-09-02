import {useState} from "react";

function SearchBar({ passChildFormData }) {
	const [cuisineType, setCuisineType] = useState("");
	const [location, setLocation] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		passChildFormData([cuisineType, location]);
	};

	
	return (
			
		<form onSubmit={handleSubmit}>
			<input onChange={e => setCuisineType(e.target.value)} placeholder="Cuisine Type" required></input>
			<input onChange={e => setLocation(e.target.value)} placeholder="Location" required></input>
			<button type="submit">Find Food!</button>
		</form>
	);
	
}


export default SearchBar;

import {useState} from "react";
import "./SearchBar.css";

const sortParameters = [{value: "best_match", label: "Best Match"}, {value: "rating", label: "Highest Rated"}, {value:"review_count", label:"Most Reviews"}, {value:"distance", label:"Closest Proximity"}];

function SearchBar({ passChildFormData }) {
	const [cuisineType, setCuisineType] = useState("");
	const [location, setLocation] = useState("");
	const [sortCriteria, setSortCriteria] = useState("best_match");
	const handleSubmit = (e) => {
		e.preventDefault();
		passChildFormData([cuisineType, location, sortCriteria]);
	};

	
	return (
					
		<div className="searchBar">
			<form onSubmit={handleSubmit}>
				<div className="sort-options">
					{sortParameters.map((x, index) => {
						return (
							<>
									<input className="sort-option" id={`sort-option-${index}`} type="radio" name="sortValue" onChange={e => setSortCriteria(x.value)}/>
									<label htmlFor={`sort-option-${index}`}>{x.label}</label> 
							</>
						);
					})}
				</div>
				<br/>
				<input className="inputField" onChange={e => setCuisineType(e.target.value)} placeholder="Cuisine Type" required></input>
				<input className="inputField" onChange={e => setLocation(e.target.value)} placeholder="Location" required></input>
				<button className="submitButton" type="submit">Find Food!</button>
			</form>
		</div>
	);
	
}


export default SearchBar;

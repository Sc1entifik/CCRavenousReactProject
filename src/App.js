import {useState} from 'react';

import './App.css';
import SearchBar from "./SearchBar.js";
import Business from "./Business.js";
import RavenousAbout from "./RavenousAbout.js";
import yelpAPI from "./yelp.mjs";


function App() {
	const [formObject, setFormObject] = useState("");
	const handleFormData = data => {
		const [cuisineType, location] = data;
		const yelpObject = new yelpAPI(cuisineType, location);
		yelpObject.yelpRestaurants().then( x => setFormObject(x) );
	};

  return (
    <div className="App">
				<SearchBar passChildFormData={handleFormData}/>
				<RavenousAbout />

				<div className="restaurantGrid">
					{formObject && formObject.map(Business)}
				</div>
    </div>
  );
}

export default App;

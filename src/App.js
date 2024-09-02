import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from "./SearchBar.js";
import Business from "./Business.js";
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
      <header className="App-header">
				<SearchBar passChildFormData={handleFormData}/>
				{formObject ? formObject.map(Business): "WTF"}

				
      </header>
    </div>
  );
}

export default App;

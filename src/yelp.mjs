class yelpAPI {
	static apiKey = process.env.REACT_APP_YELP_API_KEY;
	static apiUrl = "https://api.yelp.com/v3/businesses/search?";


	constructor(cuisineType, location, sortCriteria) {
		this.cuisineType = this.#sanitizeInput(cuisineType);
		this.location = this.#sanitizeInput(location);
		this.sortCriteria = sortCriteria;
	}


	#sanitizeInput(input) {
		let sanitizedInput = ""
		
		for (let i=0; i<input.length; i++) {
			const sanitizedLetter = input[i] !== " " ? input[i]: "%20";
			sanitizedInput += sanitizedLetter;
		}

		return sanitizedInput.toLowerCase();
	}

	//returns a promise object that should resolve to a json object.
	yelpRestaurants() {
		const searchUrl = `${yelpAPI.apiUrl}term=${this.cuisineType}&location=${this.location}&sort_by=${this.sortCriteria}`;
		const headers = {
			"accept": "application/json",
			"Authorization": `Bearer ${yelpAPI.apiKey}`, 
		};
		const options = {
			method: "GET",
			headers: headers
		};
		return fetch(searchUrl, options)
			.then(response => response.json())
			.then(response => response.businesses)
			.catch(err => console.error(err));
	}
}

export default yelpAPI;

class yelpAPI {
	static apiKey = process.env.REACT_APP_YELP_API_KEY;
	static apiUrl = "https://api.yelp.com/v3/businesses/search?";


	constructor(cuisineType, location) {
		this.cuisineType = this.#sanitizeInput(cuisineType);
		this.location = this.#sanitizeInput(location);
	}


	#sanitizeInput(input) {
		let sanitizedInput = ""
		
		for (let i=0; i<input.length; i++) {
			const sanitizedLetter = input[i] !== " " ? input[i]: "%20";
			sanitizedInput += sanitizedLetter;
		}

		return sanitizedInput.toLowerCase();
	}


	yelpRestaurants() {
		const searchUrl = `${yelpAPI.apiUrl}term=${this.cuisineType}&location=${this.location}`;
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
			.catch(err => err);
	}
}

export default yelpAPI;

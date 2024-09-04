import "./Business.css";

const Business = (restaurantObject) => {
	const restaurantTypes = restaurantObject.categories.map((x => `${x.title} `)); //Needed because categories returns a list of varying number of objects which have varying cuisine type names.
	return (
		<div className="restaurantCard">
			<p className="restaurantName">{restaurantObject.name}</p>
			<img src={restaurantObject.image_url} alt="front of restaurant"/>
			<p className="address">{restaurantObject.location.address1}<br/>{restaurantObject.location.city}, {restaurantObject.location.state} {restaurantObject.location.zip_code}</p>
			<div className="ratings">
				<p>Categories: {restaurantTypes}</p>
				<p>Rating: {restaurantObject.rating}</p>
				<p>Reviews: {restaurantObject.review_count}</p>
			</div>
		</div>
	);
}

export default Business; 

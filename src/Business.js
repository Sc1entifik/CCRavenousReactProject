import "./Business.css";

const Business = (restaurantObject) => {
	const restaurantTypes = restaurantObject.categories.map((x => `${x.title} `)); //Needed because categories returns a list of varying number of objects which have varying cuisine type names.
	return (
		<div>
			<img src={restaurantObject.image_url} alt="front of restaurant"/>
			<p className="reasturantName">{restaurantObject.name}</p>
			<div className="addressAndRatings">
				<p>{restaurantObject.location.address1}</p>
				<p>{restaurantTypes}</p>
				<p>{restaurantObject.location.city}</p>
				<p>{restaurantObject.rating}</p>
				<p>{restaurantObject.location.state} {restaurantObject.location.zipcode}</p>
				<p>{restaurantObject.review_count}</p>
			</div>
		</div>
	);
}

export default Business; 

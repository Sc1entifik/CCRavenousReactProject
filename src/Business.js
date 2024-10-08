import "./Business.css";

const Business = ({key, restaurantObject}) => {
	console.log(restaurantObject.id);
	const restaurantTypes = restaurantObject.categories.map((x => `${x.title} `)); //Needed because categories returns a list of varying number of objects which have varying cuisine type names.
	return (
		<div className="restaurantCard">
			<p className="restaurantName">{restaurantObject.name}</p>
			<img src={restaurantObject.image_url} alt="front of restaurant"/>
			<p className="address">{restaurantObject.location.address1}<br/>{restaurantObject.location.city}, {restaurantObject.location.state} {restaurantObject.location.zip_code}</p>
			<div className="ratings">
				<p>Categories <br/><br/>{restaurantTypes}</p>
				<p>Rating <br/><br/>{restaurantObject.rating} Stars</p>
				<p>Reviews <br/><br/>{restaurantObject.review_count}</p>
			</div>
		</div>
	);
}

export default Business; 

import yelpAPI from "./yelp.mjs";
import { writeFile } from "node:fs";


const jsonGenerator = new yelpAPI("Indian", "Pittsburgh");
const dataTarget = await jsonGenerator.jsonString();
const dataTarget2 = await jsonGenerator.yelpRestaurants();
console.log(process.env.REACT_APP_YELP_API_KEY);
writeFile("./yelpExampleJson.json", dataTarget, e => {
	if (e) {
		console.log("Operation failed!");
	} else {
		console.log("Operation successful!");
	}
});

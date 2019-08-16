import axios from "axios";
import { APIKEY } from "react-native-dotenv";

export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers: {
		Authorization: `Bearer ${APIKEY}`
	}
});

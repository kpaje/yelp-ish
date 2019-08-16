import React, { useState } from "react";
import { View, Text, Stylesheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
	const [term, setTerm] = useState("");
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

	const searchApi = async () => {
		try {
			const response = await yelp.get("/search", {
				params: {
					limit: 50,
					term,
					location: "San Jose"
				}
			});
			setResults(response.data.businesses);
		} catch (err) {
			setErrorMessage("Something in the search went wrong");
		}
	};

	return (
		<View>
			<SearchBar
				term={term}
				onTermChange={setTerm}
				// onTermChange={newTerm => setTerm(newTerm)}
				onTermSubmit={() => searchApi()}
			/>
			{errorMessage ? <Text>{errorMessage} </Text> : null}
			<Text>We have found {results.length}</Text>
		</View>
	);
};

export default SearchScreen;

import React, { useState } from "react";
import { View, Text, Stylesheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
	const [term, setTerm] = useState("");
	const [results, setResults] = useState([]);

	const searchApi = async () => {
		const response = await yelp.get("/search", {
			params: {
				limit: 50,
				term,
				location: "San Jose"
			}
		});
		setResults(response.data.businesses);
	};

	return (
		<View>
			<SearchBar
				term={term}
				onTermChange={setTerm}
				// onTermChange={newTerm => setTerm(newTerm)}
				onTermSubmit={() => searchApi()}
			/>
			<Text>Search Screen </Text>
			<Text>We have found {results.length}</Text>
		</View>
	);
};

export default SearchScreen;

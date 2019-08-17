import React, { useState, useEffect } from "react";
import { View, Text, Stylesheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
	const [term, setTerm] = useState("");
	const [searchApi, results, errorMessage] = useResults();

	return (
		<View>
			<SearchBar
				term={term}
				onTermChange={setTerm}
				// onTermChange={newTerm => setTerm(newTerm)}
				onTermSubmit={() => searchApi(term)}
			/>
			{errorMessage ? <Text>{errorMessage} </Text> : null}
			<Text>We have found {results.length}</Text>
		</View>
	);
};

export default SearchScreen;

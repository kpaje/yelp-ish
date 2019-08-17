import React, { useState, useEffect } from "react";
import { View, Text, Stylesheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

export default () => {
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

	const searchApi = async searchTerm => {
		try {
			const response = await yelp.get("/search", {
				params: {
					limit: 50,
					term: searchTerm,
					location: "San Jose"
				}
			});
			setResults(response.data.businesses);
		} catch (err) {
			setErrorMessage("Something in the search went wrong");
		}
	};

	useEffect(() => {
		searchApi("pasta");
	}, []);

	return [searchApi, results, errorMessage];
};

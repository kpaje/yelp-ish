import React, {useState} from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import yelp from '../api/yelp'

const ResultsList = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam("id");
    
    const getResult=(id) => {
        const response = await yelp.get(`/${id}`);
        response.data;
    }
	return (
		<View>
			<Text>Results Show</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginLeft: 15
	}
});

export default ResultsList;

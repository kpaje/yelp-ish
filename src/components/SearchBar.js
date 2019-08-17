import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
	return (
		<View style={styles.backgroundStyle}>
			<Feather style={styles.iconStyle} name="search" size={30} />
			<TextInput
				autoCapitalize="none"
				autoCorrect={false}
				style={styles.inputStyle}
				placeholder="search"
				value={term}
				onChangeText={onTermChange}
				onEndEditing={onTermSubmit}
				// onChangeText={newTerm => onTermChange(newTerm)}
				// onEndEditing={() => onTermSubmit(newTerm)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	backgroundStyle: {
		marginTop: 15,
		backgroundColor: "#F0EEEE",
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: "row",
		marginBottom: 10
	},
	inputStyle: {
		// borderColor: "black",
		// borderWidth: 1,
		flex: 1,
		fontSize: 18
	},
	iconStyle: {
		fontSize: 35,
		alignSelf: "center",
		marginHorizontal: 15
	}
});

export default SearchBar;

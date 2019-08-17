import { createStackNavigator, createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import ResulstsShowScreen from "./src/screens/ResultsShowScreen";

const navigator = createStackNavigator(
	{
		Search: SearchScreen,
		ResultsShow: ResulstsShowScreen
	},
	{
		initialRouteName: "Search",
		defaultNavigationOptions: {
			title: "Business Search"
		}
	}
);

export default createAppContainer(navigator);

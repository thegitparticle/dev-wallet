import { Dimensions } from "react-native";

const dimensions = {
	fullHeight: Dimensions.get("window").height,
	fullWidth: Dimensions.get("window").width,
};

export const layoutVariants = {
	// parent views
	full_screen: {
		width: dimensions.fullWidth,
		height: dimensions.fullHeight,
	},

	// child views
	child_view_0: {
		width: dimensions.fullWidth,
	},
	child_view_20: {
		width: dimensions.fullWidth - 40,
	},
};

import { makeTheme } from "dripsy";
import { textVariants } from "./text";
import { Dimensions } from "react-native";
import { layoutVariants } from "./layout";
import { zIndices } from "./zIndices";

export const dimensions = {
	fullHeight: Dimensions.get("window").height,
	fullWidth: Dimensions.get("window").width,
};

export const dripsyTheme = makeTheme({
	types: {
		// defaults to true
		// recommended: keep this as true
		strictVariants: false,
	},
	colors: {
		light: "#E5E5E5",
		off_light: "#CECECE",
		dark: "#0A0A0A",
		off_dark: "#0E0E0E",
		positive: "#30CF82",
		negative: "#EF372B",
	},
	space: {
		// recommended: set 0 first, then double for consistent nested spacing
		$0: 0,
		$1: 5,
		$2: 10,
		$3: 15,
		$4: 20,
		$5: 25,
		$6: 30,
		$7: 35,
		$8: 40,
		$9: 45,
		$10: 50,
	},
	radii: {
		$0: 0,
		$1: 10,
		$2: 20,
		$3: 30,
		$full: 999,
	},
	text: textVariants,
	layout: layoutVariants,
	zIndices: zIndices,
});

type MyTheme = typeof dripsyTheme;

declare module "dripsy" {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface DripsyCustomTheme extends MyTheme {}
}

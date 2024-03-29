import { useSx, View } from "dripsy";
import { ImageBackground, ImageSourcePropType } from "react-native";
import { BlurView } from "expo-blur";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const AuthScreenView = ({ children }: any) => {
	return (
		<ScreenView
			backgroundImage={require("../../../assets/backgroundgradients/bg-gradient-1.png")}
		>
			{children}
		</ScreenView>
	);
};

export const MainScreenView = ({ children }: any) => {
	return (
		<ScreenView
			backgroundImage={require("../../../assets/backgroundgradients/bg-gradient-2.png")}
		>
			{children}
		</ScreenView>
	);
};

export const SecondaryScreenView = ({ children }: any) => {
	return (
		<ScreenView
			backgroundImage={require("../../../assets/backgroundgradients/bg-gradient-3.png")}
		>
			{children}
		</ScreenView>
	);
};

interface ScreenViewProps {
	children: React.ReactNode;
	backgroundImage: ImageSourcePropType;
}

function ScreenView(props: ScreenViewProps) {
	const sx = useSx();

	return (
		<View variant="layout.full_screen" sx={{ backgroundColor: "dark" }}>
			<ImageBackground
				source={props.backgroundImage}
				style={sx({ width: "100%", height: "100%" })}
			>
				<BlurView
					intensity={100}
					tint="dark"
					style={sx({
						width: "100%",
						height: "100%",
						position: "absolute",
						backgroundColor: "dark",
						opacity: 0.75,
						paddingTop: statusBarHeight,
					})}
				>
					{props.children}
				</BlurView>
			</ImageBackground>
		</View>
	);
}

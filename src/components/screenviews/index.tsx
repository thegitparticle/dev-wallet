import { useSx, View } from "dripsy";
import { ImageBackground } from "react-native";
import { BlurView } from "expo-blur";

export const AuthScreenView = ({ children }: any) => {
	return (
		<ScreenView backgroundImage="../../../assets/backgroundgradients/bg-gradient-1.png">
			{children}
		</ScreenView>
	);
};

export const MainScreenView = ({ children }: any) => {
	return (
		<ScreenView backgroundImage="../../../assets/backgroundgradients/bg-gradient-2.png">
			{children}
		</ScreenView>
	);
};

export const SecondaryScreenView = ({ children }: any) => {
	return (
		<ScreenView backgroundImage="../../../assets/backgroundgradients/bg-gradient-3.png">
			{children}
		</ScreenView>
	);
};

interface ScreenViewProps {
	children: React.ReactNode;
	backgroundImage: string;
}

function ScreenView(props: ScreenViewProps) {
	const sx = useSx();

	return (
		<View variant="layout.full_screen" sx={{ backgroundColor: "dark" }}>
			<ImageBackground
				source={require(props.backgroundImage)}
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
					})}
				>
					{props.children}
				</BlurView>
			</ImageBackground>
		</View>
	);
}

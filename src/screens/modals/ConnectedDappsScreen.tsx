import { Text } from "dripsy";
import { SecondaryScreenView } from "../../components/screenviews";
import { useConnectedDappsState } from "../../state/connectedDappsState";

export default function ConnectedDappsScreen() {
	const connectedDappsState = useConnectedDappsState();

	return (
		<SecondaryScreenView>
			<Text
				variant="text.body_small"
				sx={{ color: "off_light", my: "$2" }}
			>
				connected dapps will be shown here
			</Text>
			{connectedDappsState.dapps.map((dapp) => {
				return (
					<Text
						key={dapp.id}
						variant="text.body_small"
						sx={{ color: "positive", my: "$2" }}
					>
						{dapp.name}
					</Text>
				);
			})}
		</SecondaryScreenView>
	);
}

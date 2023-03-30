import { Text, View } from "dripsy";

import { useState } from "react";
import { Adapt, Select, Sheet, YStack } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useLiveWalletsState } from "../../state/liveWalletsState";

export default function WalletSwitcher() {
	const liveWalletsState = useLiveWalletsState();

	const [val, setVal] = useState(liveWalletsState.wallets[0].address);

	return (
		<Select id="food" value={val} onValueChange={setVal}>
			<Select.Trigger
				w={180}
				iconAfter={
					<Ionicons name="chevron-down" size={20} color="#E5E5E5" />
				}
			>
				<Select.Value placeholder="Something" />
			</Select.Trigger>

			<Adapt when="sm" platform="touch">
				<Sheet modal dismissOnSnapToBottom>
					<Sheet.Frame>
						<Sheet.ScrollView>
							<Adapt.Contents />
						</Sheet.ScrollView>
					</Sheet.Frame>
					<Sheet.Overlay />
				</Sheet>
			</Adapt>

			<Select.Content zIndex={200000}>
				<Select.Viewport minWidth={200}>
					<Select.Group space="$0">
						<Select.Label>my wallets</Select.Label>
						{liveWalletsState.wallets.map((wallet, key) => {
							return (
								<Select.Item
									index={key}
									key={key}
									value={wallet.address}
								>
									<Select.ItemText
										style={{ color: "#E5E5E5" }}
									>
										Wallet {key + 1}
									</Select.ItemText>
									<Select.ItemIndicator ml="auto">
										<Ionicons
											name="checkmark"
											size={20}
											color="#E5E5E5"
										/>
									</Select.ItemIndicator>
								</Select.Item>
							);
						})}
					</Select.Group>
				</Select.Viewport>
			</Select.Content>
		</Select>
	);
}

import { View, Text } from "dripsy";
import { Button, XStack, YStack } from "tamagui";

interface SeedPhraseComponentProps {
	seedPhrase: string;
}

export default function SeedPhraseComponent(props: SeedPhraseComponentProps) {
	const phraseArray: string[] = props.seedPhrase.split(" ");

	const OneWord = (word: string, id: number, second: boolean) => {
		return (
			<Button key={id} onPress={() => {}} theme="green">
				<Text variant="button_large" sx={{ color: "light" }}>
					{String(id + 1 + (second ? 6 : 0))}. {word}
				</Text>
			</Button>
		);
	};

	return (
		<XStack space>
			<YStack space>
				{phraseArray
					.slice(0, 6)
					.map((word, id) => OneWord(word, id, false))}
			</YStack>
			<YStack space>
				{phraseArray
					.slice(6, 12)
					.map((word, id) => OneWord(word, id, true))}
			</YStack>
		</XStack>
	);
}

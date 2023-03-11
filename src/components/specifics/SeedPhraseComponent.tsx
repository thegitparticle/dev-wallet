import { View, Text } from "dripsy";

interface SeedPhraseComponentProps {
	seedPhrase: string;
}

export default function SeedPhraseComponent(props: SeedPhraseComponentProps) {
	const phraseArray: string[] = props.seedPhrase.split(" ");

	const OneWord = (word: string, id: number) => {
		return (
			<Text key={id} variant="text.body_large" sx={{ color: "light" }}>
				{String(id + 1)}. {word}
			</Text>
		);
	};

	return (
		<View
			sx={{
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			{phraseArray.map((word, id) => OneWord(word, id))}
		</View>
	);
}

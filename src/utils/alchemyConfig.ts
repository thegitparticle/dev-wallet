import { Network, Alchemy } from "alchemy-sdk";
// @ts-expect-error - `@env` is a virtualised module via Babel config.
import { ALCHEMY_GOERLI, ALCHEMY_MUMBAI } from "react-native-dotenv";

const goerliSettings = {
	apiKey: ALCHEMY_GOERLI,
	network: Network.ETH_GOERLI,
};

export const goerliAlchemy = new Alchemy(goerliSettings);

const mumbaiSettings = {
	apiKey: ALCHEMY_MUMBAI,
	network: Network.MATIC_MUMBAI,
};

export const mumbaiAlchemy = new Alchemy(mumbaiSettings);

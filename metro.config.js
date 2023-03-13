// metro.config.js
module.exports = {
	resolver: {
		extraNodeModules: require("expo-crypto-polyfills"),
	},
};

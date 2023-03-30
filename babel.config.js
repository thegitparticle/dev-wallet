module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"module:react-native-dotenv",
				{
					moduleName: "react-native-dotenv",
					verbose: false,
				},
			],
			[
				"@tamagui/babel-plugin",
				{
					components: ["tamagui"],
					config: "./tamagui.config.ts",
					logTimings: true,
				},
			],
			[
				"transform-inline-environment-variables",
				{
					include: "TAMAGUI_TARGET",
				},
			],
			["react-native-reanimated/plugin"],
		],
	};
};

module.exports = {
  eslint: {
    plugins: ["formatjs"],
    rules: {
      "formatjs/no-offset": "error",
    },
  },
  babel: {
    plugins: [
      [
        "react-intl",
        {
          idInterpolationPattern: "[sha512:contenthash:base64:6]",
          extractFromFormatMessageCall: true,
          ast: true,
        },
      ],
    ],
  },
};

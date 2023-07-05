const mainColors = {
  blue1: "#0BCAD4",
  blue3: "#0060CB",
  dark1: "#112340",
  green1: "#E1ECC8",
  blue2: "#C1ECE4",
  grey1: "#7D8797",
  grey2: "#E9E9E9",
  grey3: "#EDEEF0",
  dark2: "rgba(0, 0, 0, 0.5)",
};

export const colors = {
  primary: mainColors.blue1,
  secondary: mainColors.dark1,
  greenLight: mainColors.green1,
  blueLight: mainColors.blue2,
  disable: mainColors.grey3,
  tertiary: mainColors.blue3,
  white: "white",
  black: "black",
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
  },
  button: {
    primary: {
      background: mainColors.blue1,
      text: "white",
    },
    secondary: {
      background: "white",
      text: mainColors.dark1,
    },
  },
  border: mainColors.grey2,
  loading: mainColors.dark2,
};

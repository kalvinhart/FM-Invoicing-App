const lightTheme = {
  colors: {
    primary: "#7C5DFA",
    primaryLight: "#9277FF",
    danger: "#EC5757",
  },
  backgrounds: {
    body: "#F8F8FB",
    header: "#373B53",
    invoiceItems: "#F9FAFE",
    invoiceTotal: "#373B53",
    main: "#FFFFFF",
  },
  text: {
    primary: "#0C0E16",
    secondary: "#7E88C3",
  },
  buttons: {
    primary: {
      background: "#7C5DFA",
      hover: "#9277FF",
      text: "#FFFFFF",
    },
    secondary: {
      background: "#F8F8FB",
      hover: "#DFE3FA",
      text: "#7E88C3",
    },
    tertiary: {
      background: "#373B53",
      hover: "#0C0E16",
      text: "#888EB0",
    },
    danger: {
      background: "#EC5757",
      hover: "#FF9797",
      text: "#FFFFFF",
    },
  },
  status: {
    paid: "51, 214, 159",
    pending: "255, 143, 0",
    draft: "55, 59, 83",
  },
  form: {
    input: {
      primary: "#7C5DFA",
      background: "#FFFFFF",
      border: "#DFE3FA",
      focus: "#7C5DFA",
    },
  },
};

const darkTheme = {
  colors: {
    primary: "#7C5DFA",
    primaryLight: "#9277FF",
    danger: "#EC5757",
  },
  backgrounds: {
    body: "#141625",
    header: "#1E2139",
    invoiceItems: "#252945",
    invoiceTotal: "#0C0E16",
    main: "#1E2139",
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#DFE3FA",
    danger: "#EC5757",
  },
  buttons: {
    primary: {
      background: "#7C5DFA",
      hover: "#9277FF",
      text: "#FFFFFF",
    },
    secondary: {
      background: "#252945",
      hover: "#FFFFFF",
      text: "#DFE3FA",
    },
    tertiary: {
      background: "#373B53",
      hover: "#0C0E16",
      text: "#888EB0",
    },
    danger: {
      background: "#EC5757",
      hover: "#FF9797",
      text: "#FFFFFF",
    },
  },
  status: {
    paid: "51, 214, 159",
    pending: "255, 143, 0",
    draft: "223, 227, 250",
  },
  form: {
    input: {
      primary: "#7C5DFA",
      background: "#1E2139",
      border: "#252945",
      focus: "#7C5DFA",
      danger: "#EC5757",
    },
  },
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

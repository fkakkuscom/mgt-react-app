import { withThemeByDataAttribute } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import { themes } from "storybook/internal/theming";
import "../src/tailwind.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "transparent",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "dark",
      attributeName: "data-mode",
    }),
  ],
};

export default preview;

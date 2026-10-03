import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: {
          500: { value: "#2563EB" },
          600: { value: "#1D4ED8" },
        },
        secondary: {
          500: { value: "#7C3AED" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
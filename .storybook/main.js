/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    // storybook-addon-designs v6 is incompatible with Storybook 10.
    // parameters.design is set in each story and will activate once a compatible
    // version ships. Track: https://github.com/morgs32/storybook-addon-designs
  ],
  "framework": "@storybook/react-vite",
};

export default config;

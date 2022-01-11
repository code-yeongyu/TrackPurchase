import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  preset: "jest-puppeteer",
  coveragePathIgnorePatterns: ["elementParser.ts"],
};
export default config;

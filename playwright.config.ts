import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    //testMatch:["tests/login.test.ts"]
    testMatch: ["tests/recorded.test.ts"],
    use: {
        headless: false
    }
};

export default config;


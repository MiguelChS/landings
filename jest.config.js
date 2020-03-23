module.exports = {
    rootDir: "src",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    transformIgnorePatterns: ["node_modules/(?!@am)"],
};

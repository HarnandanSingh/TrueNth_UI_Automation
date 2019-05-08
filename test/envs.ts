
export const Env = {
    TEST: "https://test.truenth.org/",

    PROD: "https://truenth.org/",

    GB: "en-gb",

    getUrl: () => Env[process.env.environment] + Env[process.env.country]
}
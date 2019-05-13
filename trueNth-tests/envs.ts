
export const Environment = {
    TEST: "https://test.truenth.org/",

    PROD: "https://truenth.org/",

    GB: "en-gb",

    url: () => Environment[process.env.environment] + Environment[process.env.country]
}
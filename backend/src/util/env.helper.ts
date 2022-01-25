export function isDevelopmentEnvironment(): boolean {
    return process.env.ENVIRONMENT == "DEV"
}

export function isProductionEnvironment(): boolean {
    return !isDevelopmentEnvironment()
}

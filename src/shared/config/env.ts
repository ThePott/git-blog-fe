const checkEnvVar = (envVarName: string): string => {
    const envVar = import.meta.env[envVarName]
    if (!envVar) {
        throw new Error(`---- MISSING ENV VAR: ${String(envVarName)}`)
    }

    return envVar
}

export const VITE_BASE_URL = checkEnvVar("VITE_BASE_URL")

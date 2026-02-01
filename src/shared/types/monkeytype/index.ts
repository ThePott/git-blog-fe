export type MonkeytypeMode = "time" | "words" | "quote" | "zen" | "custom"

export type MonkeytypeResult = {
    id: string
    monkeyTypeId: string
    uid: string
    wpm: number
    rawWpm: number
    charStats: number[]
    acc: number
    mode: MonkeytypeMode
    mode2: string
    timestamp: string
    testDuration: number
    afkDuration: number
    restartCount: number
    incompleteTestSeconds: number
    quoteLength: number
    funbox: string[]
    consistency: number
    keyConsistency: number
    punctuation: boolean
    isPb: boolean
}

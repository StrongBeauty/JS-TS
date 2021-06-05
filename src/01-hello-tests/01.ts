
export function sum(a: number, b: number) {
    return a + b
}

export function mult(a: number, b: number) {
    return a * b
}

export function splitIntoWords(sent: string){
    const words = sent.toLowerCase().split(" ")

    return words.filter(w=>w!=="" && w!=="-")
        .map(w=>w
            .replace("!", "")
            .replace(".",""
                .replace(",", "")))
}

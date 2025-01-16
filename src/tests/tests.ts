const str_str: string = "Hello this bear day"

function splitString(a: string): string[] {
    return a.split(" ")
}

const arrString: string[] = splitString(str_str)

console.log(arrString)
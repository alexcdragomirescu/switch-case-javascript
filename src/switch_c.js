var input = process.argv[2];

let r = [];
for (let i = 0; i < input.length; i++) {
    let c = input[i]
    if (c == c.toUpperCase()) {
        r.push(c.toLowerCase())
    }
    if (c == c.toLowerCase()) {
        r.push(c.toUpperCase())
    }
}

console.log(r.join(""));
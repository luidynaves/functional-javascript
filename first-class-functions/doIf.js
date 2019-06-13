function doIf(condition, func) {
    if (condition) {
        func()
    }
}

const x = 1

doIf(x === 1, () => {
    console.log("x is equal to 1")
})

doIf(x === "Bananas", () => {
    console.log("x is equal to 'Bananas'")
})

doIf(x < 10 && x > 0, () => {
    console.log("x is between 0 and 10")
})
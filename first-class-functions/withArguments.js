function callWith2Arguments(arg1, arg2, func) {
    return func(arg1, arg2)
}

callWith2Arguments(1, 2, add)
callWith2Arguments(9, 4, subtract)

callWith2Arguments(2, 4 (x, y) => {
    return x * x + y * y
})

function add (x, y) {
    return x + y
}

function subtract(x, y) {
    return x - y
}
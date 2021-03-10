module.exports = function check(str, bracketsConfig) {
    if (str === undefined || bracketsConfig === undefined) return false

    str = str.split('')

    for (let i = 0; i < bracketsConfig.length; i++) {
        let left = bracketsConfig[i][0]
        let right = bracketsConfig[i][1]

        for (let j = 0; j < str.length; j++) {
            if (str[j] === left && str[j + 1] === right) {
                str.splice(j, 2)
                i = j = -1
            }
        }
    }
    return !(str.length)
}



import { evaluate, randomInt } from "mathjs"

export default function RandomizedOperation() {
    const argumentsNumbers = [...arguments]

    if (argumentsNumbers.length >= 2) {
        const operators = []
        const notAllowedOperators = new Set()
        let i = 0

        while (i < argumentsNumbers.length) {
            const random = randomInt(0, 4)
            let valid = false

            if (notAllowedOperators.size === 4) {
                return false
            }

            switch (random) {
                case 0:
                    valid = validation('+', 'btnAdd', operators)
                    break
                case 1:
                    valid = validation('-', 'btnSub', operators)
                    break
                case 2:
                    valid = validation('*', 'btnMulti', operators)
                    break
                case 3:
                    valid = validation('/', 'btnDiv', operators)
                    break
            }

            valid === true ? i++ : notAllowedOperators.add(random)
        }

        let fullOperation = ''

        for (let i = 0; i < argumentsNumbers.length; i++) {
            fullOperation += argumentsNumbers[i]
            if (i < argumentsNumbers.length - 1) fullOperation += ` ${operators[i]} `
        }

        const operationResult = evaluate(fullOperation)

        const getValues = {
            'getResult': () => { return operationResult },
            'getOperators': () => { return operators },
            'getNumbers': () => { return argumentsNumbers },
            'getFullOperation': () => { return fullOperation }
        }

        return getValues
    } else {
        console.error('ERROR: THE OPERATION ONLY HAS ONE NUMBER')
    }
}

function validation(operator, itemId, operatorArray) {
    const item = localStorage.getItem(itemId)

    if (item === 'true') {
        operatorArray.push(operator)
        return true
    } else {
        return false
    }
}
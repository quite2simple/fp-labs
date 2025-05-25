type Operation = '+' | '-' | '*' | '/' | 'sqr' | 'sqrt' | 'log'
type CalculatorState = {
  current: string | null
  previous: string | null
  operation: Operation | null
  complete: boolean
}

export function setupCalculator(element: HTMLElement) {
  let state: CalculatorState = {
    current: null,
    previous: null,
    operation: null,
    complete: false
  }

  const clearState = (): CalculatorState => ({
    current: null,
    previous: null,
    operation: null,
    complete: false
  })

  const appendNumber = (number: string, currentState: CalculatorState): CalculatorState => {
    // if a calculation is complete, clear the state and start a new one
    if (currentState.complete) {
      return {...clearState(), current: number}
    }
    // if a new number isn't typed yet
    if (currentState.current === null || currentState.current === '0') {
      return { ...currentState, current: number }
    }
    // if a new number is already typed, we just add new digits
    return { ...currentState, current: currentState.current + number }
  }

  const chooseOperation = (operation: Operation, currentState: CalculatorState): CalculatorState => {
    // if an operator is one of these, we don't need a second number and calculate immediately
    if (operation === 'sqr' || operation === 'sqrt' || operation === 'log') {
      return performCalculation({ ...currentState, previous: currentState.current ?? '0', operation })
    }
    // if an operation is already chosen, we just update it
    if (currentState.operation) {
      return { ...currentState, operation }
    }
    // if no operation is chosen, we set it and save the current number as previous
    return { current: null, operation, previous: currentState.current, complete: false }
  }

  const performCalculation = (currentState: CalculatorState): CalculatorState => {
    if (currentState.previous === null || currentState.operation === null || currentState.current === null) {
      return currentState
    }

    const prev = parseFloat(currentState.previous)
    const current = parseFloat(currentState.current)
    let result = 0

    switch (currentState.operation) {
      case '+':
        result = prev + current
        break
      case '-':
        result = prev - current
        break
      case '*':
        result = prev * current
        break
      case '/':
        result = prev / current
        break
      case 'sqr':
        result = Math.pow(prev, 2)
        break
      case 'sqrt':
        result = Math.sqrt(prev)
        break
      case 'log':
        result = Math.log(prev)
        break
    }

    return {
      current: (Math.round(result * 1000) / 1000).toString(),
      previous: null,
      operation: null,
      complete: true
    }
  }

  // Event handlers
  const handleClick = (value: string) => {
    if (value === 'C') {
      state = clearState()
    } else if (value === '=') {
      state = performCalculation(state)
    } else if (['+', '-', '*', '/', 'sqr', 'sqrt', 'log'].includes(value)) {
      state = chooseOperation(value as Operation, state)
    } else {
      state = appendNumber(value, state)
    }
    updateDisplay()
  }

  const updateDisplay = () => {
    const operation = (state.previous ?? '') + ' ' + (state.operation ?? '') + ' ' + (state.current ?? '0')
    if (!state.complete) {
      element.textContent = operation
    } else {
      element.textContent = state.current ?? '0'
    }
    console.dir(state)
  }

  // Initialize display
  updateDisplay()

  return {
    handleClick
  }
}
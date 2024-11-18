# Basics

## Use State

Use state is a React method, which requires import.

const [fruit, setFruit] = useState('banana');

- 2 variables are created: fruit and setFruit
- 1st variable (fruit) is set to first value by useState and 2nd (setFruit) is second.

When we declare a state variable with useState, it returns pair - an array with two items.
First is the current value and second is a function that lets us update it.

# Week 2

Task: What is a component:

- Component is a reusable item with a functionality.

Answer (teacher):
Component is something which creates HTML elements.

To create component there are 2 ways:

- functions
- class component

Task: What are props:

- Props are parameters accepted to a component.
  (Teacher's answer) ... to pass from parent to child element

## Exports

- Default: 1 comp / function per file
- Named Export: Multiple exports
- Mixing Exports

## Props

- data passed from parent to child component
- read only

## State

- someting React watches all the time
- React will re-render upon data change
- not read only

### Class component

```
// Importing Component React package
import React, { Component } from 'react';

// Counter is only one I can change
class Counter extends Component {
    // Initialize state as a class property
    state = {
        count: 0
    };

    render() {
        return (
            <div>
                <p>Name: {this.state.name}</p>
                <p>Count: {this.state.count}</p>
            </div>
        );
    }
}

// Curly brackets are not needede, because of default
export default Component;

```

### Hooks ?

- Have restrictions (doesn't work in conditionals, loops...)

### useSate Syntax

const [var, method] = useState();

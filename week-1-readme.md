# Notes Week 1

### Class Component

```javascript
class Welcome extends React.Component {
    Render() {
    Return <h1>Hello.{this.props.name}</h1>;
    }
}
```

### Props

```javascript
const Welcome = (props) {
    return
    <h1>Hello, {this.props.name}</h1>;
}
```

# Notes from Mac Notes (transfered)

### To create React app you need:

Step 0: Just checking
node -v
npm -v

Step 1: Installing
npm create vite@latest
Version mention (@latest) is important if latest version is important.

Step 2: Select framework + variant
Select a framework: › React
Select a variant: › JavaScript

Step 3: Finalising
cd vite-project-2
npm install
npm run dev

Result:
VITE v5.4.10 ready in 353 ms
➜ Local: http://localhost:5173/
➜ Network: use --host to expose
➜ press h + enter to show help

Files created:

Folders:

- node modules
- public
- src - App.css - App.jsx (Content) - Index.css (Styling) - Main.jsx (Starting point for everything in creating an app)
  Files:

Terminology:

- JSX (Syntax extension to JS)
- SPA (Single Page Application)

Function (stateless) component

Remember Capital letter!
Remember (props)!

function Welcome (props) {
return <h1>Hello</h1>
}

const Welcome = (props) {
return <h1>Hello</h1>
}

Class Component

class Welcome extends React.Component {
Render() {
Return <h1>Hello.{this.props.name}</h1>;
}
}

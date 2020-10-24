# Curso Práctico de React - Platzi

## Virtual DOM

Virtual DOM is a faithful copy of DOM.

## Boilerplate

Installs a boilerplate project.

    npx create-react-app

Starts server project

    npm run start

## Structure

**node_modules**: Contains libraries and modules of node, it must
be ignored in git.

**public**: Files public to be sent to production server.

**src**: Contains all application.

- _index.js_: project enter point.

```
import React from 'react'
import ReactDOM from 'react-dom'
import SomeComponent from './path/to/SomeComponent'
ReactDOM.render(
    <SomeComponent />,
    document.getElementById('root')
)
```

- _Components_

**package.json**: Contains configuration project.

## Components

All components starts with uppercase.

### Stateful

This component is known as a class structure and
allow life cycle and state. This is the most
robust component of React.

    import React, {Component} from 'react'

    class Stateful extends Component {
        constructor(props) {
            super(props):
            this.state = {
                hello: 'Hello, World!!!'
            }
        }

        // render allows return HTML
        render() {
            return (
                <h1>{ this.state.hello }</h1>
            )
        }
    }

    export default Stateful

**State** in React is an object, in it is possible to declare variables.

### Stateless

This component does not depend on a life cycle or state,
only has the logic and allows us take focus a particularity
of the project.

    import React from 'react'

    const Stateless = () => {
        return (
            <h1>Hello, World!</h1>
        )
    }

    export default Stateless

### Presentational

This components does not have logic or state,
they are static.

    import React from 'react'

    const Presentational = () => <h1>Hello, World!</h1>

## JSX

JSX is a sintaxis that allows use in the same file
JavaScript and HTML. Files with this sintaxis must
end with extension **.jsx**.

    example.jsx

    import React from 'react'

    const HelloWorld = () => {
        const Hello = "Hello World!"
        const isTrue = false

        return (
            <div className="HelloWorld">
                <h1>{ Hello }</h1>
                <h2>Essential React Course</h2>
                <img src="url.png" alt="React" />
                { isTrue ? <h4>This is true</h4> : <h5>This is false</h5> }
                { isTrue && <h4>I am true</h4> }
            </div>
        )
    }

**Note**: React needs that all HTML tags are closed.

## Props

Props are like a parameters in the functions. Allows pass values
to the class and functions components. "Props" are read only,
to modify his value is needed to instance it in another variable.

    // Button.jsx
    // ----------------------------------

    import React from 'react'

    const Button = props => {
        const { text, number } = props
        return (
            <div>
               <button type="button">
                    { props.text }
               </button>
               <button type="button">
                    { text }
               </button>
               <button type="button">
                    { number }
               </button>
            </div>
        )
    }

    export default Button


    // index.js
    // ----------------------------------

    import React from 'react'
    import ReactDOM from 'react-dom'
    import Button from './components/Button'

    ReactDOM.render(
        <Button text="Click" number=3 />,
        document.getElementById('root')
    )

## Events

Events can manipulate actions on HTML, to call them it is used camelcase.

    import React from 'react'

    class Button extends React.Component {
        state = {
            count: 0
        }
        handleClick = () => {
            this.setState({
                count: this.state.count + 1
            })
        }
        render() {
            const {count} = tis.state
            return (
                <div>
                    <h1>Apples: {count}</h1>
                    <button type="button" onClick={this.handleClick}>
                        Add
                    </button>
                </div>
            )
        }
    }

    export default Button

## Environment installation and configuration

Root directory:

`mkdir PlatziVideo && cd PlatziVideo`

Initialize Git:

`git init`

Initialize project:

`npm init -y`

### Structure

**src**: In this directory lives all code.
  
  - **containers**
    
    - App.jsx

  - **components**

    - index.js: enter point

  - **assets**

    - styles
      
      - components

      - App.scss

    - static

**public**: All elements that will be public in production.

- index.html

## Project configuration

`mkdir ProjectName && cd ProjectName`

`git init`

`npm init -y`

### Project structure

    mkdir -p src/components src/containers src/assets/styles src/assets/static public &&\ 
    touch src/index.js public/index.html

### React

`npm install react react-dom`

### Babel

`npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev`

### Webpack

`npm install webpack webpack-cli html-webpack-plugin html-loader --save-dev`

`npm install webpack-dev-server --save-dev`

### Sass

`npm install mini-css-extract-plugin css-loader node-sass sass-loader --save-dev`

### File-loader

`npm install file-loader --save-dev`

### Linter

`npm install eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y`

### Bootstrap

`npm install react-bootstrap bootstrap`


# Nesting components

To nest a component in another, the first component must have a div as a top element.

# Import image

    import logo from '../assets/static/logo.png';

    const Header = () => (
        <div className="header">
            <img src="{log}" alt="This is a logo">
        </div>
    );

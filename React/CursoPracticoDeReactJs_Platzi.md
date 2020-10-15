# Curso Práctico de React - Platzi

## Virtual DOM

Virtual DOM is a faithful copy of DOM.


## Boilerplate
    
Installs a boilerplate project.
    
    npx create-react-app

Starts server project

    npm run start

## Structure

__node_modules__: Contains libraries and modules of node, it must 
be ignored in git.

__public__: Files public to be sent to production server.

__src__: Contains all application.
 - _index.js_: project enter point.
    
    import React from 'react'
    import ReactDOM from 'react-dom'
    import SomeComponent from './path/to/SomeComponent'

    ReactDOM.render(
        <SomeComponent />,
        document.getElementById('root')
    )

 - _Components_    

__package.json__: Contains configuration project.

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
end with extension __.jsx__.

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

__Note__: React needs that all HTML tags are closed.  

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
        <Button text="Click" number="3" />,
        document.getElementById('root')
    )

import React, { Component } from 'react';
import { ThemeContext } from './IndexUseContex';

export default class ClassContextComponent extends Component {
    themeStyle(dark) {
        return {
            backgroundColour: dark
                ? '#333'
                : '#ccc',
            color: dark
                ? '#ccc'
                : '#ccc',
            padding: '2rem',
            margin: '2rem'
        }
    }

    render() {
        return (
    <>
            <ThemeContext.Consumer>
        {darkTheme => {
            return <div style={this.themeStyle(darkTheme)}>Class Theme</div>
        }}
    </ThemeContext.Consumer>
        </>
        )
    }
}
var css = require('sheetify')
var React = require('react')
var ReactDOM = require('react-dom')
require('babel-core/register')({
     presets: ['es2015', 'react']
})

var Report = require('./report.jsx')

css('./style.css', { global: true })

var el = document.createElement('div')
el.classList.add('report')
document.body.appendChild(el)

ReactDOM.render(React.createElement(Report), el)

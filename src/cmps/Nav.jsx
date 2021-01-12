import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
                <nav className="grid-container">
                    <ul className="flex space-around">
                        <li><Link to="/" exact='true' >רקע</Link></li>
                        <li><Link to="/" exact='true' >שינויים</Link></li>
                        <li><NavLink to="/" exact={true} >ביקורות</NavLink></li>
                        <li><Link to="/" exact='true' >מסקנות</Link></li>
                    </ul>
                </nav>
        )
    }
}

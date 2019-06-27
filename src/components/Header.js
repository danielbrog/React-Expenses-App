import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/ExpenseApp" activeClassName="is-active" exact={true}>Expenses</NavLink>
        <NavLink to="/ExpenseApp/create" activeClassName="is-active">Create</NavLink>
    </header>
)

export default Header
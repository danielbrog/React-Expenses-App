import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => (
    <header>
        <p className="header__title">Expensify App</p>
        <div className="header__navigation">
            <NavLink to="/ExpenseApp" className="header__navigation__item" activeClassName="is-active" exact={true}>Expenses</NavLink>
            <NavLink to="/ExpenseApp/create" className="header__navigation__item" activeClassName="is-active">Create</NavLink>
        </div>
        </header>
)

export default Header
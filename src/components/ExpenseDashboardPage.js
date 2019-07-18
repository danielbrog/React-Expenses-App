import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpensesSummary from './ExpensesSummary'

const ExpenseDashboardPage = () => (
    <div className="ExpenseDashboardPage"> 
        <div className="ExpenseDashboardPage__title">List of Expenses</div>
        <ExpenseListFilters/>
        <ExpensesSummary />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage
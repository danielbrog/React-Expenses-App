import React from 'react'
import {connect} from 'react-redux'
import selectExpenses from '../selectors/expenses'
import expensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'

export const ExpensesSummary = (props) => {
    const expenseWord = props.expenses.length < 2 ? 'expense':'expenses'
    return (
    <div>
        {props.expenses.length !== 0 && 
            (<p className="expensesSummary">Viewing {props.expenses.length} {expenseWord} totalling {numeral(expensesTotal(props.expenses) / 100).format('$0,0.00')}</p>)
        }
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)
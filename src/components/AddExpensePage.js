import React from 'react'
import ExpenseForm from './ExpenseForm'
import {connect} from 'react-redux'
import {addExpense} from '../actions/expenses'

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.onSubmit(expense)
        this.props.history.push('/ExpenseApp')
    }
    render() {
        return (
            <div>
                <div className="addExpensePage__title">Add Expense</div>
                <ExpenseForm
                    onSubmit ={this.onSubmit}
                />
            </div>
        )

    }
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (expense) => dispatch(addExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)
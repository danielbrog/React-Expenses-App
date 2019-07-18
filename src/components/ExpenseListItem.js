import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem = ({id,description, amount, createdAt, note}) => (
    <div className="expenseItem" id={id}>
    <div className="expenseItem__info">
        <h3 className="expenseItem__info__desc">Description:  {description}</h3>
        <p className="expenseItem__info__amount">Amount: {numeral(amount / 100).format('$0,0.00')}</p>
        <p className="expenseItem__info__date">Created at: {moment(createdAt).format('MMMM Do, YYYY')}</p>
        <p className="expenseItem__info__note">Note: {note}</p>
    </div>
        <Link to={`/ExpenseApp/edit/${id}`} className="expenseItem__edit">Edit</Link>
    </div>
)

export default ExpenseListItem
import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem = ({id,description, amount, createdAt}) => (
    <div>
        
        <h3>description:{description}</h3>
        <p>amount: {numeral(amount / 100).format('$0,0.00')}</p>
        <p>created at: {moment(createdAt).format('MMMM Do, YYYY')}</p>
        <Link to={`/ExpenseApp/edit/${id}`}>Edit</Link>
    </div>
)

export default ExpenseListItem
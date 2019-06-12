import React from 'react'
import moment, { isMoment } from 'moment'
import 'react-dates/initialize'
import {SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

const now = moment()

console.log(now.format('MMM Do, YYYY'))

export default class ExpenseForm extends React.Component {
    state= {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        focused: false,
        error: ''
    }
    onDescriptionChange = (e) => {

        const description = e.target.value
        this.setState(() => ({ description }))
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value
        //makesureamount is currency before setting state
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }
    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({createdAt}))
        }
    }
    onFocusChange = ({focused}) => {
        this.setState(() => ({focused: focused}))
    }

    onSubmit = (e) => {
        e.preventDefault()

        if(!this.state.description || !this.state.amount){
            this.setState(() => ({error: 'Please ensure you have a desciription and amount'}))
        } else {
            this.setState(() => ({error: ''}))
            this.props.onSubmit({
                description: this.state.description,
                amount:parseFloat(this.state.amount),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render () {
        return (
            <div>
                ExpenseForm
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                    type="text"
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    />
                    <input 
                    type="text"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                    onDateChange={this.onDateChange}
                    onFocusChange={this.onFocusChange}
                    focused={this.state.focused}
                    date={this.state.createdAt}
                    numberOfMonths = {1}
                    isOutsideRange={() => false}
                    />
                    <textarea
                    placeholder="Add a note for your expense (optional)"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}
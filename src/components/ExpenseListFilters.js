import React from 'react'
import {connect} from 'react-redux'
import {setTextFilter, sortByDate, sortByAmount, setStartDate,setEndDate} from '../actions/filters'

import 'react-dates/initialize'
import {DateRangePicker } from 'react-dates'

export class ExpenseListFilters extends React.Component {
    state={
        focused: null
    }

    onDatesChange = ({startDate,endDate}) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }

    onFocusChange = (focused) => {
        this.setState(() => ({focused}))
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }

    onSortChange = (e) => {
        if (e.target.value == 'date'){
            this.props.sortByDate()
        }else{
            this.props.sortByAmount()
        }
    }

    render() {
        return (
            <div>
                <input 
                type="text" 
                value={this.props.filters.text} 
                onChange={this.onTextChange}/>
                <select
                value={this.props.filters.sortBy}
                onChange={this.onSortChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                startDate={this.props.filters.startDate}
                startDateId="your_unique_start_date_id" 
                endDate = {this.props.filters.endDate}
                endDateId="your_unique_end_date_id" 
                onDatesChange = {this.onDatesChange}
                focusedInput = {this.state.focused}
                onFocusChange = {this.onFocusChange}
                showClearDates={true}
                numberOfMonths ={1}
                isOutsideRange={() => false}
                />
            </div>
        )
    }
}



const mapStateToProps = (state) => ({filters: state.filters})

const mapDispatchToProps = (dispatch) => ({
    setTextFilter : (text) => dispatch(setTextFilter(text)),
    sortByDate : () => dispatch(sortByDate()),
    sortByAmount : () => dispatch(sortByAmount()),
    setStartDate : (startDate) => dispatch(setStartDate(startDate)),
    setEndDate : (endDate) => dispatch(setEndDate(endDate))
})


export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters)
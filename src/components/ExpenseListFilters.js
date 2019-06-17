import React from 'react'
import {connect} from 'react-redux'
import {setTextFilter, sortByDate, sortByAmount, setStartDate,setEndDate} from '../actions/filters'

import 'react-dates/initialize'
import {DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

class ExpenseListFilters extends React.Component {
    state={
        focused: null
    }

    onDatesChange = ({startDate,endDate}) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }

    onFocusChange = (focused) => {
        this.setState(() => ({ focused}))
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e) => {
                    props.dispatch(setTextFilter(e.target.value))
                }}/>
                <select
                value={this.props.filters.sortBy}
                onChange={(e) => {
                    if (e.target.value == 'date'){
                        this.props.dispatch(sortByDate())
                    }else{
                        this.props.dispatch(sortByAmount())
                    }
                }}>
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



const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}


export default connect(mapStateToProps)(ExpenseListFilters)
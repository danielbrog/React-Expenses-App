import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseListFilters} from '../../components/ExpenseListFilters'
import {filters, altFilters} from '../fixtures/filters'
import moment from 'moment'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()

    wrapper = shallow(
        <ExpenseListFilters
        filters = {filters}
        setTextFilter = {setTextFilter}
        sortByDate = {sortByDate}
        sortByAmount = {sortByAmount}
        setStartDate={setStartDate}
        setEndDate = {setEndDate}
        />
    )
})

test('Should render ExpenseListFilters', () => {
    expect(wrapper).toMatchSnapshot()
})

test('Should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

//should handle text change
test('should handle text change', () => {
    wrapper.find('div').children().at(0).simulate('change',{
        target: {
            value: altFilters.text
        }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(altFilters.text)
})

//should sort by date
test('should sort by date', () => {
    wrapper.find('div').children().at(1).simulate('change', {
        target: {
            value: 'date'
        }
    })
    expect(sortByDate).toHaveBeenCalled()
})

//should sort by amount
test('should sort by amount', () => {
    wrapper.find('div').children().at(1).simulate('change', {
        target: {
            value: 'amount'
        }
    })
    expect(sortByAmount).toHaveBeenCalled()
})

//should handle date changes
test('should handle date changes', () => {
    const startDate= moment(0).add(4,'years')
    const endDate= moment(0).add(5,'years')
    wrapper.find('div').children().at(2).prop('onDatesChange')({startDate,endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

//should handle date focus changes
test('should handle date focus changes', () => {
    wrapper.find('div').children().at(2).prop('onFocusChange')('startDate')
    expect(wrapper.state('focused')).toBe('startDate')
})
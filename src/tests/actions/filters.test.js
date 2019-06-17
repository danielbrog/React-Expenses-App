import {setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter} from '../../actions/filters'
import moment from 'moment'

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toMatchObject({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('Should generate set end date action object',() => {
    const action = setEndDate(moment(0))
    expect(action).toMatchObject({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('Should generate sort by date action object',() => {
    const action = sortByDate()
    expect(action).toMatchObject({
        type: 'CHANGE_SORTBY',
        sortBy: 'date'
    })
})

test('Should genereate sort by amount action object',() =>{
    const action = sortByAmount()
    expect(action).toMatchObject({
        type: 'CHANGE_SORTBY',
        sortBy: 'amount'
    })
})

test('Should generate set text action object by default', () => {
    const action = setTextFilter()
    expect(action).toMatchObject({
        type: 'SET_TEXT',
        text: ''
    })
})

test('Should generate set text action object with text input', () =>{
    const action = setTextFilter('hello')
    expect(action).toMatchObject({
        type: 'SET_TEXT',
        text: 'hello'
    })
})
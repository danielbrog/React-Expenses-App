import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('Should setup default filter values',() => {
    const state = filtersReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortby to amount', () => {
    const action = {
        type: 'CHANGE_SORTBY',
        sortBy: 'amount'
    }
    const state= filtersReducer(undefined,action)
    expect(state.sortBy).toBe('amount')
})

test ('should set sortby to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date'
    }
    const action = {
        type: 'CHANGE_SORTBY',
        sortBy: 'date'
    }
    const state=filtersReducer(currentState,action)
    expect(state.sortBy).toBe('date')
})

test('set text filter', () => {
    const testText = 'sorting'
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date'
    }
    const action = {
        type: 'SET_TEXT',
        text: testText
    }
    const state = filtersReducer(currentState,action)
    expect(state.text).toBe(testText)
})

test('set startDate filter', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date'
    }
    const testDate = moment(0).add(4,'days')
    const action = {
        type: 'SET_START_DATE',
        startDate: testDate
    }
    const state = filtersReducer(currentState,action)
    expect(state.startDate).toBe(testDate)
})

test('set end date filter', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date'
    }
    const testDate = moment(0).add(4,'days')
    const action = {
        type: 'SET_END_DATE',
        endDate: testDate
    }
    const state= filtersReducer(currentState,action)
    expect(state.endDate).toBe(testDate)
})
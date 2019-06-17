import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('Should set default state',() => {
    const state =  expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([expenses[0],expenses[2]])
})

test('should NOT remove expense by unfound ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '234234'
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
})

test('should add expense' ,() => {
    const testExpense = {
        id: 12,
        description:'test',
        note:'tses',
        amount: 111111,
        createdAt: 111111
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense: testExpense
    }
    const state= expensesReducer(expenses,action)
    expect(state).toEqual(expenses.concat(testExpense))
})

test('should edit expense with ID',() => {
    const action ={
        type:'EDIT_EXPENSE',
        id:expenses[0].id,
        updates:{
            description: 'updated'
        }
    }
    const state = expensesReducer(expenses,action)
    expect(state[0].description).toEqual('updated')
})

test('should NOT edit expense with WRONG ID',() => {
    const action ={
        type:'EDIT_EXPENSE',
        id: '-11',
        updates:{
            description: 'updated'
        }
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
})
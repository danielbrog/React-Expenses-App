import {addExpense, editExpense, removeExpense} from '../../actions/expenses'

test('Should set up remove expense action object', () => {
    const action = removeExpense({id: '123abc'})
    expect(action).toMatchObject({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('Should set up edit expense action object', () => {
    const action = editExpense('123abc',{description:'123abc'})
    expect(action).toMatchObject({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: '123abc'
        }
    })
})

test('Should set up addexpense action object with provided values',() =>{
    const expenseData ={
        description: 'testDesc',
        note:'testNote',
        amount: 3,
        createdAt: 3
    }
    const action = addExpense(expenseData)
    expect(action).toMatchObject({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})


test('Should set up addexpense action object with default values',() =>{
    const action = addExpense()
    expect(action).toMatchObject({
        type:'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})
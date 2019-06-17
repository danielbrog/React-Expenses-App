import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'

import {addExpense} from './actions/expenses'
import expenseSelector from './selectors/expenses'
import {setTextFilter} from './actions/filters'

const store = configureStore()



store.dispatch(addExpense({
    description: 'waterbill',
    note: 'paid water bill',
    amount:1300,
    createdAt:1000
}))
store.dispatch(addExpense({
    description: 'Gas Bill',
    note: 'paid gas bill',
    amount:700,
    createdAt:10000000
}))
store.dispatch(addExpense({
    description: 'Rent',
    note: 'paid rent',
    amount:8800,
    createdAt:10000
}))

//console.log(expenseSelector(store.getState().expenses,store.getState().filters))

//console.log(store.getState())
//renders root class



const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'))
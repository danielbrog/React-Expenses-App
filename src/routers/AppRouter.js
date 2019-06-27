import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import Header from '../components/Header'

const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
        <Route exact={true} path="/ExpenseApp" component={ExpenseDashboardPage}/>
        <Route path="/ExpenseApp/create" component={AddExpensePage}/>
        <Route path="/ExpenseApp/edit/:id" component={EditExpensePage}/>
    </Switch>
    </div>
</BrowserRouter>
)

export default AppRouter
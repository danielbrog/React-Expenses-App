// get total expense stuff given either an array of expenses, or an expense object

export default (expenses) => {
    return expenses.map((expense) => {
        return expense.amount
    }).reduce((total,currentVal)=> {
        return total + currentVal
    },0)
}
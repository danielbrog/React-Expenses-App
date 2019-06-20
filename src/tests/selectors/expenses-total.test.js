import expensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('Should return 0 if no expenses', () => {
    const result = expensesTotal([])
    expect(result).toBe(0)
})

test('should add amount for 1 expense', () => {
    const result = expensesTotal([expenses[1]])
    expect(result).toBe(109500)
})

test('should add amount for all expenses', () => {
    const result = expensesTotal(expenses)
    expect(result).toBe(112195)
})
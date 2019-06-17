import React from 'react'
import {shallow} from 'enzyme'
import moment from 'moment'

import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

test('Should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

test('render expenseform with expense data', () => {
    const wrapper = shallow (<ExpenseForm  expense = {expenses[1]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid form submission', () => {
    const wrapper = shallow (<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test('Should set description on input change',() => {
    const value= 'NewDescription'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('description')).toBe(value)
})

test('Should set note on textarea change', () => {
    const value = 'newnote'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').simulate('change', {
        target: {value}
    })
    expect(wrapper.state('note')).toBe(value)
})

test('Should set amount to something valid', () => {
    const value= '23.50'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('amount')).toBe(value)
})

test('Should NOT set amount to something invalid', () => {
    const value= '12.122'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('amount')).toBe("")
})

test('should call onsubmit prop for valid form submission' , () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense = {expenses[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    })
})

test('should set new date on date change', () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('form').children().at(2).prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})

test('should change focus element on change', () => {
    const wrapper = shallow(<ExpenseForm />)
    const prev = wrapper.find('form').children().at(2).prop('focused')
    wrapper.find('form').children().at(2).prop('onFocusChange')({focused: !prev})
    expect(wrapper.state('focused')).toBe(!prev)
})
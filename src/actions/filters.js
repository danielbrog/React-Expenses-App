

export const setTextFilter = (text='') => ({
    type: 'SET_TEXT',
    text
})

export const sortByAmount = () => ({
    type: 'CHANGE_SORTBY',
    sortBy: 'amount'
})

export const sortByDate = () => ({
    type: 'CHANGE_SORTBY',
    sortBy: 'date'
})

export const setStartDate = (startDate)=> ({
    type: 'SET_START_DATE',
    startDate
})

export const setEndDate = (endDate)=> ({
    type: 'SET_START_DATE',
    endDate
})
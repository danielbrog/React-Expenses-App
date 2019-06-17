import moment from 'moment'

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

export default (state=filtersReducerDefaultState,action) => {

    switch(action.type){
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            }
        case 'CHANGE_SORTBY':
            return{
                ...state,
                sortBy: action.sortBy
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return{
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}
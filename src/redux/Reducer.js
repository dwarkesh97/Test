import React from 'react'
import USER_STORE from './Action'

const initialState = {
    // users: ""
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
       
        case "USER_STORE": {
           
            return { ...state, ...action.payload }
        }
            
    }
    return state;
}

export default Reducer

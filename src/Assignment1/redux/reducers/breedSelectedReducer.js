import {BREED_SELECTED} from '../constants'

export const breedSelectedData = (data = [0], action) => {
    if(action.type === BREED_SELECTED) {
        return [action.payload]
    }
    else {
        return data
    }
}
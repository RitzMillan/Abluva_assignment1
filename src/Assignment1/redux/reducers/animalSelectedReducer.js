import {ANIMAL_SELECTED} from '../constants'

export const animalSelectedData = (data = [0], action) => {
    if(action.type === ANIMAL_SELECTED) {
        return [action.payload]
    }
    else {
        return data
    }
}
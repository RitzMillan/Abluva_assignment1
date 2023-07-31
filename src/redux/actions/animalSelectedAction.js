import {ANIMAL_SELECTED} from '../constants'

export const animalSelected = (data) => {
    return {
        type: ANIMAL_SELECTED,
        payload: data
    }
}
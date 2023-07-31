import {BREED_SELECTED} from '../constants'

export const breedSelected = (data) => {
    return {
        type: BREED_SELECTED,
        payload: data
    }
}
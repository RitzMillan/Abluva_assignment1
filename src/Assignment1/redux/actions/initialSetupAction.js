import {INITIAL} from '../constants'

export const initialSetup = (data) => {
    return {
        type: INITIAL,
        payload: data
    }
}
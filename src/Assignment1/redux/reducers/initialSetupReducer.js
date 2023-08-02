import {INITIAL} from '../constants'
import { dummydata } from '../../dummydata'

export const initialData = (data = [...dummydata], action) => {
    if (action.type === INITIAL) {
        return [...data, ...action.payload]
    }
    else {
        return data
    }
}
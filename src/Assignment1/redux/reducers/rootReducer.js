import {combineReducers} from '@reduxjs/toolkit'
import {initialData} from './initialSetupReducer'
import {breedSelectedData} from './breedSelectedReducer'
import {animalSelectedData} from './animalSelectedReducer'

export default combineReducers({
    initialData,
    breedSelectedData,
    animalSelectedData
})
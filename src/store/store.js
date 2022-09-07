import { combineReducers } from "redux";

import { View } from "../reducer/reducer";

//combining for reducer together
export const combine = combineReducers({
    View : View,
})
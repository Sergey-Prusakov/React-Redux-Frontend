import {all} from "redux-saga/effects"
import { postWatcher } from "./postsSaga"

export function* rootWatcher() {
    yield all([postWatcher()])
}
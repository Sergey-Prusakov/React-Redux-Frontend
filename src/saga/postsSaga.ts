import { put, takeEvery } from "redux-saga/effects";
import { setPostsCreator, SET_POSTS } from "../store/postReducer";

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

function* setPostsWorker() {
    yield delay(1000)
    yield put(setPostsCreator)
}

export function* postWatcher() {
    yield takeEvery(SET_POSTS, setPostsWorker)
}

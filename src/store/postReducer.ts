interface IPost {
    title: string
}

interface IState {
    posts: Array<IPost>
}

export const SET_POSTS = "SET_POSTS";

type IAction = | {type: 'SET_POSTS', posts: Array<IPost>}

const defaultState: IState = {
    posts: [{
        title: 'qwerty'
    }]
}

export default function postReducer(state = defaultState, action: IAction): IState {
    switch (action.type) {
        case SET_POSTS:
            console.log(action);
            return { ...state, posts: action.posts }

        default:
            return state;
    }
}

export const setPostsCreator = () => ({ type: SET_POSTS })
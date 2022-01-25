import { db } from "../firebase/firebaseApp"
import { getData } from "../firebase/firestore"

export const initState = {
    routes: [

    ],
    articles: [

    ],
}

const stateReducer = (state, action) => {
    // console.log(action, state)
    // console.log(action)
    switch(action.type) {

        case "GET":
            console.log(action)
            return (
                {
                    ...state,
                    [action.name]: action.load
                }
            )
            break;
        default: 
            console.log("No Form State Change")
            return state;
    }
    
}

export default stateReducer
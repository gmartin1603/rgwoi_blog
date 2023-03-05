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

        case "SET-ROUTES":
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
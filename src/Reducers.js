const initialState = 0;
function countReducer(state = initialState,Action)
{
    const {type,payload} = Action;

    switch(type)
    {
        case "INCREMENT":
            return state+1;
        case "DECREMENT":
            return state-1;
        default:
            return state;
    }
}
export default countReducer;
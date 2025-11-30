import { actionTypes } from "./actionTypes";

export const reducer = (state,action) => {
    switch(action.type){
        case actionTypes.NEW_MOVE : {
            let {turn,position} =  state

            turn = turn === "w" ? "b" : "w";

            position = [
                ...position,
                action.payload.newPosition
            ]

            return {
                ...state,
                turn,
                position
            }
        }

        case actionTypes.GET_CANDIDATE_MOVES : {
            
            return {
                ...state,
                candidateMoves:action.payload.pieceMoves
            }
        }
        
        case actionTypes.RESET_CANDIDATE_MOVES : {
            return {
                ...state,
                candidateMoves: []
            }
        }

        default:
            return state;
    }
}
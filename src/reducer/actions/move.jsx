import { actionTypes } from "../actionTypes"

export const makeNewMove = ({newPosition}) => {
    return { 
        type : actionTypes.NEW_MOVE,
        payload : {newPosition}
    }
}
export const getCandidateMoves = ({pieceMoves}) => {
    return { 
        type : actionTypes.GET_CANDIDATE_MOVES,
        payload : {pieceMoves}
    }
}

export const resetCandidateMoves = () => {
    return { 
        type : actionTypes.RESET_CANDIDATE_MOVES,
    }
}
import {getBishopMoves, getKnightmoves, getRookMoves} from "./getMoves"

const aribiter = {
    getRegularMoves : function({position,rank,file,piece}){
        if(piece.endsWith("r"))
            return getRookMoves({position,rank,file,piece})
        if(piece.endsWith("b"))
            return getBishopMoves({position,rank,file,piece})
        if(piece.endsWith("n"))
            return getKnightmoves({position,rank,file})
    }
}

export default aribiter
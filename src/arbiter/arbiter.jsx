import {getBishopMoves, getKingMoves, getKnightmoves, getQueenMoves, getRookMoves} from "./getMoves"

const aribiter = {
    getRegularMoves : function({position,rank,file,piece}){
        if(piece.endsWith("k"))
            return getKingMoves({position,rank,file,piece})
        if(piece.endsWith("r"))
            return getRookMoves({position,rank,file,piece})
        if(piece.endsWith("b"))
            return getBishopMoves({position,rank,file,piece})
        if(piece.endsWith("n"))
            return getKnightmoves({position,rank,file})
        if(piece.endsWith("q"))
            return getQueenMoves({position,rank,file,piece})
    }
}

export default aribiter
import getRookMoves from "./getMoves"

const aribiter = {
    getRegularMoves : function({position,rank,file,piece}){
        return getRookMoves({position,rank,file,piece})
    }
}

export default aribiter
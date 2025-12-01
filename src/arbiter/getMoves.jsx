export const getRookMoves = ({position,rank,file,piece}) => {
        const moves = [];
        const us = piece[0];
        const enemy = us === "w" ? "b" : "w";

        const dirs = [
            [-1,0],
            [1,0],
            [0,-1],
            [0,1],
        ]
        dirs.forEach(dir=>{
            for (let i = 1; i < 8; i++) {
                const x = rank + (i*dir[0]);
                const y = file + (i*dir[1]);
                if(position?.[x]?.[y] === undefined){
                    break
                }
                if(position[x][y].startsWith(enemy)){
                    moves.push([x,y])
                    break
                }
                if(position[x][y].startsWith(us)){
                    break
                }
                moves.push([x,y])
            }
        })
    return moves;
}
export const getKnightmoves = ({position,rank,file}) => {
    let moves = [];
    const enemy = position[rank][file].startsWith("w") ? "b" : "w";

    const possibleMoves = [
        [-1,2],
        [1,2],
        [2,1],
        [2,-1],
        [-1,-2],
        [1,-2],
        [-2,1],
        [-2,-1]
    ]
    possibleMoves.forEach(c => {
        const cell = position?.[rank+c[0]]?.[file+c[1]]
        if(cell !== undefined &&(cell.startsWith(enemy)||cell === ""))
            moves.push([rank+c[0],file+c[1]])
    })
    return moves;
}
export const getBishopMoves = ({position,rank,file,piece}) => {
        const moves = [];
        const us = piece[0];
        const enemy = us === "w" ? "b" : "w";

        const dirs = [
            [1,1],
            [1,-1],
            [-1,-1],
            [-1,1],
        ]
        dirs.forEach(dir=>{
            for (let i = 1; i < 8; i++) {
                const x = rank + (i*dir[0]);
                const y = file + (i*dir[1]);
                if(position?.[x]?.[y] === undefined){
                    break
                }
                if(position[x][y].startsWith(enemy)){
                    moves.push([x,y])
                    break
                }
                if(position[x][y].startsWith(us)){
                    break
                }
                moves.push([x,y])
            }
        })
    console.log(moves);
    return moves;
}
export const getQueenMoves = ({position,rank,file,piece}) => {
        const moves = [];
        const us = piece[0];
        const enemy = us === "w" ? "b" : "w";

        const dirs = [
            [1,1],
            [1,-1],
            [-1,-1],
            [-1,1],
            [-1,0],
            [1,0],
            [0,-1],
            [0,1],
        ]
        dirs.forEach(dir=>{
            for (let i = 1; i < 8; i++) {
                const x = rank + (i*dir[0]);
                const y = file + (i*dir[1]);
                if(position?.[x]?.[y] === undefined){
                    break
                }
                if(position[x][y].startsWith(enemy)){
                    moves.push([x,y])
                    break
                }
                if(position[x][y].startsWith(us)){
                    break
                }
                moves.push([x,y])
            }
        })
    return moves;
}
export const getKingMoves = ({position,rank,file,piece}) => {
        const moves = [];
        const us = piece[0];
        const enemy = us === "w" ? "b" : "w";

        const dirs = [
            [0,1],
            [1,1],
            [1,0],
            [1,-1],
            [0,-1],
            [-1,-1],
            [-1,0],
            [-1,1]
        ]
        dirs.forEach(dir=>{
                const x = rank + (dir[0]);
                const y = file + (dir[1]);
                if(position?.[x]?.[y] !== undefined && !position[x][y].startsWith(us))
                    moves.push([x,y])
        })
    return moves;
}
export const getPawnMoves = ({position,rank,file,piece}) => {
    const moves = []
    const dir = piece === "wp" ? 1 : -1;

    if(!position?.[rank+dir][file]){
        moves.push([rank+dir,file])
    }

    if(rank % 5 === 1) {
       if(!position?.[rank+dir]?.[file] && position?.[rank+dir+dir]?.[file] === ""){
        moves.push([rank+dir+dir,file])
    } 
    }


    return moves;
}
export const getPawnCapture = ({position,rank,file,piece}) => {
    const moves = []
    const dir = piece === "wp" ? 1 : -1;
    const enemy = piece[0] === "w" ? "b" :"w"; 

    if (position?.[rank+dir]?.[file-1] && position?.[rank+dir]?.[file-1].startsWith(enemy))
        moves.push([rank+dir,file-1])

    if (position?. [rank+dir]?.[file+1] && position?.[rank+dir]?. [file+1].startsWith(enemy))
        moves.push([rank+dir,file+1])

    return moves;
}
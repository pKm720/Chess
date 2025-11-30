import aribiter from "../../arbiter/arbiter";
import { useAppContext } from "../../contexts/context";
import { getCandidateMoves } from "../../reducer/actions/move";

const Piece = ({rank,file,piece}) => {


    const {appState,dispatch} = useAppContext();
    const {turn,position} = appState;
    const currentPosition = position[position.length-1];

    // console.log(currentPosition);
    
    const oneDragStart = (e) => {
        e.dataTransfer.effectAllowed = "move"
        e.dataTransfer.setData('text/plain',`${piece},${rank},${file}`);

        setTimeout(()=>{
            e.target.style.display="none";
        },0);
        if (turn === piece[0]){ 
            const pieceMoves = aribiter.getRegularMoves({position:currentPosition,rank,file,piece});
            console.log(pieceMoves);
            dispatch(getCandidateMoves({pieceMoves}));
        }
    }

    const onDragEnd = e => {
        e.target.style.display = "block";
    }

    return(
        <>
            <div className={`piece ${piece} p-${rank}${file} absolute h-20 w-20 bg-cover cursor-grab active:cursor-grabbing`} 
            draggable={true} 
            onDragStart={oneDragStart}
            onDragEnd={onDragEnd}
            />
        </>
    );
}

export default Piece;
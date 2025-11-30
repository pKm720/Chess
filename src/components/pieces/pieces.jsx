import { useRef, useState } from "react";
import Piece from "./piece";
import "./pieces.css"
import { copyPosition} from "../../helper";
import { useAppContext } from "../../contexts/context";
import { makeNewMove, resetCandidateMoves } from "../../reducer/actions/move";
import moveAudio from "../../assets/audio/move-self.mp3"; 


const Pieces = () => {

    const moveSound = new Audio(moveAudio);
    moveSound.preload = 'auto';
    
    const ref = useRef();

    const {appState,dispatch} = useAppContext();

    const currentPosition = appState.position[appState.position.length-1];

    const calPosition = (e) => {
        const {width,top,left} = ref.current.getBoundingClientRect();
        const size = width/8;
        const y = Math.floor((e.clientX-left)/size);
        const x = 7 - Math.floor((e.clientY-top)/size);
        return {x,y};
    }

    const calDrop = (e) => {
        e.preventDefault();
        const newPosition = copyPosition(currentPosition);
        const {x,y} = calPosition(e);

        const [p,rank,file] = e.dataTransfer.getData("text").split(",");

        if ((appState.candidateMoves?.find(m => m[0]===x && m[1]===y))){

            newPosition[rank][file] = '';
            newPosition[x][y] = p;

            dispatch(makeNewMove({newPosition}));
            moveSound.currentTime = 0;
            moveSound.play().catch(error => {
                console.error('Audio playback failed:', error);
            });
        }
        dispatch(resetCandidateMoves());
    }
    return(
        <>
            <div className="pieces absolute inset-0 grid grid-cols-8 grid-rows-8 " 
                ref = {ref}
                onDrop = {calDrop}
                onDragOver={(e) => e.preventDefault()}
            >
                {currentPosition.map((r,rank)=>
                    r.map((f,file)=>
                        currentPosition [rank] [file] ? 
                        <Piece 
                            key={rank+"-"+file}
                            rank = {rank}
                            file = {file}
                            piece = {currentPosition [rank][file]}
                        />
                        : null
                    )
                )}
            </div>
        </>
    );

}

export default Pieces   
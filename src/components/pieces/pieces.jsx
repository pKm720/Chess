import { useRef, useState } from "react";
import Piece from "./piece";
import "./pieces.css"
import { copyPosition, helpPosition} from "../../helper";


const Pieces = () => {
    
    const ref = useRef();
    const [position,setState] = useState(helpPosition());

    const calPosition = (e) => {
        const {width,top,left} = ref.current.getBoundingClientRect();
        const size = width/8;
        const y = Math.floor((e.clientX-left)/size);
        const x = 7 - Math.floor((e.clientY-top)/size);
        return {x,y};
    }

    const calDrop = (e) => {
        const newPosition = copyPosition(position);
        const {x,y} = calPosition(e);

        const [p,rank,file] = e.dataTransfer.getData("text").split(",");

        newPosition[rank][file] = '';
        newPosition[x][y] = p;

        setState(newPosition);
    }
    return(
        <>
            <div className="pieces absolute inset-0 grid grid-cols-8 grid-rows-8 " 
                ref = {ref}
                onDrop = {calDrop}
                onDragOver={(e) => e.preventDefault()}
            >
                {position.map((r,rank)=>
                    r.map((f,file)=>
                        position [rank] [file] ? 
                        <Piece 
                            key={rank+"-"+file}
                            rank = {rank}
                            file = {file}
                            piece = {position [rank][file]}
                        />
                        : null
                    )
                )}
            </div>
        </>
    );

}

export default Pieces   
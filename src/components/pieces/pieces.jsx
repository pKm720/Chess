import { useState } from "react";
import Piece from "./piece";
import "./pieces.css"
import { helpPosition } from "../../helper";


const Pieces = () => {
    
    const [position,setState] = useState(helpPosition())

    const calDrop = (e) => {
        console.log(e.dataTransfer.getData("text"));
        (e) => e.preventDefault();
    }


    return(
        <>
            <div className="pieces absolute inset-0 grid grid-cols-8 grid-rows-8 " 
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
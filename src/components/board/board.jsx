import { character } from "../../helper";
import Ranks from "./bits/rank.jsx";
import Files from "./bits/files.jsx";
import Pieces from "../pieces/pieces.jsx";

const Board = () => {

    const ranks = Array(8).fill().map((x,i)=>8-i);
    const files = Array(8).fill().map((x,i)=>i+1);

    const getClassName = (i,j) => {
        return (i+j)%2 === 0 ? "bg-[#729551]" : "bg-[#ececd0]";
    }

    return(
        <div className="grid place-items-center mt-5">
            <div className="cont2 flex flex-row">
                    <Ranks ranks = {ranks} />
                    <div className="grid place-items-center board relative">
                        <div className="tiles text-slate-950 grid grid-cols-8 grid-rows-8" onDragOver={(e) => e.preventDefault()}>
                            {ranks.map((rank,i)=>
                                files.map((files,j)=>
                                    <div className = {`w-20 h-20  ${getClassName(9-i,j)}`} key={`${rank}${files}`}></div>
                                )
                            )}
                        </div>
                        <Pieces />
                    </div>
            </div>
            <Files files = {files} />
        </div>
    )
}

export default Board;
import { character } from "../../helper";
import Ranks from "./bits/rank.jsx";
import Files from "./bits/files.jsx";
import Pieces from "../pieces/pieces.jsx";
import { useAppContext } from "../../contexts/context.jsx";

const Board = () => {

    const {appState} = useAppContext();
    const position = appState.position[appState.position.length-1];
    const {turn} = appState;

    const ranks = Array(8).fill().map((x,i)=>8-i);
    const files = Array(8).fill().map((x,i)=>i+1);

    const getClassName = (i,j,order) => {
        let c = "tile ";
        c+= (i+j)%2 === 0 ? "bg-[#729551]" : "bg-[#ececd0]";
        let d = "subtile ";

        if ((appState.candidateMoves?.find(m => m[0]===i && m[1]===j))&& order === "subtile"){
            if(position[i][j]){
                d+= " attacking rounded-full ring-5 ring-[rgb(0,0,0,0.25)] w-17 h-17 "
            }else{
                d+= " highlight bg-[rgb(0,0,0,0.1)] rounded-full w-10 h-10   "    
            }
            return d;
        }
        return c
    }

    return(
        <div className="grid place-items-center mt-5">
            <div className="cont2 flex flex-row">
                    <Ranks ranks = {ranks} />
                    <div className="grid place-items-center board relative">
                        <div className="tiles text-slate-950 grid grid-cols-8 grid-rows-8" onDragOver={(e) => e.preventDefault()}>
                            {ranks.map((rank,i)=>
                                files.map((files,j)=>
                                    <div className = {`w-20 h-20  flex items-center justify-center ${getClassName(7-i,j,"tile")}`} key={`${rank}${files}`}>
                                        <div className={`${getClassName(7-i,j,"subtile")}`}></div>
                                    </div>
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
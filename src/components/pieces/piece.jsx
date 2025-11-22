const Piece = ({rank,file,piece}) => {

    const oneDragStart = (e) => {
        e.dataTransfer.effectAllowed = "move"
        e.dataTransfer.setData('text/plain',`${piece},${rank},${file}`);

        setTimeout(()=>{
            e.target.style.display="none";
        },0);

        // e.dataTransfer.setDragImage(_, 0, 0);
        // console.log(e);
    }

    return(
        <>
            <div className={`piece ${piece} p-${rank}${file} absolute h-20 w-20 bg-cover cursor-grab active:cursor-grabbing`} 
            draggable={true} 
            onDragStart={oneDragStart}
            />
        </>
    );
}

export default Piece;
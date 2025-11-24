const Piece = ({rank,file,piece}) => {

    const oneDragStart = (e) => {
        e.dataTransfer.effectAllowed = "move"
        e.dataTransfer.setData('text/plain',`${piece},${rank},${file}`);

        setTimeout(()=>{
            e.target.style.display="none";
        },0);
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
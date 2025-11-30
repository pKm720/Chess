const Ranks = ({ranks}) => {

    return (
        <span className="Ranks text-white grid grid-cols-1">
            {ranks.map((rank)=> <span key={rank} className="pt-5 mr-5 text-[#729551] font-[1000]">{rank}</span>)}
        </span>
    )

}

export default Ranks;
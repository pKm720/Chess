const Ranks = ({ranks}) => {

    return (
        <span className="Ranks text-white grid grid-cols-1">
            {ranks.map((rank)=> <span key={rank} className="pt-5 mr-5">{rank}</span>)}
        </span>
    )

}

export default Ranks;
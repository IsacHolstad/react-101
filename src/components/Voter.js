function Voter({ handleVotes, name}) {
    return(
        <div className="Voter">
            <button onClick={() => handleVotes(name)}> Vote for {name}</button>
        </div>
    )

}
export default Voter;
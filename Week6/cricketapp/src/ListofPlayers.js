import React from "react";

function ListofPlayers(props) {
    const players = [
        {name: "Player 1", score: 85 },
        {name: "Mr. Jack", score: 50 },
        {name: "Mr. Michael", score: 70 },
        {name: "Mr. John", score: 40 },
        {name: "Mr. Ann", score: 61 },
        {name: "Mr. Elisabeth", score: 61 },
        {name: "Mr. Sachin", score: 95 },
        {name: "Mr. Dhoni", score: 100 },
        {name: "Mr. Virat", score: 84 },
        {name: "Mr. Jadeja", score: 64 },
        {name: "Mr. Raina", score: 75 },
        {name: "Mr. Rohit", score: 80 },

];

    return (
        <div>
            <h2>List of Players</h2>
            <ul>
                {players.map((item) => (
                    <li>Mr.{item.name}<span>{item.score}</span></li>
                ))}
            </ul>
            <h2>Players with score less than 70</h2>
            <ul>
                {players.map((item) => {
                    if (item.score < 70) {
                        players70.push(item);
                    }
                })}
            </ul>
        </div>  
    );
}

export default ListofPlayers;
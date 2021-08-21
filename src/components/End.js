import React from "react";

const End = ({ _plrNames, _end, _scores, _winner }) => {
    const [plrNames, setPlrNames] = _plrNames;
    const [end, setEnd] = _end;
    const [scores, setScores] = _scores;
    const [winner, setWinner] = _winner;

    return (
        <div className="End">
            <h1> {`${plrNames[winner]} wins!`} </h1>
            <button
                type="button"
                onClick={() => {
                    setScores([0, 0, 0, 0]);
                    setEnd(false);
                }}
            >
                Restart
            </button>
        </div>
    );
};

export default End;

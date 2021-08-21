import React from "react";

import Card from "./Card";

const Game = ({ _cards, _shuffledCards, _vote, _end, _scores, _winner }) => {
    const [cards, setCards] = _cards;
    const [shuffledCards, setShuffledCards] = _shuffledCards;
    const [vote, setVote] = _vote;
    const [end, setEnd] = _end;
    const [scores, setScores] = _scores;
    const [winner, setWinner] = _winner;

    return (
        <div className="Game">
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                {cards.map((c) =>
                    !c.vote ? (
                        <Card {...c} _vote={vote} _scores={_scores} />
                    ) : (
                        ""
                    )
                )}
            </div>
            <button
                type="button"
                style={{ transform: "translateX(+332%)" }}
                onClick={() => {
                    setVote(true);
                    setCards(
                        cards
                            .filter((c) => c.name !== "Cop")
                            .concat(
                                cards
                                    .filter((c) => c.name === "Cop")
                                    .map((c) => {
                                        return {
                                            ...c,
                                            vote: true,
                                        };
                                    })
                            )
                    );
                }}
            >
                Vote
            </button>
            &nbsp;
            <button
                type="button"
                style={{ transform: "translateX(+165%)" }}
                onClick={() => {
                    setVote(false);
                    setCards(
                        cards
                            .filter((c) => c.name !== "Cop")
                            .concat(
                                cards
                                    .filter((c) => c.name === "Cop")
                                    .map((c) => {
                                        return {
                                            ...c,
                                            vote: false,
                                        };
                                    })
                            )
                    );
                    setShuffledCards(!shuffledCards);
                }}
            >
                Next Round
            </button>
            <br />
            <button
                type="button"
                style={{ transform: "translateX(+510%)" }}
                onClick={() => {
                    setWinner(scores.indexOf(Math.max(...scores)));
                    setEnd(true);
                }}
            >
                End
            </button>
        </div>
    );
};

export default Game;

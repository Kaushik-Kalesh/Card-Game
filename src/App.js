import React, { useState, useEffect } from "react";

import "./App.css";

import Input from "./components/Input";
import Game from "./components/Game";
import End from "./components/End";

const App = () => {
    const [cards, setCards] = useState([
        {
            name: "King",
            img: "https://image.freepik.com/free-vector/king-crown-esport-logo-design_177315-269.jpg",
            pts: 10000,
            vote: false,
        },
        {
            name: "Minister",
            img: "https://logos.flamingtext.com/City-Logos/Minister-Amped-Logo.png",
            pts: 5000,
            vote: false,
        },
        {
            name: "Cop",
            img: "https://i.pinimg.com/originals/33/c7/eb/33c7eb4749df93723fab3b5708ea02b1.jpg",
            pts: 100,
            vote: false,
        },
        {
            name: "Crook",
            img: "https://images1.livehindustan.com/uploadimage/library/2019/05/03/16_9/16_9_1/thief_symbolic_photo__1556892712.jpg",
            pts: 0,
            vote: false,
        },
    ]);
    const [shuffledCards, setShuffledCards] = useState(true);
    const [plrNames, setPlrNames] = useState([
        "Player1",
        "Player2",
        "Player3",
        "Player4",
    ]);
    const [show, setShow] = useState(false);
    const [vote, setVote] = useState(false);
    const [end, setEnd] = useState(false);
    const [scores, setScores] = useState([0, 0, 0, 0]);
    const [winner, setWinner] = useState("");

    const states = {
        _cards: [cards, setCards],
        _shuffledCards: [shuffledCards, setShuffledCards],
        _plrNames: [plrNames, setPlrNames],
        _show: [show, setShow],
        _vote: [vote, setVote],
        _end: [end, setEnd],
        _scores: [scores, setScores],
        _winner: [winner, setWinner],
    };

    useEffect(() => setScores([0, 0, 0, 0]), []);

    useEffect(() => {
        setCards((cards) => {
            const shuffledCards = cards.slice();

            for (let i = cards.length - 1; i >= 0; i--) {
                const randIndex = Math.floor(Math.random() * i);
                [shuffledCards[i], shuffledCards[randIndex]] = [
                    shuffledCards[randIndex],
                    shuffledCards[i],
                ];
            }

            for (let i in shuffledCards)
                shuffledCards[i] = {
                    ...shuffledCards[i],
                    plrName: plrNames[i],
                    index: i,
                    copIndex: shuffledCards.indexOf(
                        shuffledCards.filter((c) => c.name === "Cop")[0]
                    ),
                    crookIndex: shuffledCards.indexOf(
                        shuffledCards.filter((c) => c.name === "Crook")[0]
                    ),
                };

            return shuffledCards;
        });
    }, [shuffledCards, plrNames]);

    return (
        <div className="App">
            {!show ? (
                <Input {...states} />
            ) : (
                <>{!end ? <Game {...states} /> : <End {...states} />}</>
            )}
        </div>
    );
};

export default App;

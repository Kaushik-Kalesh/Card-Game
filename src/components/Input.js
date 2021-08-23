import React from "react";

const Input = ({ _cards, _shuffledCards, _plrNames, _show }) => {
    const [cards, setCards] = _cards;
    const [shuflledCards, setShuffledCards] = _shuffledCards;
    const [plrNames, setPlrNames] = _plrNames;
    const [show, setShow] = _show;

    return (
        <div className="Input">
            {cards.map((c) => (
                <>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        onBlur={(e) => {
                            const newPlrNames = plrNames;
                            newPlrNames[cards.indexOf(c)] = e.target.value;
                            setPlrNames(newPlrNames);
                            setShuffledCards(!shuflledCards);
                        }}
                    />
                    <br />
                </>
            ))}
            <button
                type="button"
                style={{ transform: "translateX(+60%)" }}
                onClick={() => setShow(true)}
            >
                Submit
            </button>
        </div>
    );
};

export default Input;

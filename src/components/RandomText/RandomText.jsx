import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import './RandomText.modules.css';

const RandomText = ({ initialWord, time }) => {
    const [count, setCount] = useState(0);
    const [globalCount, setGlobalCount] = useState(0);
    const [canChange, setCanChange] = useState(false);
    const [randomWord, setRandomWord] = useState("");
    const INITIAL_WORD = initialWord;

    useEffect(() => {
        const interval = setInterval(() => {
            let finalWord = "";

            for (let x = 0; x < INITIAL_WORD.length; x++) {
                if (x <= count && canChange) {
                    finalWord += INITIAL_WORD[x];
                } else {
                    finalWord += getRandomLetter();
                }
            }

            setRandomWord(finalWord);

            if (canChange) {
                setCount((prevCount) => prevCount + 1);
            }

            if (globalCount >= 20) {
                setCanChange(true);
            }

            if (count >= INITIAL_WORD.length) {
                setCount(0);
                setCanChange(false);
                setGlobalCount(0);
            }

            setGlobalCount((prevGlobalCount) => prevGlobalCount + 1);
        }, time);

        return () => {
            clearInterval(interval);
        };
    }, [count, canChange, globalCount]);

    const getRandomLetter = () => {
        const caracts = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "a",
            "z",
            "e",
            "r",
            "t",
            "y",
            "@",
            "<",
            ">",
            "_",
            "-",
            "%",
            "*",
            "$",
            "&",
            "/",
            ";"
        ];
        const randomIndex = rand(0, caracts.length - 1);
        return caracts[randomIndex];
    };

    const rand = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    return (
        <p className="paragraph">
             {randomWord}
        </p>
    );
};

export default RandomText;


RandomText.propTypes= {
    initialWord: PropTypes.string,
    time: PropTypes.number
}
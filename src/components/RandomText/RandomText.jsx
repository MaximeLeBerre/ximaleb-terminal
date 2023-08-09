import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import './RandomText.modules.css';
import {getRandomLetter} from "../../helper/getRandomLetter.js";

const RandomText = ({ initialWord = 'ximaleb', time }) => {
    const [randomWord, setRandomWord] = useState("");
    const INITIAL_WORD = initialWord;

    useEffect(() => {
        const interval = setInterval(() => {
            let finalWord = "";

            for (let x = 0; x < INITIAL_WORD.length; x++) {
                finalWord += getRandomLetter();
            }

            setRandomWord(finalWord);
        }, time);

        return () => {
            clearInterval(interval);
        };
    }, []);



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
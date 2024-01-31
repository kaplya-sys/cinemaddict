import {DESCRIPTION_CHARACTERS} from '../const';

const getRandomElement = (elements) => elements[Math.floor(Math.random() * elements.length)];

const trimCharacters = (text, count = DESCRIPTION_CHARACTERS) => {
  if (text.length < count) {
    return text;
  }

  return `${text.slice(0, count)}...`;
};

export default {getRandomElement, trimCharacters};

import {createEmojiTemplate} from './emoji-template';
import {Emoji} from '../../const';

export const createEmojiListTemplate = () => (
  `<div class="film-details__emoji-list">
    ${Object.values(Emoji).map((value) => createEmojiTemplate(value)).join('')}
  </div>`
);

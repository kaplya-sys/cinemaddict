import {createEmojiListTemplate} from './emoji-list-template';

export const createFormTemplate = () => (
  `<form class="film-details__new-comment" action="" method="get">
    <div class="film-details__add-emoji-label"></div>
    <label class="film-details__comment-label">
      <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
    </label>
    ${createEmojiListTemplate()}
  </form>`
);

export const createEmojiTemplate = (emojiType) => (
  `<input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-${emojiType}" value=${emojiType}>
  <label class="film-details__emoji-label" for="emoji-${emojiType}">
    <img src="./images/emoji/${emojiType}.png" width="30" height="30" alt="emoji">
  </label>`
);

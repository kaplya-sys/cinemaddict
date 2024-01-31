import {createCommentTemplate} from './comment-template';

export const createCommentListTemplate = (comments) => (
  `<ul class="film-details__comments-list">
    ${comments.map((comment) => createCommentTemplate(comment))}
  </ul>`
);

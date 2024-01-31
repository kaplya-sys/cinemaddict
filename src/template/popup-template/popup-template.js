import {createButtonsTemplate} from './buttons-templatee';
import {createCommentListTemplate} from './comment-list-template';
import {createCloseButtonTemplate} from './close-button-template';
import {createFilmInfoTemplate} from './film-info-template';
import {createFormTemplate} from './form-template';

export const createPopupTemplate = ({filmInfo, comments}) => (
  `<section class="film-details">
    <div class="film-details__inner">
      <div class="film-details__top-container">
        ${createCloseButtonTemplate()}
        ${createFilmInfoTemplate(filmInfo)}
        ${createButtonsTemplate()}
      </div>

      <div class="film-details__bottom-container">
        <section class="film-details__comments-wrap">
          <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>
          ${createCommentListTemplate(comments)}
          ${createFormTemplate()}
        </section>
      </div>
    </div>
  </section>`
);

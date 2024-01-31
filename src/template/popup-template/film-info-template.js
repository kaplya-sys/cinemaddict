import {createFilmInfoDetailsTemplate} from './film-info-details-template';
import {trimCharacters} from '../../utils/utils';

export const createFilmInfoTemplate = (filmInfo) => {
  const {title, alternativeTitle, totalRating, poster, ageRating, description} = filmInfo;

  return (
    `<div class="film-details__info-wrap">
      <div class="film-details__poster">
        <img class="film-details__poster-img" src=${poster} alt="">

        <p class="film-details__age">${ageRating}+</p>
      </div>
      <div class="film-details__info">
        <div class="film-details__info-head">
          <div class="film-details__title-wrap">
            <h3 class="film-details__title">${title}</h3>
            <p class="film-details__title-original">Original: ${alternativeTitle}</p>
          </div>

          <div class="film-details__rating">
            <p class="film-details__total-rating">${totalRating}</p>
          </div>
        </div>
        ${createFilmInfoDetailsTemplate(filmInfo)}
        <p class="film-details__film-description">
          ${trimCharacters(description)}
        </p>
      </div>
    </div>`
  );
};

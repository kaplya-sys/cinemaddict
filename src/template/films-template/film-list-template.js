import {createFilmCardTemplate} from './film-card-template';

export const createFilmListTemplate = (films) => (
  `<div class="films-list__container">
    ${films.map((film) => createFilmCardTemplate(film))}
  </div>`
);

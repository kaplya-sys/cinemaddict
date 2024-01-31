import {createFilmGenreTemplate} from './film-genre-template';

export const createFilmInfoDetailsTemplate = ({director, writers, actors, release, duration, genre}) => (
  `<table class="film-details__table">
    <tr class="film-details__row">
      <td class="film-details__term">Director</td>
      <td class="film-details__cell">${director}</td>
    </tr>
    <tr class="film-details__row">
      <td class="film-details__term">Writers</td>
      <td class="film-details__cell">${writers.map((writer) => writer).join('')}</td>
    </tr>
    <tr class="film-details__row">
      <td class="film-details__term">Actors</td>
      <td class="film-details__cell">${actors.map((actor) => actor).join('')}</td>
    </tr>
    <tr class="film-details__row">
      <td class="film-details__term">Release Date</td>
      <td class="film-details__cell">${release.date}</td>
    </tr>
    <tr class="film-details__row">
      <td class="film-details__term">Duration</td>
      <td class="film-details__cell">${duration}</td>
    </tr>
    <tr class="film-details__row">
      <td class="film-details__term">Country</td>
      <td class="film-details__cell">${release.releaseCountry}</td>
    </tr>
    <tr class="film-details__row">
      <td class="film-details__term">${genre.lenght <= 1 ? 'Genre' : 'Genres'}</td>
      <td class="film-details__cell">
        ${genre.map((type) => createFilmGenreTemplate(type))}
      </td>
    </tr>
  </table>`
);

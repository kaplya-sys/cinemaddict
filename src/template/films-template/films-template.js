import {createFilmListTemplate} from './film-list-template';
import {createMoreButtonTemplate} from './more-button-template';

export const createFilmsTemplate = (films) => (
  `<section class="films">
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
      ${createFilmListTemplate(films)}
      ${createMoreButtonTemplate()}
    </section>

    <section class="films-list films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
      ${createFilmListTemplate(films)}
    </section>

    <section class="films-list films-list--extra">
      <h2 class="films-list__title">Most commented</h2>
      ${createFilmListTemplate(films)}
    </section>
  </section>`
);

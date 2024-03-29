import {trimCharacters} from '../../utils/utils';


export const createFilmCardTemplate = ({filmInfo, comments, userDetails}) => {
  const {title, totalRating, poster, description, release, duration, genre} = filmInfo;
  const {watchlist, alreadyWatched, favorite} = userDetails;
  const isWatchlistActive = watchlist ? 'film-card__controls-item--active' : '';
  const isAlreadyWatchedActive = alreadyWatched ? 'film-card__controls-item--active' : '';
  const isFavoriteActive = favorite ? 'film-card__controls-item--active' : '';

  return (
    `<article class="film-card">
      <a class="film-card__link">
        <h3 class="film-card__title">${title}</h3>
        <p class="film-card__rating">${totalRating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${release.date}</span>
          <span class="film-card__duration">${duration}</span>
          <span class="film-card__genre">${genre[0]}</span>
        </p>
        <img src=${poster} alt="" class="film-card__poster">
        <p class="film-card__description">${trimCharacters(description)}</p>
        <span class="film-card__comments">${comments.length} comments</span>
      </a>
      <div class="film-card__controls">
        <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${isWatchlistActive}" type="button">Add to watchlist</button>
        <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${isAlreadyWatchedActive}" type="button">Mark as watched</button>
        <button class="film-card__controls-item film-card__controls-item--favorite ${isFavoriteActive}" type="button">Mark as favorite</button>
      </div>
    </article>`
  );
};

import {createMovieCountTemplate} from './movie-count-template';

export const createFilterTemplate = (title, isChecked, count) => {
  const isActive = isChecked ? 'main-navigation__item--active' : '';

  return (
    `<a href="#watchlist" class="main-navigation__item ${isActive}">
      ${title} ${count ? createMovieCountTemplate(count) : ''}
    </a>`
  );
};

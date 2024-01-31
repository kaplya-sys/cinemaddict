const BASE_URL = 'https://20.ecmascript.htmlacademy.pro/cinemaddict';
const AUTH_TOKEN = 'Basic u8FcNDmsw45H1cZg';
const FILMS_COUNT_PER_STEP = 5;
const MAX_FILMS_VIEW = 2;
const DESCRIPTION_CHARACTERS = 140;
const Path = {
  MOVIES: 'movies',
  COMMENTS: 'comments'
};
const Method = {
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
};
const UserReating = {
  NOVICE: 'novice',
  FAN: 'fan',
  MOVIE_BUFF: 'movie buff',
};
const Filter = {
  ALL_MOVIES: 'All movies',
  WATCHLIST: 'Watchlist',
  HISTORY: 'History',
  FAVORITES: 'Favorites'
};
const EmptyMoviesList = {
  [Filter.ALL_MOVIES]: 'There are no movies in our database',
  [Filter.WATCHLIST]: 'There are no movies to watch now',
  [Filter.HISTORY]: 'There are no watched movies now',
  [Filter.FAVORITES]: 'There are no favorite movies now'
};
const Sort = {
  SORT_BY_DEFAULT: 'Sort by default',
  SORT_BY_DATE: 'Sort by date',
  SORT_BY_RATING:'Sort by rating'
};
const Emoji = {
  SMILE: 'smile',
  SLEEPING: 'sleeping',
  PUKE: 'puke',
  ANGRY: 'angry'
};

export {
  BASE_URL,
  AUTH_TOKEN,
  FILMS_COUNT_PER_STEP,
  MAX_FILMS_VIEW,
  DESCRIPTION_CHARACTERS,
  Path,
  Method,
  Filter,
  EmptyMoviesList,
  UserReating,
  Sort,
  Emoji
};

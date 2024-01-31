import Observable from '../framework/observable';

export default class MoviesModel extends Observable {
  #movies = [];
  #moviesApiService = null;

  constructor({moviesApiService}) {
    super();
    this.#moviesApiService = moviesApiService;
  }

  get movies() {
    return this.#movies;
  }

  async init() {
    try {
      this.#movies = this.#moviesApiService.movies;
    } catch(err) {
      this.#movies = [];
    }
  }

  async updateMovie(updateType, data) {
    const index = this.#movies.findIndex((movie) => movie.id === data.id);
    if (index === -1) {
      throw new Error('Failed to update the movie, movie dont`t found.');
    }

    try {
      const movie = await this.#moviesApiService.updateMovie(data);
      this.#movies = [...this.#movies.slice(0, index), movie, ...this.#movies.slice(index + 1)];
      this._notify(updateType, movie);
    } catch(err) {
      throw new Error('Failed to update the movie.');
    }
  }
}

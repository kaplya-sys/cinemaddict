import ApiService from '../framework/api-service';
import Adapter from '../adapter';
import {Method, Path} from '../const';

export default class MoviesApiService extends ApiService {
  #adapter = new Adapter();

  get movies() {
    return this._load({url: Path.MOVIES})
      .then(MoviesApiService.parseResponse)
      .then((movies) => movies.map((movie) => this.#adapter.adaptedMovieToClient(movie)));
  }

  async updateMovie(data) {
    console.log(this.#adapter.adaptedMovieToServer(data));
    const movie = await this._load(
      {
        url: `${Path.MOVIES}/${data.id}`,
        method: Method.PUT,
        body: this.#adapter.adaptedMovieToServer(data)
      }
    );

    return MoviesApiService.parseResponse(movie);
  }
}

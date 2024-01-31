export default class Adapter {
  adaptedMovieToClient(movie) {
    const adapted = {
      ...movie,
      filmInfo: {
        ...movie['film_info'],
        alternativeTitle: movie['film_info']['alternative_title'],
        totalRating: movie['film_info']['total_rating'],
        ageRating: movie['film_info']['age_rating'],
        release: {
          ...movie['film_info'].release,
          releaseCountry: movie['film_info'].release['release_country']
        }
      },
      userDetails: {
        ...movie['user_details'],
        alreadyWatched: movie['user_details']['already_watched'],
        watchingDate: movie['user_details']['watching_date'],
      },
    };

    delete adapted['film_info'];
    delete adapted['user_details'];
    delete adapted.filmInfo['alternative_title'];
    delete adapted.filmInfo['total_rating'];
    delete adapted.filmInfo['age_rating'];
    delete adapted.filmInfo.release['release_country'];
    delete adapted.userDetails['already_watched'];
    delete adapted.userDetails['watching_date'];

    return adapted;
  }

  adaptedMovieToServer(movie) {
    const adapted = {
      ...movie,
      'film_info': {
        ...movie.filmInfo,
        'alternative_title': movie.filmInfo.alternativeTitle,
        'total_rating': movie.filmInfo.totalRating,
        'age_rating': movie.filmInfo.ageRating,
        release: {
          ...movie.filmInfo.release,
          'release_country': movie.filmInfo.release.releaseCountry
        }
      },
      'user_details': {
        ...movie.userDetails,
        'already_watched': movie.userDetails.alreadyWatched,
        'watching_date': movie.userDetails.watchingDate,
      },
    };

    delete adapted.filmInfo;
    delete adapted.userDetails;
    delete adapted['film_info'].alternativeTitle;
    delete adapted['film_info'].totalRating;
    delete adapted['film_info'].ageRating;
    delete adapted['film_info'].release.releaseCountry;
    delete adapted['user_details'].alreadyWatched;
    delete adapted['user_details'].watchingDate;

    return adapted;
  }
}

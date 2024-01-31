import {AUTH_TOKEN, BASE_URL} from './const';
import CommentsModel from './model/comments-model';
import MoviesModel from './model/movies-model';
import CommentsApiService from './services/comments-api-service';
import MoviesApiService from './services/movies-api-service';

const moviesApiService = new MoviesApiService(BASE_URL, AUTH_TOKEN);
const commentsApiService = new CommentsApiService(BASE_URL, AUTH_TOKEN);
const moviesModel = new MoviesModel({moviesApiService});
const commentsModel = new CommentsModel({commentsApiService});

moviesModel.init();

console.log(moviesModel.movies);
console.log(commentsModel.getComments('major','2'));


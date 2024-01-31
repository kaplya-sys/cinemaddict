import dayjs from 'dayjs';

const sortByMostComments = (a, b) => a.comments.length < b.comments.length;
const sortByTopRating = (a, b) => a.filmInfo.TotalRating < b.filmInfo.TotalRating;
const sortByReleaseDate = (a, b) => dayjs(a.release.date).diff(dayjs(b.release.date));

export default {sortByMostComments, sortByTopRating, sortByReleaseDate};

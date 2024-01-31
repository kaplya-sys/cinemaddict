import {createRatingTemplate} from './rating-template';

export const createProfileTemplate = (rating) => (
  `<section class="header__profile profile">
    ${rating ? createRatingTemplate(rating) : ''}
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`
);

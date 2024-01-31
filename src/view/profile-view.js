import AbstractView from '../framework/view/abstract-view';
import {createProfileTemplate} from '../template/profile-template/profile-template';

export default class ProfileView extends AbstractView {
  get template() {
    return createProfileTemplate();
  }
}

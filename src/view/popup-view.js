import AbstractView from '../framework/view/abstract-view';
import {createPopupTemplate} from '../template/popup-template/popup-template';

export default class PopupView extends AbstractView {
  get template() {
    return createPopupTemplate();
  }
}

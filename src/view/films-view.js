import AbstractStatefulView from '../framework/view/abstract-stateful-view';
import {createFilmsTemplate} from '../template/films-template/films-template';

export default class FiltersView extends AbstractStatefulView {
  get template() {
    return createFilmsTemplate();
  }
}

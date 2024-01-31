import AbstractView from '../framework/view/abstract-view';
import {createSortListTemplate} from '../template/sort-template/sort-list-template';

export default class SortView extends AbstractView {
  get template() {
    return createSortListTemplate();
  }
}

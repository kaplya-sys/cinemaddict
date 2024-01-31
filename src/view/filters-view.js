import AbstractView from '../framework/view/abstract-view';
import {createFilterListTemplate} from '../template/filters-template/filter-list-template';

export default class FiltersView extends AbstractView {
  get template() {
    return createFilterListTemplate();
  }
}

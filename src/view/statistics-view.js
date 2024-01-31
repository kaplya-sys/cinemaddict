import AbstractView from '../framework/view/abstract-view';
import {createStatisticsTemplate} from '../template/statistics-template/statistics-template';

export default class StatisticsView extends AbstractView {
  get template() {
    return createStatisticsTemplate();
  }
}

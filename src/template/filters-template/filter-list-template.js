import {createFilterTemplate} from './filter-template';
import {Filter} from '../../const';

export const createFilterListTemplate = (isChecked, count) => (
  `<nav class="main-navigation">
    ${Object.values(Filter).map((value) => createFilterTemplate(value, isChecked, count).join(''))}
  </nav>`
);

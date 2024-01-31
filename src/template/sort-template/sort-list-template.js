import {createSortTemplate} from './sort-template';
import {Sort} from '../../const';

export const createSortListTemplate = (isChecked) => (
  `<ul class="sort">
    ${Object.values(Sort).map((value) => createSortTemplate(value, isChecked).join(''))}
  </ul>`
);

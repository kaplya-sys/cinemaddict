import AbstractView from '../framework/view/abstract-view';
import {createMessageTemplate} from '../template/message-template/message-template';

export default class MessageView extends AbstractView {
  get template() {
    return createMessageTemplate();
  }
}

import Observable from '../framework/observable';

export default class CommentsModel extends Observable {
  #comments = [];
  #commentsApiService = null;

  constructor({commentsApiService}) {
    super();
    this.#commentsApiService = commentsApiService;
  }

  async getComments(updateType, id) {
    try {
      this.#comments = await this.#commentsApiService.getComments(id);
      this._notify(updateType, this.#comments);
    } catch(err) {
      this.#comments = [];
    }
  }

  async createComment(updateType, data) {
    try {
      const comment = await this.#commentsApiService.createComment(data);
      this.#comments = [...this.#comments, comment];
      this._notify(updateType, comment);
    } catch(err) {
      throw new Error('Failed to create the comment');
    }
  }

  async updateComment(updateType, data) {
    const index = this.#comments.findIndex((comment) => comment.id === data.id);

    if (index === -1) {
      throw new Error('Failed to update the comment, comment dont`t found.');
    }

    try {
      const comment = await this.#commentsApiService.updateComment(data);
      this.#comments = [...this.#comments.slice(0, index), comment, this.#comments.slice(index + 1)];
      this._notify(updateType, comment);
    } catch(err) {
      throw new Error('Failed to update the comment');
    }
  }

  async deleteComment(updateType, data) {
    const index = this.#comments.findIndex((comment) => comment.id === data.id);

    if (index === -1) {
      throw new Error('Failed to update the comment, comment dont`t found.');
    }

    try {
      await this.#commentsApiService.deleteComment(data);
      this.#comments = [...this.#comments.slice(0, index), this.#comments.slice(index + 1)];
      this._notify(updateType);
    } catch(err) {
      throw new Error('Failed to delete the commet');
    }
  }
}

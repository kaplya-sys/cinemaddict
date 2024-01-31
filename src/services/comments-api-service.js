import ApiService from '../framework/api-service';
import {Method, Path} from '../const';

export default class CommentsApiService extends ApiService {
  async getComments(id) {
    const comment = await this._load({url: `${Path.COMMENTS}/${id}`});

    return CommentsApiService.parseResponse(comment);
  }

  async createComment(data) {
    const comment = await this._load(
      {
        url: `${Path.COMMENTS}/${data.id}`,
        method: Method.POST,
        body: data
      }
    );

    return CommentsApiService.parseResponse(comment);
  }

  async updateComment(data) {
    const comment = await this._load(
      {
        url: `${Path.COMMENTS}/${data.id}`,
        method: Method.PUT,
        body: data
      }
    );

    return CommentsApiService.parseResponse(comment);
  }

  async deleteComment(data) {
    await this._load(
      {
        url: `${Path.COMMENTS}/${data.id}`,
        method: Method.DELETE
      }
    );
  }
}

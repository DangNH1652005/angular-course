import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Post } from '../mpdels/post';

@Service()
export class PostService {
  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  getPost() {
    return this.http.get<Post[]>(`${this.apiUrl}?_limit=5`);
  }

  addPost(post: Omit<Post, 'id'>) {
    // The post must have all the attributes of a Post, except for the ID.
    return this.http.post<Post>(this.apiUrl, post);
  }

  updatePost(id: number, post: Post) {
    return this.http.put<Post>(`${this.apiUrl}/${id}`, post);
  }

  deletePost(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

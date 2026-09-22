import { Component, inject, OnInit, signal } from '@angular/core';
import { PostService } from '../../services/post-service';
import { Post } from '../../mpdels/post';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact implements OnInit {
  private postService = inject(PostService);

  posts = signal<Post[]>([]);

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPost().subscribe((data) => {
      this.posts.set(data);
    });
  }

  createPost() {
    const newPost = {
      userId: 1,
      title: 'My New Post',
      body: 'This is my new post',
    };

    this.postService.addPost(newPost).subscribe((data) => {
      this.posts.update((posts) => [data, ...posts]);
    });
  }

  updatePost(post: Post) {
    const updatePost = {
      ...post,
      title: 'Update Title',
    };

    this.postService.updatePost(post.id, updatePost).subscribe((data) => {
      this.posts.update((posts) =>
        posts.map((item) => (item.id === updatePost.id ? updatePost : item)),
      );
    });
  }

  deletePost(id: number) {
    this.postService.deletePost(id).subscribe(() => {
      this.posts.update((data) => data.filter((item) => item.id !== id));
    });
  }
}

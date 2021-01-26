import { Injectable } from '@angular/core';
import { Blog } from './model/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public blogs: Blog[] = [{
    id: 1,
    post: 'This is my first post',
    date: new Date(2020, 10, 30)
  }];
  constructor() { }

  public addBlog(blog: string) {

    this.blogs.push({ post: blog, date: new Date(), id: this.blogs.length });
    return this.blogs;
  }

  public editBlog(id: number, blogPost: string) {
    let index = this.blogs.findIndex(x => x.id === id);
    this.blogs[index].post = blogPost;
    this.blogs[index].date = new Date();
    return this.blogs[index];
  }

  public deleteBlog(id: number) {
    let index = this.blogs.findIndex(x => x.id === id);
    this.blogs.splice(index, 1);
    return this.blogs;
  }

  public viewBlogs() {
    return this.blogs;
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BlogService } from '../blog.service';
import { Blog } from '../model/blog.model';
import { EditComponent } from './blog/edit/edit.component';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  public blogs: Blog[] = [];
  constructor(private blogService: BlogService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.blogs = this.blogService.viewBlogs();
  }

  public addPost(){
    const dialogRef = this.dialog.open(EditComponent,
      { data: { post: '' } });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result)
        this.blogs = this.blogService.addBlog(result);
      }
    });
  }

}

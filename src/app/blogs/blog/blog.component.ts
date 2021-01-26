import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BlogService } from 'src/app/blog.service';
import { Blog } from 'src/app/model/blog.model';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  @Input() public blog: Blog;
  constructor(public dialog: MatDialog,
    private blogService: BlogService) { }

  ngOnInit(): void {
  }

  openEditDialog() {
    const dialogRef = this.dialog.open(EditComponent,
      { data: { post: this.blog.post } });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.blog.post = result;
        this.blog = this.blogService.editBlog(this.blog.id, this.blog.post);
      }
    });
  }

  deletePost(){
    this.blogService.deleteBlog(this.blog.id);
  }

}

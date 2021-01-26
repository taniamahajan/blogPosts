import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Blog } from 'src/app/model/blog.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Blog) { }

  ngOnInit(): void {
    console.log(this.data.post);
  }

}

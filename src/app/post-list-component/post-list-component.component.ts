import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {

  constructor() { }


  @Input() title;
  @Input() content;
  @Input() loveIts;
  @Input() created_at;

  ngOnInit() {
  }


  updateLove(){
    this.loveIts = this.loveIts + 1;
  }

  updateDontLove(){
    this.loveIts = this.loveIts -1;
  }
}

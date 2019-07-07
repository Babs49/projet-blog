import { Component,Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {



 @Input() postTitle: string;
 @Input() postContent: string;
 @Input() postLoveIts : number;
 @Input() postDate : Date;


  constructor() { }

  ngOnInit() {
  }

increaseLoveIts(){

this.postLoveIts += 1;

} 

decreaseLoveIts(){

this.postLoveIts -= 1;

	}
} 


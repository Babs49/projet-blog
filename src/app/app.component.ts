import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

title = 'projet-blog';

myDate = new Date();

posts = [
{
	title: "Mon premier post",
	content:"Lorem ",
	loveIts:0,	
	date: this.myDate

},
{

	title: "Mon deuxieme post",
	content:"Lorem 2",
	loveIts:0,
	date: this.myDate

},
{

	title: "Mon 3 post",
	content:"Lorem 3",
	loveIts:0,
	date: this.myDate

}
		]; 

increaseLoveIts(){

	for (let post of this.posts){
post.loveIts += 1;
	}
} 

decreaseLoveIts(){

	for (let post of this.posts){
post.loveIts -= 1;
	}
} 


}




// class Post {

// 	title:string;
// 	content:string;
// 	loveIts:0;
// 	myDate: Date;

// 	constructor(title : string, content : string, loveIts : number, date : Date){
// 	this.myDate = new Date();
// 	}




// }

// let post1 = new Post("Mon 1er", "lorem", 0, date);

// console.log(post1.title, post1.content, post1.myDate);


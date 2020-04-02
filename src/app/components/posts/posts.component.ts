import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor() { }
  filterPost = '';
  posts = [
    {
      "id": 1,
      "title": "Angie",
      "img": "Rolling stones" 
       
    },
    {
      "id": 2,
      "title": "Back street girl",
      "img": "Rolling stones"
    },
    {
      "id": 3,
      "title": "Bitch",
      "img": "Rolling stones"
    },
    {
      "id": 4,
      "title": "Brown sugar",
      "img": "Rolling stones"
    },
    {
      "id": 5,
      "title": "Gimmie shelter",
      "img": "Rolling stones"
    },
    {
      "id": 6,
      "title": "Harlem shuffle",
      "img": "Rolling stones" 
       
    },
    {
      "id": 7,
      "title": "It´s only rock and roll",
      "img": "Rolling stones"
    },
    {
      "id": 8,
      "title": "Jumpin´jack flash",
      "img": "Rolling stones"
    },
    {
      "id": 9,
      "title": "Lady jane",
      "img": "Rolling stones"
    },
    {
      "id": 10,
      "title": "Let´s spend the nigth together",
      "img": "Rolling stones"
    },
    {
      "id": 11,
      "title": "Little red rooster",
      "img": "Rolling stones" 
       
    },
    {
      "id": 12,
      "title": "Miss you",
      "img": "Rolling stones"
    },
    {
      "id": 13,
      "title": "Paint it black",
      "img": "Rolling stones"
    },
    {
      "id": 14,
      "title": "Ruby Tuesday",
      "img": "Rolling stones"
    },
    {
      "id": 15,
      "title": "Stisfaction",
      "img": "Rolling stones"
    },
    {
      "id": 16,
      "title": "She´s a rainbow",
      "img": "Rolling stones" 
       
    },
    {
      "id": 17,
      "title": "Street fighting man",
      "img": "Rolling stones"
    },
    {
      "id": 18,
      "title": "Sympathy for the devil",
      "img": "Rolling stones"
    },
    {
      "id": 19,
      "title": "Under my thumb",
      "img": "Rolling stones"
    }
  ];
  ngOnInit() {
  }

}

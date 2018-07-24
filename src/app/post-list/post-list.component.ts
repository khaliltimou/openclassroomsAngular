import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreated_at: any;


  posts = [
    {
      postTitle: 'Qu\'est-ce que le Lorem Ipsum?',
      postContent: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.',
      postLoveIts: 0,
      postCreated_at: 'OFF'

    },
    {
      postTitle: 'Pourquoi l\'utiliser?',
      postContent: 'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même.',
      postLoveIts: 1,
      postCreated_at: 'OFF'

    },
    {
      postTitle: 'D\'où vient-il?',
      postContent: 'Contrairement à une opinion répandue, le Lorem Ipsum n\'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45',
      postLoveIts: 0,
      postCreated_at: 'OFF'

    }
  ];

  constructor() { }

  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

import { Article } from '../article';
import { Articles } from '../articles';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  id = +this.route.snapshot.paramMap.get('id');

  articles: Article[] = Articles;
  article: Article = Articles[this.id];  
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { 
  /* Note: Thanks to mihaicux2's comment
   * https://github.com/angular/angular/issues/13831
   */
    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
        // if you need to scroll back to top, here is the right place
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit() {

  }
}

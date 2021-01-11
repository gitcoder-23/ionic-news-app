import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  data: any;

  constructor(
    private newsService: NewsService,
    private router: Router) { }

  ngOnInit() {

    this.newsService.getData('top-headlines?country=us&category=business').subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }


  onGoToNewsSinglePage(article){

    // Pass the article function
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  news = [
    {
      "id": 1,
      "headline": "Ratón muta",
      "description": "Lorem ipsum."
    },
    {
      "id": 2,
      "headline": "Convicto escapa",
      "description": "Lorem ipsum."
    }
  ]

  constructor(
    private newsService: NewsService,
    private router: Router
  ) { }

  onNewsClick(myNew: any) {
    this.newsService.setNew(myNew);
    this.router.navigate(['/news', myNew.id])
  }
}

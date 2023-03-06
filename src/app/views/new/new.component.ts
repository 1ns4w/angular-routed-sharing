import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  new: any;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.new = this.newsService.getNew();
  }

  ngOnDestroy() {
    this.newsService.clearNew();
  }
}

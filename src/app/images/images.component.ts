import { Component, OnInit } from '@angular/core';
import { ApiPaginationService } from '../api-pagination.service';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  allItems: any;

  constructor(private service:ApiPaginationService) { }
   // array of all items to be paged
   

   // pager object
   pager: any = {};

   // paged items
   pagedItems: any[];

  ngOnInit() {
    this.service.getImages().subscribe((res)=>{
      this.allItems = res;
      console.log(this.allItems);
      this.setPage(1);
    });
  }
  setPage(page: number) {
    // get pager object from service
    this.pager = this.service.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
}
}

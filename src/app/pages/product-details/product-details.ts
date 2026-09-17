import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-product-details',
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails implements OnInit {
  private activetedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activetedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      console.log(id);
    });
  }
}

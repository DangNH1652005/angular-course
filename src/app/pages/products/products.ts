import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products implements OnInit {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  // passing the route parameters using navigate()
  viewDetail(productId: number) {
    this.router.navigate(['/pages/product-details', productId]);
    console.log(productId);
  }

  viewQueryPrams(category: string) {
    this.router.navigate(['/pages/products'], {
      queryParams: {
        category: category,
      },
    });
    console.log(category);
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      const category = params.get('category');
      const sort = params.get('sort');

      console.log(category + ' ' + sort);
    });
  }
}

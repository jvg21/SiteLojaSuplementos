import { Component } from '@angular/core';

@Component({
  selector: 'app-produto-spec',
  templateUrl: './produto-spec.component.html',
  styleUrls: ['./produto-spec.component.css']
})
export class ProdutoSpecComponent {

}

document.addEventListener("DOMContentLoaded", () => {
  const addToCartButton = document.getElementById("addToCart");

  if (addToCartButton) {
      addToCartButton.addEventListener("click", () => {
          alert("Item added to the cart!");
      });
  }
});

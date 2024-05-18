import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-hero-slider",
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterLink],
  templateUrl: "./hero-slider.component.html",
  styleUrl: "./hero-slider.component.css"
})
export class HeroSliderComponent {}

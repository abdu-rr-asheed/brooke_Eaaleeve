// core
import { Component } from "@angular/core";

// components
import { HeroSliderComponent } from "@shared/components/hero-slider/hero-slider.component";
import { AboutMeComponent } from "@shared/components/about-me/about-me.component";
import { PartnershipsAndEventsComponent } from "@shared/components/partnerships-and-events/partnerships-and-events.component";
import { TechniqueComponent } from "@shared/components/technique/technique.component";
import { ContactMeComponent } from "@shared/components/contact-me/contact-me.component";

@Component({
  selector: "app-home-page",
  standalone: true,
  imports: [HeroSliderComponent, AboutMeComponent, PartnershipsAndEventsComponent, TechniqueComponent, ContactMeComponent],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.css"
})
export class HomePageComponent {}

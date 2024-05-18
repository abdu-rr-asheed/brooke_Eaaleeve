import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-partnerships-and-events",
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterLink],
  templateUrl: "./partnerships-and-events.component.html",
  styleUrl: "./partnerships-and-events.component.css"
})
export class PartnershipsAndEventsComponent {}

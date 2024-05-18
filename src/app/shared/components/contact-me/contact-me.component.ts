import { Component } from "@angular/core";
import { HeaderComponent } from "@layout/header/header.component";

@Component({
  selector: "app-contact-me",
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: "./contact-me.component.html",
  styleUrl: "./contact-me.component.css"
})
export class ContactMeComponent {}

import { NgClass, NgStyle } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";

export interface Urls {
  url: string;
  name: string;
}

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterLink, NgStyle, NgClass],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css"
})
export class HeaderComponent {
  @Input() background: string = "";
  @Input() headerPositionClass: string = "top-0";
  @Input() headerCustomClass: string = "";

  urls: Urls[] = [
    {
      url: "/",
      name: "About Me"
    },
    {
      url: "/",
      name: "Highlight Career"
    },
    {
      url: "/",
      name: "Partner & Events"
    },
    {
      url: "/",
      name: "Contact Me"
    }
  ];
}

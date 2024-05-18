import { NgClass, NgStyle } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { MainService } from "@core/service/main.service";

export interface Urls {
  url: string;
  name: string;
  targetId: string;
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
      name: "About Me",
      targetId: "aboutMeSection"
    },
    {
      url: "/",
      name: "Highlight Career",
      targetId: "highlightCareerSection"
    },
    {
      url: "/",
      name: "Partner & Events",
      targetId: "partnerEventsSection"
    },
    {
      url: "/",
      name: "Contact Me",
      targetId: "contactMeSection"
    }
  ];

  constructor(public mainService: MainService) {}
}

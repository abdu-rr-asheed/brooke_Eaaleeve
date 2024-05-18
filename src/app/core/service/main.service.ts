import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MainService {
  constructor() {}

  public scrollToElement(elements: string): void {
    document.getElementById(elements)?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
}

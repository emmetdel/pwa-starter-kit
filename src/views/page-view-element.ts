import { LitElement, property } from "@polymer/lit-element";

export abstract class PageViewElement extends LitElement {
  // Only render this page if it's actually visible.
  shouldUpdate() {
    return this.active;
  }

  @property({ type: Boolean })
  active = false;
}

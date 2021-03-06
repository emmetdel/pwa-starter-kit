import { html } from "@polymer/lit-element";
import { PageViewElement } from "./page-view-element";

// These are the shared styles needed by this element.
import { SharedStyles } from "../styles/shared-styles";

class MyView1 extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <section>
        <h1>View 1</h1>
      </section>
    `;
  }
}

window.customElements.define("my-view1", MyView1);

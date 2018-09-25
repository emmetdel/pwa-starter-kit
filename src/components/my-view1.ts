import { html } from "@polymer/lit-element";
import { PageViewElement } from "./page-view-element";

// These are the shared styles needed by this element.
import { SharedStyles } from "./shared-styles";

class MyView1 extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <section>
        <h1>Emmet</h1>
      </section>
    `;
  }
}

window.customElements.define("my-view1", MyView1);

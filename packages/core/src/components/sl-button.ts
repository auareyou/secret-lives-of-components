import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * Stub sl-button — exists to validate the toolchain.
 * The real Button is built in Phase 6 (its own session, its own article).
 */
@customElement("sl-button")
export class SlButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      font-family: var(--sl-font-family, system-ui, sans-serif);
    }

    button {
      font: inherit;
      padding: var(--sl-spacing-sm, 0.5rem) var(--sl-spacing-lg, 1rem);
      background: var(--sl-color-action, #3f52f4);
      color: var(--sl-color-action-text, #fff);
      border: 0;
      border-radius: var(--sl-radius-base, 8px);
      cursor: pointer;
    }
  `;

  @property({ type: String })
  label = "Button";

  render() {
    return html`<button><slot>${this.label}</slot></button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sl-button": SlButton;
  }
}

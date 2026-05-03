import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('sl-button')
export class SlButton extends LitElement {
  static formAssociated = true;

  static shadowRootOptions: ShadowRootInit = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  static styles = css`
    :host {
      --sl-button-bg: var(--sl-color-action);
      --sl-button-bg-hover: var(--sl-color-action-hover);
      --sl-button-bg-active: var(--sl-color-action-active);
      --sl-button-text: var(--sl-color-action-text);
      --sl-button-border-color: transparent;
      --sl-button-border-width: 1px;
      --sl-button-radius: var(--sl-radius-base);
      --sl-button-padding-inline: var(--sl-spacing-lg);
      --sl-button-padding-block: var(--sl-spacing-sm);
      --sl-button-gap: var(--sl-spacing-sm);
      --sl-button-font-family: var(--sl-font-family);
      --sl-button-font-size: var(--sl-font-size-base);
      --sl-button-font-weight: var(--sl-font-weight-medium);
      --sl-button-line-height: var(--sl-line-height-tight);
      --sl-button-focus-ring-color: var(--sl-color-focus-ring);
      --sl-button-focus-ring-width: var(--sl-focus-ring-width);
      --sl-button-focus-ring-offset: var(--sl-focus-ring-offset);
      --sl-button-transition: var(--sl-transition-base);
      --sl-button-opacity-disabled: 0.5;
      --sl-button-spinner-size: 1em;
      --sl-button-icon-opacity: 0.8;

      display: inline-block;
    }

    :host([variant='secondary']) {
      --sl-button-bg: transparent;
      --sl-button-bg-hover: var(--sl-color-surface-muted);
      --sl-button-bg-active: var(--sl-color-border);
      --sl-button-text: var(--sl-color-text);
      --sl-button-border-color: var(--sl-color-border-strong);
    }

    :host([variant='danger']) {
      --sl-button-bg: var(--sl-color-danger);
      --sl-button-bg-hover: var(--sl-color-danger-hover);
      --sl-button-bg-active: var(--sl-color-danger-hover);
      --sl-button-text: var(--sl-color-action-text);
    }

    :host([size='sm']) {
      --sl-button-padding-inline: var(--sl-spacing-md);
      --sl-button-padding-block: var(--sl-spacing-xs);
      --sl-button-font-size: var(--sl-font-size-sm);
    }

    :host([size='lg']) {
      --sl-button-padding-inline: var(--sl-spacing-lg);
      --sl-button-padding-block: var(--sl-spacing-md);
      --sl-button-font-size: var(--sl-font-size-lg);
    }

    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--sl-button-gap);
      padding: var(--sl-button-padding-block) var(--sl-button-padding-inline);
      background: var(--sl-button-bg);
      color: var(--sl-button-text);
      border: var(--sl-button-border-width) solid var(--sl-button-border-color);
      border-radius: var(--sl-button-radius);
      font-family: var(--sl-button-font-family);
      font-size: var(--sl-button-font-size);
      font-weight: var(--sl-button-font-weight);
      line-height: var(--sl-button-line-height);
      cursor: pointer;
      transition: background-color var(--sl-button-transition),
        opacity var(--sl-button-transition),
        transform var(--sl-button-transition);
    }

    button:hover:not(:disabled) {
      background: var(--sl-button-bg-hover);
    }

    button:active:not(:disabled) {
      background: var(--sl-button-bg-active);
      transform: scale(0.98);
    }

    button:focus-visible {
      outline: var(--sl-button-focus-ring-width) solid var(--sl-button-focus-ring-color);
      outline-offset: var(--sl-button-focus-ring-offset);
    }

    button:disabled {
      opacity: var(--sl-button-opacity-disabled);
      cursor: not-allowed;
    }

    :host([loading]) button {
      cursor: wait;
      pointer-events: none;
    }

    :host([loading]) .label {
      opacity: 0.7;
    }

    :host([loading]) slot[name='prefix'] {
      display: none;
    }

    .label {
      display: inline-flex;
      align-items: center;
    }

    slot[name='prefix']::slotted(*),
    slot[name='suffix']::slotted(*) {
      display: flex;
      opacity: var(--sl-button-icon-opacity);
    }

    .spinner {
      display: inline-block;
      width: var(--sl-button-spinner-size);
      height: var(--sl-button-spinner-size);
      border: 2px solid currentColor;
      border-right-color: transparent;
      border-radius: 50%;
      animation: sl-spin 600ms linear infinite;
    }

    @keyframes sl-spin {
      to {
        transform: rotate(360deg);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      button {
        transition: none !important;
      }
      button:active:not(:disabled) {
        transform: none;
      }
      .spinner {
        animation-duration: 1.5s;
      }
    }
  `;

  private _internals: ElementInternals;

  @property({ reflect: true })
  variant: 'primary' | 'secondary' | 'danger' = 'primary';

  @property({ reflect: true })
  size: 'sm' | 'md' | 'lg' = 'md';

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean, reflect: true })
  loading = false;

  @property({ reflect: true })
  type: 'button' | 'submit' | 'reset' = 'button';

  @property()
  name = '';

  @property()
  value = '';

  @property()
  label = '';

  @state()
  private _hasSlottedContent = false;

  constructor() {
    super();
    this._internals = this.attachInternals();
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has('name') || changed.has('value')) {
      if (this.name) {
        this._internals.setFormValue(this.value);
      }
    }
  }

  formDisabledCallback(disabled: boolean) {
    this.disabled = disabled;
  }

  private _handleClick() {
    if (this.disabled || this.loading) return;
    if (this.type === 'submit') {
      this._internals.form?.requestSubmit();
    } else if (this.type === 'reset') {
      this._internals.form?.reset();
    }
  }

  private _handleSlotChange(e: Event) {
    const slot = e.target as HTMLSlotElement;
    this._hasSlottedContent = slot.assignedNodes({ flatten: true }).some(
      (node) => node.nodeType === Node.ELEMENT_NODE || node.textContent?.trim(),
    );
  }

  render() {
    return html`
      <button
        part="base"
        ?disabled=${this.disabled || this.loading}
        aria-disabled=${this.disabled || this.loading || nothing}
        aria-busy=${this.loading || nothing}
        aria-label=${!this._hasSlottedContent && this.label ? this.label : nothing}
        @click=${this._handleClick}
      >
        ${this.loading
          ? html`<span class="spinner" part="spinner" aria-hidden="true"></span>`
          : nothing}
        <slot name="prefix"></slot>
        <span class="label" part="label">
          <slot @slotchange=${this._handleSlotChange}>${this.label}</slot>
        </span>
        <slot name="suffix"></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sl-button': SlButton;
  }
}

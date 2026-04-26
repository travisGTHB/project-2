import { html, css } from 'lit';
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class ContactPage extends DDD {
  static get tag() { return 'contact-page'; }

  static get properties() {
    return {
      ...super.properties,
      section: { type: String },
    };
  }

  constructor() {
    super();
    this.section = 'directory';
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host { display: block; padding: var(--ddd-spacing-8); }
        h2 { color: #6a0dad; border-bottom: 2px solid #e9d5ff; padding-bottom: 8px; }
        p { color: #1a1a1a; font-size: 1rem; line-height: 1.7; }
      `
    ];
  }

  _renderSection() {
    switch (this.section) {
      case 'reach-out':
        return html`<h2>Reach Out</h2><p>Reach out form coming soon...</p>`;
      case 'socials':
        return html`<h2>Social Media</h2><p>Social media links coming soon...</p>`;
      default:
        return html`<h2>Staff Directory</h2><p>Staff directory coming soon...</p>`;
    }
  }

  render() {
    return html`${this._renderSection()}`;
  }
}
customElements.define('contact-page', ContactPage);
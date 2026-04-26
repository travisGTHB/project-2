import { html, css } from 'lit';
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class AboutPage extends DDD {
  static get tag() { return 'about-page'; }

  static get properties() {
    return {
      ...super.properties,
      section: { type: String },
    };
  }

  constructor() {
    super();
    this.section = 'mission';
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
      case 'partners':
        return html`<h2>Partners</h2><p>Partners content coming soon...</p>`;
      case 'values':
        return html`<h2>Core Values</h2><p>Core values content coming soon...</p>`;
      default:
        return html`<h2>Our Mission</h2><p>Mission content coming soon...</p>`;
    }
  }

  render() {
    return html`${this._renderSection()}`;
  }
}
customElements.define('about-page', AboutPage);
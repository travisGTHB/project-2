import { html, css } from 'lit';
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class HuntDetails extends DDD {
  static get tag() { return 'hunt-details'; }

  static get properties() {
    return {
      ...super.properties,
      location: { type: String },
      date: { type: String },
      time: { type: String },
    };
  }

  constructor() {
    super();
    this.location = '';
    this.date = '';
    this.time = '';
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host { display: block; padding: var(--ddd-spacing-4); }
        h3 { color: var(--ddd-theme-default-nittanyNavy); }
      `
    ];
  }

  render() {
    return html`
      <h3>Hunt Details</h3>
      <p>Location: ${this.location || 'TBD'}</p>
      <p>Date: ${this.date || 'TBD'}</p>
      <p>Time: ${this.time || 'TBD'}</p>
    `;
  }
}
customElements.define('hunt-details', HuntDetails);
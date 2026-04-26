import { html, css } from 'lit';
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class EggItem extends DDD {
  static get tag() { return 'egg-item'; }

  static get properties() {
    return {
      ...super.properties,
      label: { type: String },
      found: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.label = '';
    this.found = false;
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host { display: inline-block; }
        .egg { font-size: 2rem; cursor: pointer; opacity: 1; transition: opacity 0.3s; }
        :host([found]) .egg { opacity: 0.3; }
      `
    ];
  }

  render() {
    return html`<span class="egg" title="${this.label}">🥚</span>`;
  }
}
customElements.define('egg-item', EggItem);
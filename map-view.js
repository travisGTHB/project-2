import { html, css } from 'lit';
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class MapView extends DDD {
  static get tag() { return 'map-view'; }

  static get properties() {
    return {
      ...super.properties,
      lat: { type: Number },
      lng: { type: Number },
    };
  }

  constructor() {
    super();
    this.lat = 0;
    this.lng = 0;
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host { display: block; }
        .map-placeholder { background: #e0e0e0; height: 300px; display: flex; align-items: center; justify-content: center; border-radius: var(--ddd-radius-lg); font-size: 1.2rem; color: #555; }
      `
    ];
  }

  render() {
    return html`<div class="map-placeholder">Map coming soon (${this.lat}, ${this.lng})</div>`;
  }
}
customElements.define('map-view', MapView);
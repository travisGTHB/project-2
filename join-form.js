import { html, css } from 'lit';
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class JoinForm extends DDD {
  static get tag() { return 'join-form'; }

  static get properties() {
    return {
      ...super.properties,
      category: { type: String, reflect: true },
    };
  }

  constructor() {
    super();
    this.category = '';
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host { display: block; padding: var(--ddd-spacing-8); }
        h2 { color: var(--ddd-theme-default-nittanyNavy); }
        label { display: block; margin-bottom: var(--ddd-spacing-2); font-family: var(--ddd-font-primary); }
        input, select { width: 100%; padding: var(--ddd-spacing-2); margin-bottom: var(--ddd-spacing-4); border: 1px solid #ccc; border-radius: var(--ddd-radius-sm); box-sizing: border-box; }
        button { background: var(--ddd-theme-default-nittanyNavy); color: white; border: none; padding: var(--ddd-spacing-3) var(--ddd-spacing-6); border-radius: var(--ddd-radius-sm); cursor: pointer; font-size: 1rem; }
        button:hover { opacity: 0.85; }
      `
    ];
  }

  render() {
    return html`
      <h2>Join the Hunt</h2>
      <label>Name <input type="text" placeholder="Your name"></label>
      <label>Email <input type="email" placeholder="Your email"></label>
      <label>Category
        <select>
          <option value="peewee">Pee-wee</option>
          <option value="7-12">Ages 7-12</option>
          <option value="13-17">Ages 13-17</option>
          <option value="18plus">Adults 18+</option>
        </select>
      </label>
      <button>Register</button>
    `;
  }
}
customElements.define('join-form', JoinForm);
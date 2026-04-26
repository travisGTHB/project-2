import { html, css } from 'lit';
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import "./navbar-page.js";
import "./footer-section.js";
import "./calendar-page.js";
import "./about-page.js";
import "./contact-page.js";
import "./join-form.js";
import "./registration-form.js";

export class Project2 extends DDD {
  static get tag() { return 'project-2'; }

  static get properties() {
    return {
      ...super.properties,
      page: { type: String, reflect: true },
    };
  }

  constructor() {
    super();
    this.page = this._getPageFromSlug();
    window.addEventListener('popstate', () => {
      this.page = this._getPageFromSlug();
    });
  }

  _getPageFromSlug() {
    const path = window.location.pathname.replace(/^\//, '') || 'home';
    return path;
  }

  navigate(slug) {
    window.history.pushState({}, '', '/' + slug);
    this.page = slug || 'home';
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: flex;
          flex-direction: column;
          background-color: #faf5ff;
          min-height: 100vh;
        }
        .content-area {
          padding: var(--ddd-spacing-8);
          max-width: 1400px;
          width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
          flex: 1;
        }
      `
    ];
  }

  _renderPage() {
    switch (this.page) {
      case 'mission':
      case 'partners':
      case 'values':
        return html`<about-page .section=${this.page}></about-page>`;
      case 'registration/peewee':
      case 'registration/7-12':
      case 'registration/13-17':
      case 'registration/18plus':
        return html`<registration-form .category=${this.page.split('/')[1]}></registration-form>`;
      case 'directory':
      case 'reach-out':
      case 'socials':
        return html`<contact-page .section=${this.page}></contact-page>`;
      default:
        return html`<calendar-page></calendar-page>`;
    }
  }

  render() {
    return html`
      <navbar-page .navigate=${(slug) => this.navigate(slug)}></navbar-page>
      <div class="content-area">
        ${this._renderPage()}
      </div>
      <footer-section></footer-section>
    `;
  }
}
customElements.define(Project2.tag, Project2);
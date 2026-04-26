import { html, css } from 'lit';
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class CalendarPage extends DDD {
  static get tag() { return 'calendar-page'; }

  static get properties() {
    return {
      ...super.properties,
      month: { type: Number },
      year: { type: Number },
    };
  }

  constructor() {
    super();
    this.month = 3;
    this.year = 2026;
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host { display: flex; gap: var(--ddd-spacing-5); align-items: flex-start; }

        .calendar-container {
          flex: 5;
          background: white;
          border: 2px solid #c084fc;
          border-radius: var(--ddd-radius-lg);
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(106,13,173,0.12);
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--ddd-spacing-4);
          background: #6a0dad;
          color: white;
        }
        .header h2 { margin: 0; font-size: 1.4rem; letter-spacing: 1px; }
        .header button {
          background: rgba(255,255,255,0.2);
          border: 2px solid rgba(255,255,255,0.5);
          color: white;
          font-size: 1rem;
          cursor: pointer;
          border-radius: 6px;
          padding: 4px 10px;
          font-weight: bold;
        }
        .header button:hover { background: rgba(255,255,255,0.35); }

        .day-labels {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          background: #f3e8ff;
          border-bottom: 2px solid #c084fc;
        }
        .day-label {
          text-align: center;
          padding: 6px 0;
          font-weight: bold;
          font-size: 0.8rem;
          color: #6a0dad;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          background-color: #e9d5ff;
          gap: 1px;
        }
        .day {
          background: white;
          min-height: 110px;
          padding: var(--ddd-spacing-2);
          position: relative;
        }
        .day.outside { background: #faf5ff; }

        .date-circle {
          width: 28px;
          height: 28px;
          background-color: #6a0dad;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: bold;
          color: white;
          position: absolute;
          top: 8px;
          right: 8px;
        }

        .sidebar {
          flex: 1;
          background: white;
          padding: var(--ddd-spacing-5);
          border: 2px solid #c084fc;
          border-radius: var(--ddd-radius-lg);
          box-shadow: 0 4px 16px rgba(106,13,173,0.12);
        }
        .sidebar h3 {
          margin: 0 0 16px 0;
          color: #6a0dad;
          font-size: 1.1rem;
          border-bottom: 2px solid #e9d5ff;
          padding-bottom: 8px;
        }
        .key-item {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
          font-size: 0.95rem;
          color: #1a1a1a;
          font-weight: 500;
        }
        .chip {
          width: 24px;
          height: 16px;
          border-radius: 4px;
          border: 1px solid rgba(0,0,0,0.15);
          flex-shrink: 0;
        }
        .chip.peewee  { background: #fde68a; }
        .chip.youth   { background: #86efac; }
        .chip.teen    { background: #7dd3fc; }
        .chip.adult   { background: #f9a8d4; }
      `
    ];
  }

  _monthName() {
    return new Date(this.year, this.month).toLocaleString('default', { month: 'long' });
  }

  _prevMonth() {
    if (this.month === 0) { this.month = 11; this.year -= 1; }
    else { this.month -= 1; }
  }

  _nextMonth() {
    if (this.month === 11) { this.month = 0; this.year += 1; }
    else { this.month += 1; }
  }

  _daysInMonth() {
    return new Date(this.year, this.month + 1, 0).getDate();
  }

  _startDay() {
    return new Date(this.year, this.month, 1).getDay();
  }

  render() {
    const totalDays = this._daysInMonth();
    const startDay = this._startDay();
    const cells = Array(startDay + totalDays).fill('').map((_, i) => {
      const day = i - startDay + 1;
      const valid = day > 0 && day <= totalDays;
      return html`
        <div class="day ${valid ? '' : 'outside'}">
          ${valid ? html`<div class="date-circle">${day}</div>` : ''}
        </div>`;
    });

    return html`
      <div class="calendar-container">
        <div class="header">
          <button @click=${this._prevMonth}>← Prev</button>
          <h2>${this._monthName()} ${this.year}</h2>
          <button @click=${this._nextMonth}>Next →</button>
        </div>
        <div class="day-labels">
          ${['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => html`<div class="day-label">${d}</div>`)}
        </div>
        <div class="grid">${cells}</div>
      </div>
      <div class="sidebar">
        <h3>Key</h3>
        <div class="key-item"><span class="chip peewee"></span> Pee-wee</div>
        <div class="key-item"><span class="chip youth"></span> Ages 7-12</div>
        <div class="key-item"><span class="chip teen"></span> Ages 13-17</div>
        <div class="key-item"><span class="chip adult"></span> Adults 18+</div>
      </div>
    `;
  }
}
customElements.define(CalendarPage.tag, CalendarPage);
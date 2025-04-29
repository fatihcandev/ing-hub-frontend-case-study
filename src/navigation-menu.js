import {LitElement, html, css} from 'lit';
import {msg, str, updateWhenLocaleChanges} from '@lit/localize';
import {StateManager} from './state-manager.js';
import {getLocale, setLocale} from './localization.js';
import {allLocales} from './locale-codes.js';

const localeNames = {
  en: 'English',
  tr: 'Türkçe',
};

class NavigationMenu extends LitElement {
  static properties = {
    language: {type: String},
  };

  constructor() {
    super();
    this.employees = StateManager.getState().employees;
    const selectedLanguage = StateManager.getState().language;
    this.language = selectedLanguage;
    setLocale(selectedLanguage);
    updateWhenLocaleChanges(this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.unsubscribe();
  }

  _stateChanged() {
    const state = StateManager.getState();
    this.employees = state.employees;
    if (this.language !== state.language) {
      this.language = state.language;
      setLocale(this.language);
    }
  }

  _handleLanguageChange(e) {
    const newLocale = e.target.value;
    StateManager.setLanguage(newLocale);
    setLocale(newLocale);
  }

  static styles = css`
    nav {
      padding: 10px;
      display: flex;
      justify-content: flex-end;
      background-color: white;
    }
    nav a {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-right: 20px;
      text-decoration: none;
      font-size: 12px;
      color: var(--primary-color);
    }
    nav a:hover {
      text-decoration: underline;
    }
    @media (max-width: 768px) {
      nav {
        padding: 8px;
      }
      nav a {
        font-size: 16px;
        margin-right: 10px;
      }
    }
  `;

  render() {
    console.log({language: this.language});
    return html`
      <nav>
        <a href="/">${msg(str`Employee List`)}</a>
        <a href="/add">
          <ion-icon name="add" style="font-size:16px;"></ion-icon>
          ${msg(str`Add Employee`)}
        </a>
        <select @change=${this._handleLanguageChange} .value=${this.language}>
          ${allLocales.map(
            (locale) => html`<option
              value=${locale}
              ?selected=${locale === getLocale()}
            >
              ${localeNames[locale]}
            </option>`
          )}
        </select>
      </nav>
    `;
  }
}

customElements.define('navigation-menu', NavigationMenu);

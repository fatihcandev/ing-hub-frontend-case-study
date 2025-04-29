import {LitElement, html, css} from 'lit';
import {Router} from '@vaadin/router';
import './navigation-menu.js';
import './employee-list.js';
import './employee-form.js';

class EmployeeApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      min-height: 100vh;
    }
  `;

  firstUpdated() {
    super.firstUpdated();
    const router = new Router(this.shadowRoot.querySelector('#outlet'));
    router.setRoutes([
      {path: '/', component: 'employee-list'},
      {path: '/add', component: 'employee-form'},
      {path: '/edit/:id', component: 'employee-form'},
      {path: '(.*)', redirect: '/'},
    ]);
  }

  render() {
    return html`
      <navigation-menu></navigation-menu>
      <div id="outlet"></div>
    `;
  }
}

customElements.define('employee-app', EmployeeApp);

import {LitElement, html, css} from 'lit';
import {StateManager} from './state-manager.js';
import {msg, str, updateWhenLocaleChanges} from '@lit/localize';

class EmployeeList extends LitElement {
  static properties = {
    employees: {type: Array},
    viewMode: {type: String},
    searchQuery: {type: String},
    currentPage: {type: Number},
    itemsPerPage: {type: Number},
    showConfirmDialog: {type: Boolean},
    employeeToDelete: {type: Object},
    selectedEmployees: {type: Array},
  };

  static styles = css`
    button {
      background: none;
      border: none;
      cursor: pointer;
    }
    .container {
      display: flex;
      flex-direction: column;
      padding: 16px 32px;
      border-radius: 8px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    .header h2 {
      color: var(--primary-color);
      font-size: 20px;
      margin: 0;
    }
    .view-toggle {
      display: flex;
    }
    .view-toggle button {
      padding: 5px;
      color: #666;
    }
    .view-toggle button.active {
      color: var(--primary-color);
    }
    .view-toggle img {
      width: 24px;
      height: 24px;
      opacity: 0.5;
    }
    .view-toggle button.active img {
      opacity: 1;
    }
    .controls {
      display: flex;
      margin-bottom: 20px;
    }
    .controls input {
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
      width: 200px;
    }
    .table-container {
      overflow-x: auto;
      background-color: white;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      background-color: white;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    th,
    td {
      padding: 12px;
      text-align: left;
      font-size: 14px;
    }
    th {
      background-color: #f9f9f9;
      color: var(--primary-color);
      font-weight: bold;
      white-space: pre;
      width: fit-content;
    }
    td {
      border-bottom: 1px solid #eee;
    }
    .employee-actions {
      display: flex;
      align-items: center;
    }
    .employee-actions button,
    .employee-actions a {
      color: var(--primary-color);
    }
    .list-view {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 16px;
    }
    .employee-card {
      background-color: white;
      border: 1px solid #eee;
      padding: 15px;
      border-radius: 4px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      position: relative;
    }
    .employee-card .employee-actions {
      position: absolute;
      top: 8px;
      right: 8px;
    }
    .employee-card p {
      margin: 5px 0;
      font-size: 14px;
    }
    .employee-card .actions {
      margin-top: 10px;
    }
    .pagination {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
    .pagination button {
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
    }
    .pagination button:not(.current):hover {
      background-color: #eee;
    }
    .pagination button:disabled {
      background-color: #eee;
      cursor: not-allowed;
    }
    .pagination .current {
      background-color: var(--primary-color);
      color: white;
    }
    .dialog-backdrop {
      position: fixed;
      inset: 0;
      background-color: rgb(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .confirm-dialog {
      background-color: white;
      padding: 20px;
      border: 1px solid #ddd;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      z-index: 1000;
      border-radius: 8px;
      width: 300px;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .confirm-dialog h6 {
      font-size: 20px;
      margin: 0;
      color: var(--primary-color);
    }
    .confirm-dialog p {
      font-size: 14px;
      margin: 0;
      color: #666;
    }
    .confirm-dialog .actions {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .confirm-dialog button {
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
    }
    .confirm-dialog .proceed {
      background-color: var(--primary-color);
      color: white;
    }
    .confirm-dialog .cancel {
      background-color: #fff;
      border: 1px solid #ddd;
      color: #666;
    }
    .confirm-dialog .close {
      position: absolute;
      top: 0;
      right: 0px;
      font-size: 32px;
      font-weight: normal;
      color: var(--primary-color);
    }
    tbody:has(.empty-state-container) {
      position: relative;
      height: 50px;
    }
    .empty-state-container {
      padding: 20px;
      text-align: center;
      position: absolute;
      inset: 0;
    }
    @media (max-width: 768px) {
      .container {
        padding: 16px;
      }
      .view-toggle {
        align-self: flex-end;
      }
      .controls {
        flex-direction: column;
      }
      .controls input {
        width: unset;
      }
      table {
        font-size: 12px;
      }
      th,
      td {
        padding: 8px;
      }
      .employee-card {
        width: 100%;
      }
      .pagination button {
        padding: 6px 10px;
        font-size: 12px;
      }
      .confirm-dialog {
        width: 90%;
      }
    }
  `;

  constructor() {
    super();
    this.employees = StateManager.getState().employees;
    this.viewMode = 'table';
    this.searchQuery = '';
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.showConfirmDialog = false;
    this.employeeToDelete = null;
    StateManager.subscribe(() => {
      this.employees = StateManager.getState().employees;
      this.requestUpdate();
    });
    updateWhenLocaleChanges(this);
  }

  handleSearch(e) {
    this.searchQuery = e.target.value.toLowerCase();
    this.currentPage = 1;
  }

  setViewMode(mode) {
    this.viewMode = mode;
  }

  openConfirmDialog(employee) {
    this.employeeToDelete = employee;
    this.showConfirmDialog = true;
  }

  closeConfirmDialog() {
    this.showConfirmDialog = false;
    this.employeeToDelete = null;
  }

  handleDelete() {
    if (this.employeeToDelete) {
      StateManager.deleteEmployee(this.employeeToDelete.id);
      this.closeConfirmDialog();
    }
  }

  get filteredEmployees() {
    return this.employees.filter(
      (emp) =>
        emp.firstName.toLowerCase().includes(this.searchQuery) ||
        emp.lastName.toLowerCase().includes(this.searchQuery) ||
        emp.email.toLowerCase().includes(this.searchQuery)
    );
  }

  get paginatedEmployees() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredEmployees.slice(start, start + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.filteredEmployees.length / this.itemsPerPage);
  }

  render() {
    return html`
      <div class="container">
        <div class="header">
          <h2>${msg(str`Employee List`)}</h2>
          <div class="view-toggle">
            <button
              class=${this.viewMode === 'table' ? 'active' : ''}
              @click=${() => this.setViewMode('table')}
            >
              <ion-icon name="menu" style="font-size:24px;"></ion-icon>
            </button>
            <button
              class=${this.viewMode === 'list' ? 'active' : ''}
              @click=${() => this.setViewMode('list')}
            >
              <ion-icon name="grid" style="font-size:16px;"></ion-icon>
            </button>
          </div>
        </div>
        <div class="controls">
          <input
            type="text"
            placeholder=${msg(str`Search`)}
            @input=${this.handleSearch}
          />
        </div>
        ${this.viewMode === 'table' ? this.renderTable() : this.renderList()}
        <div class="pagination">
          <button
            @click=${() => this.currentPage--}
            ?disabled=${this.currentPage === 1}
            class="pagination-button"
          >
            <ion-icon name="chevron-back-outline"></ion-icon>
          </button>
          ${Array.from({length: this.totalPages}, (_, i) => i + 1).map(
            (page) => html`
              <button
                class=${page === this.currentPage ? 'current' : ''}
                @click=${() => (this.currentPage = page)}
              >
                ${page}
              </button>
            `
          )}
          <button
            @click=${() => this.currentPage++}
            ?disabled=${this.currentPage === this.totalPages}
          >
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </button>
        </div>
        ${this.showConfirmDialog
          ? html`
              <div class="dialog-backdrop">
                <div class="confirm-dialog">
                  <button class="close" @click=${this.closeConfirmDialog}>
                    ×
                  </button>
                  <h6>${msg(str`Are you sure?`)}</h6>
                  <p>
                    ${msg(str`Selected Employee record of`)}
                    ${this.employeeToDelete.firstName}
                    ${this.employeeToDelete.lastName}
                    ${msg(str`will be deleted`)}
                  </p>
                  <div class="actions">
                    <button class="proceed" @click=${this.handleDelete}>
                      ${msg(str`Proceed`)}
                    </button>
                    <button class="cancel" @click=${this.closeConfirmDialog}>
                      ${msg(str`Cancel`)}
                    </button>
                  </div>
                </div>
              </div>
            `
          : ''}
      </div>
    `;
  }

  renderActions(emp) {
    return html`
      <div class="employee-actions">
        <a href=${`/edit/${emp.id}`}>
          <ion-icon name="create-outline" style="font-size:16px;"></ion-icon>
        </a>
        <button @click=${() => this.openConfirmDialog(emp)}>
          <ion-icon name="trash" style="font-size:16px;"></ion-icon>
        </button>
      </div>
    `;
  }

  renderTable() {
    return html`
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>${msg(str`First Name`)}</th>
              <th>${msg(str`Last Name`)}</th>
              <th>${msg(str`Date of Employment`)}</th>
              <th>${msg(str`Date of Birth`)}</th>
              <th>${msg(str`Phone`)}</th>
              <th>${msg(str`Email`)}</th>
              <th>${msg(str`Department`)}</th>
              <th>${msg(str`Position`)}</th>
              <th>${msg(str`Actions`)}</th>
            </tr>
          </thead>
          <tbody>
            ${this.paginatedEmployees.length > 0
              ? this.paginatedEmployees.map(
                  (emp) => html`
                    <tr>
                      <td>${emp.firstName}</td>
                      <td>${emp.lastName}</td>
                      <td>${emp.dateOfEmployment}</td>
                      <td>${emp.dateOfBirth}</td>
                      <td>${emp.phoneNumber}</td>
                      <td>${emp.email}</td>
                      <td>${emp.department}</td>
                      <td>${emp.position}</td>
                      <td class="actions">${this.renderActions(emp)}</td>
                    </tr>
                  `
                )
              : html`
                  <div class="empty-state-container">
                    There are no employees...
                  </div>
                `}
          </tbody>
        </table>
      </div>
    `;
  }

  renderList() {
    return html`
      <div class="list-view">
        ${this.paginatedEmployees.map(
          (emp) => html`
            <div class="employee-card">
              <p><strong>${msg(str`First Name`)}:</strong> ${emp.firstName}</p>
              <p><strong>${msg(str`Last Name`)}:</strong> ${emp.lastName}</p>
              <p>
                <strong>${msg(str`Date of Employment`)}:</strong>
                ${emp.dateOfEmployment}
              </p>
              <p>
                <strong>${msg(str`Date of Birth`)}:</strong> ${emp.dateOfBirth}
              </p>
              <p><strong>${msg(str`Phone`)}:</strong> ${emp.phoneNumber}</p>
              <p><strong>${msg(str`Email`)}:</strong> ${emp.email}</p>
              <p><strong>${msg(str`Department`)}:</strong> ${emp.department}</p>
              <p><strong>${msg(str`Position`)}:</strong> ${emp.position}</p>
              ${this.renderActions(emp)}
            </div>
          `
        )}
      </div>
    `;
  }
}

customElements.define('employee-list', EmployeeList);

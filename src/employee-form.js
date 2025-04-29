import {LitElement, html, css} from 'lit';
import {StateManager} from './state-manager.js';
import {msg, str, updateWhenLocaleChanges} from '@lit/localize';

class EmployeeForm extends LitElement {
  static properties = {
    employee: {type: Object},
    id: {type: String},
    errors: {type: Object},
    showConfirmDialog: {type: Boolean},
  };

  static styles = css`
    button {
      background: none;
      border: none;
      cursor: pointer;
    }
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 16px;
    }
    .form-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 600px;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 5px;
      background-color: white;
    }
    .form-container h2 {
      color: var(--primary-color);
      margin: 0;
      margin-bottom: 16px;
    }
    form {
      display: flex;
      flex-direction: column;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
    }
    label {
      display: block;
      margin-bottom: 5px;
    }
    input,
    select {
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    .error {
      color: red;
      font-size: 12px;
      margin-top: 4px;
    }
    .submit-button {
      padding: 10px 20px;
      background-color: var(--primary-color);
      align-self: flex-start;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
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
    @media (max-width: 768px) {
      .container {
        align-items: flex-start;
      }
      .form-container {
        padding: 0;
        margin-top: 16px;
        border: none;
        background-color: transparent;
      }
      input,
      select {
        font-size: 14px;
      }
      .confirm-dialog {
        width: 90%;
      }
    }
  `;

  constructor() {
    super();
    updateWhenLocaleChanges(this);
    this.employee = {
      firstName: '',
      lastName: '',
      dateOfEmployment: '',
      dateOfBirth: '',
      phoneNumber: '',
      email: '',
      department: '',
      position: '',
    };
    this.errors = {};
    this.showConfirmDialog = false;
  }

  firstUpdated() {
    super.firstUpdated();
    if (this.id) {
      this.loadAndPopulateEmployee(this.id);
    } else if (this.location?.params?.id) {
      const paramId = this.location.params.id;
      this.id = paramId;
      this.loadAndPopulateEmployee(paramId);
    }
  }

  loadAndPopulateEmployee(id) {
    const employee = StateManager.getState().employees.find(
      (emp) => emp.id === id
    );
    if (employee) {
      this.employee = {...employee};
    }
  }

  validateForm() {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{10,15}$/;
    const nameRegex = /^[A-Za-zÇçĞğİıÖöŞşÜü\s]{2,50}$/;

    if (!nameRegex.test(this.employee.firstName))
      errors.firstName = 'First name must be 2-50 letters';
    if (!nameRegex.test(this.employee.lastName))
      errors.lastName = 'Last name must be 2-50 letters';
    if (!emailRegex.test(this.employee.email))
      errors.email = 'Invalid email format';
    else if (StateManager.isEmailTaken(this.employee.email, this.id))
      errors.email = 'Email already exists';
    if (!phoneRegex.test(this.employee.phoneNumber))
      errors.phoneNumber = 'Invalid phone number';
    if (!this.employee.dateOfBirth)
      errors.dateOfBirth = 'Date of birth is required';
    if (!this.employee.dateOfEmployment)
      errors.dateOfEmployment = 'Date of employment is required';
    if (!this.employee.department) errors.department = 'Department is required';
    if (!this.employee.position) errors.position = 'Position is required';

    this.errors = errors;
    return Object.keys(errors).length === 0;
  }
  closeConfirmDialog() {
    this.showConfirmDialog = false;
  }

  handleUpdate() {
    if (this.validateForm()) {
      if (this.id) {
        StateManager.updateEmployee(this.id, this.employee);
      } else {
        StateManager.addEmployee(this.employee);
      }
      window.location.href = '/';
    } else {
      this.closeConfirmDialog();
    }
  }

  openConfirmDialog() {
    if (this.validateForm()) {
      this.showConfirmDialog = true;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.validateForm()) {
      this.openConfirmDialog();
    }
    this.requestUpdate(); // Force update to render errors
  }

  handleInput(e, field) {
    this.employee = {...this.employee, [field]: e.target.value};
    // Clear the error for this field when the user starts typing
    if (this.errors[field]) {
      const newErrors = {...this.errors};
      delete newErrors[field];
      this.errors = newErrors;
    }
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="container">
        <div class="form-container">
          <h2>${this.id ? msg(str`Edit Employee`) : msg(str`Add Employee`)}</h2>
          <form @submit=${this.handleSubmit}>
            <div class="form-group">
              <label>${msg(str`First Name`)}</label>
              <input
                type="text"
                .value=${this.employee.firstName}
                @input=${(e) => this.handleInput(e, 'firstName')}
              />
              ${this.errors.firstName
                ? html`<div class="error">${this.errors.firstName}</div>`
                : ''}
            </div>
            <div class="form-group">
              <label>${msg(str`Last Name`)}</label>
              <input
                type="text"
                .value=${this.employee.lastName}
                @input=${(e) => this.handleInput(e, 'lastName')}
              />
              ${this.errors.lastName
                ? html`<div class="error">${this.errors.lastName}</div>`
                : ''}
            </div>
            <div class="form-group">
              <label>${msg(str`Date of Birth`)}</label>
              <input
                type="date"
                .value=${this.employee.dateOfBirth}
                @input=${(e) => this.handleInput(e, 'dateOfBirth')}
              />
              ${this.errors.dateOfBirth
                ? html`<div class="error">${this.errors.dateOfBirth}</div>`
                : ''}
            </div>
            <div class="form-group">
              <label>${msg(str`Date of Employment`)}</label>
              <input
                type="date"
                .value=${this.employee.dateOfEmployment}
                @input=${(e) => this.handleInput(e, 'dateOfEmployment')}
              />
              ${this.errors.dateOfEmployment
                ? html`<div class="error">${this.errors.dateOfEmployment}</div>`
                : ''}
            </div>
            <div class="form-group">
              <label>${msg(str`Phone`)}</label>
              <input
                type="text"
                .value=${this.employee.phoneNumber}
                @input=${(e) => this.handleInput(e, 'phoneNumber')}
              />
              ${this.errors.phoneNumber
                ? html`<div class="error">${this.errors.phoneNumber}</div>`
                : ''}
            </div>
            <div class="form-group">
              <label>${msg(str`Email`)}</label>
              <input
                type="email"
                .value=${this.employee.email}
                @input=${(e) => this.handleInput(e, 'email')}
              />
              ${this.errors.email
                ? html`<div class="error">${this.errors.email}</div>`
                : ''}
            </div>
            <div class="form-group">
              <label>${msg(str`Department`)}</label>
              <select
                @change=${(e) => this.handleInput(e, 'department')}
                .value=${this.employee.department || ''}
              >
                <option value="">${msg(str`Select Department`)}</option>
                <option
                  value="Analytics"
                  ?selected=${this.employee.department === 'Analytics'}
                >
                  ${msg(str`Analytics`)}
                </option>
                <option
                  value="Tech"
                  ?selected=${this.employee.department === 'Tech'}
                >
                  ${msg(str`Tech`)}
                </option>
              </select>
              ${this.errors.department
                ? html`<div class="error">${this.errors.department}</div>`
                : ''}
            </div>
            <div class="form-group">
              <label>${msg(str`Position`)}</label>
              <select
                @change=${(e) => this.handleInput(e, 'position')}
                .value=${this.employee.position || ''}
              >
                <option value="">${msg(str`Select Position`)}</option>
                <option
                  value="Junior"
                  ?selected=${this.employee.position === 'Junior'}
                >
                  ${msg(str`Junior`)}
                </option>
                <option
                  value="Medior"
                  ?selected=${this.employee.position === 'Medior'}
                >
                  ${msg(str`Medior`)}
                </option>
                <option
                  value="Senior"
                  ?selected=${this.employee.position === 'Senior'}
                >
                  ${msg(str`Senior`)}
                </option>
              </select>
              ${this.errors.position
                ? html`<div class="error">${this.errors.position}</div>`
                : ''}
            </div>
            <button type="submit" class="submit-button">
              ${this.id ? msg(str`Update`) : msg(str`Add`)}
            </button>
          </form>
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
                    ${this.employee.firstName} ${this.employee.lastName}
                    ${this.id
                      ? msg(str`will be updated`)
                      : msg(str`will be added`)}
                  </p>
                  <div class="actions">
                    <button class="proceed" @click=${this.handleUpdate}>
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
}

customElements.define('employee-form', EmployeeForm);

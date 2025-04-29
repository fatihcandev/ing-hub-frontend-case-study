import {html} from 'lit';
import {fixture, expect} from '@open-wc/testing';
import '../src/employee-form.js';
import {StateManager} from '../src/state-manager.js';
import Sinon from 'sinon';

describe('EmployeeForm', () => {
  let element;
  let sandbox;

  beforeEach(async () => {
    sandbox = Sinon.createSandbox();
    localStorage.clear();
    StateManager.state = {
      employees: [
        {
          id: '1',
          firstName: 'John',
          lastName: 'Doe',
          dateOfBirth: '1990-01-01',
          dateOfEmployment: '2020-01-01',
          phoneNumber: '+1234567890',
          email: 'john.doe@example.com',
          department: 'Tech',
          position: 'Senior',
        },
      ],
    };
    element = await fixture(html`<employee-form></employee-form>`);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('renders form fields in add mode', async () => {
    const inputs = element.shadowRoot.querySelectorAll('input');
    const selects = element.shadowRoot.querySelectorAll('select');
    expect(inputs.length).to.equal(6);
    expect(selects.length).to.equal(2);
    expect(element.shadowRoot.querySelector('h2').textContent).to.equal(
      'Add Employee'
    );
  });

  it('renders form fields in edit mode', async () => {
    element = await fixture(html`<employee-form .id=${'1'}></employee-form>`);
    await element.updateComplete;
    const inputs = element.shadowRoot.querySelectorAll('input');
    const selects = element.shadowRoot.querySelectorAll('select');
    expect(inputs.length).to.equal(6);
    expect(selects.length).to.equal(2);
    expect(element.shadowRoot.querySelector('h2').textContent).to.equal(
      'Edit Employee'
    );
    expect(inputs[0].value).to.equal('John');
    expect(inputs[1].value).to.equal('Doe');
    expect(inputs[2].value).to.equal('1990-01-01');
    expect(inputs[3].value).to.equal('2020-01-01');
    expect(inputs[4].value).to.equal('+1234567890');
    expect(inputs[5].value).to.equal('john.doe@example.com');
    expect(selects[0].value).to.equal('Tech');
    expect(selects[1].value).to.equal('Senior');
  });

  it('validates form inputs on submission', async () => {
    const form = element.shadowRoot.querySelector('form');
    form.dispatchEvent(new Event('submit', {cancelable: true}));
    await element.updateComplete;
    const errors = element.shadowRoot.querySelectorAll('.error');
    expect(errors.length).to.equal(8);
    expect(errors[0].textContent).to.equal('First name must be 2-50 letters');
    expect(errors[1].textContent).to.equal('Last name must be 2-50 letters');
    expect(errors[2].textContent).to.equal('Date of birth is required');
    expect(errors[3].textContent).to.equal('Date of employment is required');
    expect(errors[4].textContent).to.equal('Invalid phone number');
    expect(errors[5].textContent).to.equal('Invalid email format');
    expect(errors[6].textContent).to.equal('Department is required');
    expect(errors[7].textContent).to.equal('Position is required');
  });

  it('shows email uniqueness validation error', async () => {
    element.employee = {
      firstName: 'Jane',
      lastName: 'Smith',
      dateOfBirth: '1992-01-01',
      dateOfEmployment: '2021-01-01',
      phoneNumber: '+0987654321',
      email: 'john.doe@example.com',
      department: 'Analytics',
      position: 'Junior',
    };
    const form = element.shadowRoot.querySelector('form');
    form.dispatchEvent(new Event('submit', {cancelable: true}));
    await element.updateComplete;
    const emailError = element.shadowRoot.querySelector('.error');
    expect(emailError).to.exist;
    expect(emailError.textContent).to.equal('Email already exists');
  });

  it('submits valid form in add mode and persists to localStorage', async () => {
    element.employee = {
      firstName: 'Jane',
      lastName: 'Smith',
      dateOfBirth: '1992-01-01',
      dateOfEmployment: '2021-01-01',
      phoneNumber: '+0987654321',
      email: 'jane.smith@example.com',
      department: 'Analytics',
      position: 'Junior',
    };

    const form = element.shadowRoot.querySelector('form');
    form.dispatchEvent(new Event('submit', {cancelable: true}));
    await element.updateComplete;

    const proceedButton = element.shadowRoot.querySelector(
      '.confirm-dialog .proceed'
    );
    proceedButton.click();
    await element.updateComplete;

    expect(StateManager.getState().employees.length).to.equal(2);
    const savedState = JSON.parse(
      localStorage.getItem('employeeManagementState')
    );
    expect(savedState.employees.length).to.equal(2);
    expect(savedState.employees[1].firstName).to.equal('Jane');
    expect(savedState.employees[1].email).to.equal('jane.smith@example.com');
  });

  it('submits valid form in edit mode and persists to localStorage', async () => {
    element = await fixture(html`<employee-form .id=${'1'}></employee-form>`);
    await element.updateComplete;
    element.employee = {
      ...element.employee,
      firstName: 'Johnathan',
      email: 'johnathan.doe@example.com',
    };

    const form = element.shadowRoot.querySelector('form');
    form.dispatchEvent(new Event('submit', {cancelable: true}));
    await element.updateComplete;

    const proceedButton = element.shadowRoot.querySelector(
      '.confirm-dialog .proceed'
    );
    proceedButton.click();
    await element.updateComplete;

    expect(StateManager.getState().employees[0].firstName).to.equal(
      'Johnathan'
    );
    expect(StateManager.getState().employees[0].email).to.equal(
      'johnathan.doe@example.com'
    );
    const savedState = JSON.parse(
      localStorage.getItem('employeeManagementState')
    );
    expect(savedState.employees[0].firstName).to.equal('Johnathan');
    expect(savedState.employees[0].email).to.equal('johnathan.doe@example.com');
  });
});

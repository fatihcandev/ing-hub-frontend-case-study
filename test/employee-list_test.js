import {html} from 'lit';
import {fixture, expect} from '@open-wc/testing';
import '../src/employee-list.js';
import {StateManager} from '../src/state-manager.js';

describe('EmployeeList', () => {
  let element;

  beforeEach(async () => {
    // Clear localStorage before each test to ensure a clean state
    localStorage.clear();

    // Set up initial state
    StateManager.state = {
      employees: [
        {
          id: '1',
          firstName: 'John',
          lastName: 'Doe',
          dateOfEmployment: '2020-01-01',
          dateOfBirth: '1990-01-01',
          phoneNumber: '+1234567890',
          email: 'john.doe@example.com',
          department: 'Tech',
          position: 'Senior',
        },
        {
          id: '2',
          firstName: 'Jane',
          lastName: 'Smith',
          dateOfEmployment: '2021-01-01',
          dateOfBirth: '1992-01-01',
          phoneNumber: '+0987654321',
          email: 'jane.smith@example.com',
          department: 'Analytics',
          position: 'Junior',
        },
      ],
    };
    element = await fixture(html`<employee-list></employee-list>`);
  });

  it('renders the view mode toggle buttons and search bar', async () => {
    const toggleButtons = element.shadowRoot.querySelectorAll(
      '.view-toggle button'
    );
    const input = element.shadowRoot.querySelector('input');
    expect(toggleButtons.length).to.equal(2); // Table and List buttons
    expect(
      toggleButtons[0].querySelector('ion-icon').getAttribute('name')
    ).to.equal('menu');
    expect(
      toggleButtons[1].querySelector('ion-icon').getAttribute('name')
    ).to.equal('grid');
    expect(input).to.exist;
    expect(input.placeholder).to.equal('Search');
  });

  it('renders a table by default', async () => {
    const table = element.shadowRoot.querySelector('table');
    expect(table).to.exist;
    const rows = element.shadowRoot.querySelectorAll('tbody tr');
    expect(rows.length).to.equal(2); // Should render both employees
  });

  it('switches to list view when list icon is clicked', async () => {
    const listButton = element.shadowRoot.querySelector(
      '.view-toggle button:nth-child(2)'
    );
    listButton.click();
    await element.updateComplete;
    const listView = element.shadowRoot.querySelector('.list-view');
    expect(listView).to.exist;
    const cards = element.shadowRoot.querySelectorAll('.employee-card');
    expect(cards.length).to.equal(2); // Should render both employees as cards
  });

  it('switches back to table view when table icon is clicked', async () => {
    // First switch to list view
    const listButton = element.shadowRoot.querySelector(
      '.view-toggle button:nth-child(2)'
    );
    listButton.click();
    await element.updateComplete;
    // Then switch back to table view
    const tableButton = element.shadowRoot.querySelector(
      '.view-toggle button:nth-child(1)'
    );
    tableButton.click();
    await element.updateComplete;
    const table = element.shadowRoot.querySelector('table');
    expect(table).to.exist;
    const rows = element.shadowRoot.querySelectorAll('tbody tr');
    expect(rows.length).to.equal(2); // Should render both employees
  });

  it('filters employees based on search by name', async () => {
    const input = element.shadowRoot.querySelector('input');
    input.value = 'John';
    input.dispatchEvent(new Event('input'));
    await element.updateComplete;
    const rows = element.shadowRoot.querySelectorAll('tbody tr');
    expect(rows.length).to.equal(1); // Should only show John's record
    const firstRow = rows[0];
    expect(firstRow.querySelector('td:nth-child(1)').textContent).to.equal(
      'John'
    );
  });

  it('filters employees based on search by email', async () => {
    const input = element.shadowRoot.querySelector('input');
    input.value = 'jane.smith';
    input.dispatchEvent(new Event('input'));
    await element.updateComplete;
    const rows = element.shadowRoot.querySelectorAll('tbody tr');
    expect(rows.length).to.equal(1); // Should only show Jane's record
    const firstRow = rows[0];
    expect(firstRow.querySelector('td:nth-child(6)').textContent).to.equal(
      'jane.smith@example.com'
    );
  });

  it('paginates employees', async () => {
    element.itemsPerPage = 1;
    await element.updateComplete;
    const rows = element.shadowRoot.querySelectorAll('tbody tr');
    expect(rows.length).to.equal(1); // Should show only 1 employee per page
    const nextButton = element.shadowRoot.querySelector(
      '.pagination button:last-child'
    );
    nextButton.click();
    await element.updateComplete;
    const newRows = element.shadowRoot.querySelectorAll('tbody tr');
    expect(newRows[0].querySelector('td:nth-child(1)').textContent).to.equal(
      'Jane'
    );
  });

  it('opens delete confirmation dialog', async () => {
    const deleteButton = element.shadowRoot.querySelector(
      'tbody tr:first-child .actions ion-icon[name="trash"]'
    );
    deleteButton.click();
    await element.updateComplete;
    const dialog = element.shadowRoot.querySelector('.confirm-dialog');
    expect(dialog).to.exist;
    expect(dialog.querySelector('h6').textContent).to.equal('Are you sure?');
  });

  it('handles delete confirmation', async () => {
    const deleteButton = element.shadowRoot.querySelector(
      'tbody tr:first-child .actions ion-icon[name="trash"]'
    );
    deleteButton.click();
    await element.updateComplete;
    const proceedButton = element.shadowRoot.querySelector(
      '.confirm-dialog .proceed'
    );
    proceedButton.click();
    await element.updateComplete;
    const rows = element.shadowRoot.querySelectorAll('tbody tr');
    expect(rows.length).to.equal(1); // Should have deleted one employee
    expect(rows[0].querySelector('td:nth-child(1)').textContent).to.equal(
      'Jane'
    );
  });

  it('closes delete confirmation dialog without deleting', async () => {
    const deleteButton = element.shadowRoot.querySelector(
      'tbody tr:first-child .actions ion-icon[name="trash"]'
    );
    deleteButton.click();
    await element.updateComplete;
    const cancelButton = element.shadowRoot.querySelector(
      '.confirm-dialog .cancel'
    );
    cancelButton.click();
    await element.updateComplete;
    const dialog = element.shadowRoot.querySelector('.confirm-dialog');
    expect(dialog).to.not.exist;
    const rows = element.shadowRoot.querySelectorAll('tbody tr');
    expect(rows.length).to.equal(2); // No employees should be deleted
  });

  it('closes delete confirmation dialog using close button', async () => {
    const deleteButton = element.shadowRoot.querySelector(
      'tbody tr:first-child .actions ion-icon[name="trash"]'
    );
    deleteButton.click();
    await element.updateComplete;
    const closeButton = element.shadowRoot.querySelector(
      '.confirm-dialog .close'
    );
    closeButton.click();
    await element.updateComplete;
    const dialog = element.shadowRoot.querySelector('.confirm-dialog');
    expect(dialog).to.not.exist;
    const rows = element.shadowRoot.querySelectorAll('tbody tr');
    expect(rows.length).to.equal(2); // No employees should be deleted
  });

  it('persists state in localStorage after deletion', async () => {
    const deleteButton = element.shadowRoot.querySelector(
      'tbody tr:first-child .actions ion-icon[name="trash"]'
    );
    deleteButton.click();
    await element.updateComplete;
    const proceedButton = element.shadowRoot.querySelector(
      '.confirm-dialog .proceed'
    );
    proceedButton.click();
    await element.updateComplete;

    // Check localStorage
    const savedState = JSON.parse(
      localStorage.getItem('employeeManagementState')
    );
    expect(savedState.employees.length).to.equal(1); // Should have only Jane
    expect(savedState.employees[0].firstName).to.equal('Jane');
  });

  it('displays empty state when no employees match search', async () => {
    const input = element.shadowRoot.querySelector('input');
    input.value = 'Nonexistent';
    input.dispatchEvent(new Event('input'));
    await element.updateComplete;
    const emptyState = element.shadowRoot.querySelector(
      '.empty-state-container'
    );
    expect(emptyState).to.exist;
    expect(emptyState.textContent).to.include('There are no employees...');
  });
});

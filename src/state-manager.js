class StateManager {
  static state = {
    employees: [],
    language: 'en',
  };

  // eslint-disable-next-line no-undef
  static #listeners = new Set();

  static {
    // Load initial state from localStorage if it exists
    const savedState = localStorage.getItem('employeeManagementState');
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState);
        this.state = {...this.state, ...parsedState};
      } catch (error) {
        console.error('Failed to load state from localStorage:', error);
        // Reset to default state if parsing fails
        this.state = {employees: []};
      }
    }
  }

  static getState() {
    return {...this.state};
  }

  static #saveState() {
    try {
      localStorage.setItem(
        'employeeManagementState',
        JSON.stringify(this.state)
      );
    } catch (error) {
      console.error('Failed to save state to localStorage:', error);
    }
  }

  static #notify() {
    this.#listeners.forEach((listener) => listener());
  }

  static subscribe(listener) {
    this.#listeners.add(listener);
    return () => this.#listeners.delete(listener);
  }

  static setLanguage(language) {
    this.state.language = language;
    this.#saveState();
    this.#notify();
  }

  static addEmployee(employee) {
    this.state.employees.push(employee);
    this.#saveState();
    this.#notify();
  }

  static updateEmployee(id, updatedEmployee) {
    const index = this.state.employees.findIndex((emp) => emp.id === id);
    if (index !== -1) {
      this.state.employees[index] = {
        ...this.state.employees[index],
        ...updatedEmployee,
      };
      this.#saveState();
      this.#notify();
    }
  }

  static deleteEmployee(id) {
    this.state.employees = this.state.employees.filter((emp) => emp.id !== id);
    this.#saveState();
    this.#notify();
  }

  static isEmailTaken(email, excludeId) {
    return this.state.employees.some(
      (emp) => emp.email === email && emp.id !== excludeId
    );
  }
}

export {StateManager};

# Employee Management Application

## Overview

This project is a web application built using **LitElement** (JavaScript version) to assist HR staff in managing employee information. It provides functionalities to list, add, edit, and delete employee records, with a responsive design and localization support for English and Turkish.

## Features

- **Employee Listing**:
  - Display employee records in a list or table format (user-selectable).
  - Includes pagination and search functionalities.
  - Edit and Delete buttons for each record.
- **Add/Edit Employee**:
  - Web component for adding or editing employee records.
  - Fields: First Name, Last Name, Date of Employment, Date of Birth, Phone Number, Email Address, Department (Analytics, Tech), Position (Junior, Medior, Senior).
  - Input validations to ensure data correctness and uniqueness.
  - Confirmation prompt before saving edits.
- **Delete Employee**:
  - Delete functionality with a confirmation prompt.
- **Navigation**:
  - Navigation menu component for routing between pages.
  - Uses Vaadin Router for navigation.
- **Responsive Design**:
  - Fully responsive for desktop and mobile views without using CSS libraries like Bootstrap.
- **State Management**:
  - Persists data in browser memory (no backend).
- **Localization**:
  - Supports English and Turkish, based on the root HTML's `lang` attribute.
- **Testing**:
  - Tests for employee list and employee form components with at least 85% coverage.
- **Code Quality**:
  - ESLint and Prettier for linting and formatting.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

- **Development**: Start the development server:
  ```bash
  npm run start
  ```
- **Build**: Bundle the application for production:
  ```bash
  npm run build
  ```
- **Test**: Run unit tests:
  ```bash
  npm run test
  ```
- **Linting**: Check code for linting issues:
  ```bash
  npm run lint
  ```

## Project Structure

- `src/`: Source code for the application (LitElement components).
- `test/`: Test files.
- `index.html`: Main entry point for the web application.
- `.eslintrc.json`, `.prettierrc`: Linting and formatting configurations.
- `rollup.config.js`: Rollup configuration for bundling.
- `web-dev-server.config.js`, `web-test-runner.config.js`: Configurations for development server and testing.
- `lit-localize.json`: Localization support for English and Turkish.

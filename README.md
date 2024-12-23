# ExtJS Test Task

This repository contains a test task implemented using ExtJS 6. The task involves creating a web application with user authentication, a main window with tabbed interfaces, and CRUD functionality for managing products.

## Features

### 1. Login Page
- Displays a login form with fields for **"Username"** and **"Password"**, and a **"Login"** button.
- On clicking the "Login" button:
  - Validate the credentials: The correct credentials are `admin` for username and `padmin` for password.
  - Display an error message for incorrect credentials.
  - On successful login, navigate to the **Main Window**.

### 2. Main Window
- Contains:
  - A **"Products"** button.
  - A **"Logout"** button.
  - A tab panel where product lists open.
- **Features:**
  - Clicking the **"Logout"** button returns the user to the login page and clears the login form.
  - Clicking the **"Products"** button opens a new tab to manage the product list. Multiple tabs can be opened.

### 3. Product Tab
- Contains:
  - **Filters**:
    - Filter by **Product ID** (exact match).
    - Filter by **Product Description** (partial match).
    - Filters apply when the user presses the "Enter" key.
  - **Table of Products:**
    - Columns:
      - **ID** (integer)
      - **Name** (text)
      - **Description** (text)
      - **Price** (float)
      - **Quantity** (integer)
    - Data source: ExtJS `Store`.
    - Cells in the **Quantity** column are highlighted in red when the quantity is `0`.

### 4. Product Details
- Opens when clicking on a **Name** cell in the product table.
- Displays:
  - Fields pre-filled with data from the selected row.
  - Editable fields for **Price** and **Quantity**.
    - Validation:
      - **Price:** Non-negative floating-point numbers.
      - **Quantity:** Non-negative integers.
- Buttons:
  - **"Cancel"**: Closes the product details window.
  - **"Save"**:
    - If changes are made, displays a message indicating the presence of unsaved changes.
    - Saves the updated data to the `Store`.

## Requirements
- [ExtJS 6](https://www.sencha.com/products/extjs/)
- [Sencha Cmd](https://www.sencha.com/products/sencha-cmd/) (to generate and build the application)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/extjs-test-task.git
   cd extjs-test-task
   ```

2. Ensure you have ExtJS 6 SDK and Sencha Cmd installed.

3. Generate the application structure:
   ```bash
   sencha -sdk /path/to/extjs-sdk generate app MyApp ./
   ```

4. Start the development server:
   ```bash
   sencha app watch
   ```

5. Open the application in your browser:
   ```
   http://localhost:1841
   ```

## Usage
- Log in using the credentials `admin` / `padmin`.
- Use the **"Products"** button to open tabs for managing product lists.
- Filter, view, and edit product data as needed.
- Use the **"Logout"** button to return to the login screen.

## Folder Structure
- **`app/`**: Contains the application's source code, including controllers, models, views, and stores.
- **`build/`**: Contains the built application (production-ready files).
- **`resources/`**: Contains styles, themes, and assets.
- **`index.html`**: The main entry point for the application.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.


## Examples:
![1](https://github.com/user-attachments/assets/e56f63a0-4e30-4933-899a-ce92df355755)

![2](https://github.com/user-attachments/assets/484ad414-991e-4a2b-a8dd-f1f8f8b25ee2)

![3](https://github.com/user-attachments/assets/73f81595-2902-4839-bc46-c16fda586e89)

![4](https://github.com/user-attachments/assets/9ac2e5a4-ad83-4926-8de8-10db070128c7)

![5](https://github.com/user-attachments/assets/2f8ff5fa-d428-4b15-b25e-86499167a752)












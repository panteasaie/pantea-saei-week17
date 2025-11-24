# React + Vite

project title:#Contact List App

## About the Project
This project is a contact management application that allows users to add, edit, and delete contacts individually or in bulk.
It also includes real-time search functionality, form validation using Yup, state management with the Context API, and reusable form components.
The final version of the project is built using react-hook-form or Formik and has a scalable structure suitable for real-world applications.

## Featurse:
- Add new contacts: The app allows users to add new contacts through a simple form with validation.

- Edit existing contacts: Users can edit any existing contact and update their information.

- Delete single or multiple contacts: The app supports deleting one contact or selecting multiple contacts for bulk deletion.

- Search contacts: Users can search contacts in real time by name, last name, or email.

- Form validation: All forms include validation using Yup to ensure correct user input.

## Technologies Used
- React
- vite
- Context API
- react-hook-form
- Css

## How to Run the Project
Clone the repository to your local machine.

```bash
git clone
```
Navigate to the project folder.

```bash
<cd folder>
```
Install dependencies

```bash
npm install
```
Start the React development server

```bash
npm run dev
```

## JSON Server

This project uses JSON Server to simulate a backend API.  
Make sure to run JSON Server before starting the React application.

- Database file: db.json  
- Port: 3001

To start JSON Server, run the following command:

```bash
npm run json-server
```

## Project Structure


The project is divided into several folders, each handling a specific part of the app:

- components/: This folder contains the UI components of the application, such as the contact list, modal, and search box.

- context/: This folder manages the global state of the project using the Context API.

- constants/: This folder stores constant values used in the project.

- hooks/: This folder contains custom hooks and the reducer used to manage the contact data.

- App.jsx:  This file renders the main UI structure of the application.

- main.jsx: This file mounts the React application to the DOM.

- db.json: This file serves as the JSON Server database.

## What I Learned
I learned how to manage global state using the Context API and how to organize state logic in a scalable way. 

I also learned how to use different React hooks effectively, including creating custom hooks to manage specific parts of the application’s logic.

I became familiar with using JSON Server to simulate a backend API and manage local data during development.
## Future Improvements
- Add pagination for large contact lists.
- Add a profile photo upload for each contact.
- Add categories or tags for better contact organization.
- Connect the project to a real backend API.
## Author
**Name:**Pantea
- **GitHub:**[panteasaie](https://github.com/panteasaie)
- **Linkedin:**[Pantea](https://www.linkedin.com/in/pantea-saei-0158b3274)
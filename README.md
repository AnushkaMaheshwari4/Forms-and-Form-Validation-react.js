 📝 Forms and Form Validation

A responsive React form application with custom validation logic (no third-party libraries) that ensures all fields are correctly filled before submission. Upon successful submission, the entered details are displayed on a separate route.

---

🚀 Features

- ✅ Real-time Validation: Checks for empty fields and validates input formats.
- ❌ Error Messages: Field-specific error feedback for users.
- 🔒 Disable Submit: Form cannot be submitted unless all validations pass.
- 👀 Show/Hide Password: Toggle visibility of the password.
- 🌍 Country & City Dropdowns: Dynamically handle city options based on selected country.
- 📄 Success Page: Redirects to a new route with submitted data neatly displayed.

---

📌 Fields Included

- First Name
- Last Name
- Username
- E-mail
- Password (with show/hide toggle)
- Phone Number
- Country (dropdown)
- City (dropdown)
- PAN Number
- Aadhar Number

---

🛠️ Tech Stack Used:

🎯 Frontend: 
- React.js – Core JavaScript library for building the UI.
- React Router DOM – For routing between pages (/ and /success).
- useState, useNavigate, useLocation – React Hooks for state and navigation management.

🎨 Styling:
CSS3 – For styling the components (App.css and .container, .error, etc. classes).

✅ Form Features:
- Client-side form validation – Using RegEx patterns (for email, PAN, Aadhar, etc.).
- Conditional rendering – To show error messages.
- Password show/hide toggle – Controlled using state.

📦 Other Tools/Libraries:
- Create React App (CRA) – (Assumed) as the boilerplate used for starting the project.
- React DOM – Used in index.js to render the React app.
- React Scripts – (Bundled with CRA) to run, build, and test the app.

---

📂 Folder Structure

src/
App.js         # Main form component with validation logic
Success.js     # Displays success message and submitted data
App.css        # Styling for form and success pages
index.js       # React app entry point with router setup

___

📚 Learnings
- Built a validation system without relying on third-party libraries like Formik or Yup.
- Strengthened knowledge of form handling, controlled components, and conditional rendering in React.
- Practiced navigation using React Router.

___

🙋‍♀️Author
Anushka Maheshwari
📧anushkamaheshwari1409@gmail.com
🌐https://github.com/AnushkaMaheshwari4

www.linkedin.com/in/anushka-maheshwari777


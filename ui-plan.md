# UI Component Plan — LMS Project

This document outlines the planned UI structure, reusable components, and layout architecture for the LMS (Learning Management System) project.

---

## 📌 1. Page-Level Screens

### **1. Login Page**
- User authentication form  
- Email + Password fields  
- Login button  
- Uses reusable Input and Button components  

### **2. Dashboard Page (Student/Admin)**
- Wrapped with DashboardLayout  
- Displays user information  
- Contains course cards  
- Links to different LMS modules  

### **3. Courses Page**
- Shows list of available courses  
- Uses CourseCard component  

### **4. Course Details Page**
- Shows video/lesson list  
- Enrollment button  
- Progress tracking placeholder  

### **5. Profile Page**
- User details  
- Update profile option  
- Responsive layout  

---

## 📌 2. Reusable Components

| Component | Purpose |
|----------|---------|
| **Navbar** | Global top navigation |
| **Footer** | Bottom footer for all pages |
| **Button** | Reusable styled button |
| **Input** | Reusable input field for forms |
| **CourseCard** | Course preview block (title, instructor) |
| **Card** | Generic content container (optional) |
| **Sidebar** | Dashboard navigation (optional) |
| **DashboardLayout** | Wraps dashboard pages with Navbar + spacing |

---

## 📌 3. Folder Structure Design

components/
Navbar.js
Footer.js
Button.js
Input.js
CourseCard.js
Layouts/
DashboardLayout.js

app/
login/page.js
dashboard/page.js
courses/page.js
profile/page.js

public/
styles/
README.md
ui-plan.md


---

## 📌 4. Styling Guidelines

- Tailwind CSS for all styling  
- Mobile-first responsiveness  
- White + gray + blue color palette  
- Consistent padding, spacing, and typography  
- Reusable utility classes  

---

## 📌 5. Responsiveness Plan

- Navbar: collapses into mobile menu  
- CourseCard: 1-column mobile → 3-column desktop  
- DashboardLayout: full width mobile → sidebar optional on desktop  
- Input/Button: full width on small screens  

---

## 📌 6. Layout Structure

### **Dashboard Layout**
<Navbar /> <main class="p-6"> {children} </main> <Footer /> ```
Login Page Layout
Centered card with Input + Button components
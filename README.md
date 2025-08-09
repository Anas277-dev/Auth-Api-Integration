# Token-Based Authentication Frontend

A simple React frontend integrated with an **external authentication API**.  
The app allows users to log in, stores the returned JWT token securely, decodes it to display user information, and supports logout functionality.

---

## 🚀 Live Demo
- **Vercel Deployment**: auth-api-integration-chi.vercel.appvercel.app)
- **GitHub Repository**: https://github.com/Anas277-dev/Auth-Api-Integration

---

## 📌 Features
- Login with username & password.
- Integration with external API: `https://os-project-server.vercel.app/`
- Secure JWT token storage in `localStorage`.
- Token decoding to extract user-specific data.
- Welcome screen displaying decoded user details.
- Logout functionality to clear token and redirect to login.
- Clean and responsive UI.

---

## 🛠️ Tech Stack
- **React.js** (Frontend Framework)
- **Axios** (HTTP Requests)
- **JWT Decode** (Token decoding)
- **CSS** (Custom Styling)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo

Install Dependencies:
npm install

Run the App in Development:
npm run dev

Test Login:
Username: Anas
Password: Anas
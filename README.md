# 📝 BlogSphere - Blog Web Application

A modern, responsive blog platform built with Node.js, Express, and EJS templating. Create, read, update, and delete blog posts with an elegant and intuitive user interface.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)

## ✨ Features

- **Create Blog Posts** - Write and publish new blog entries with title, content, and author information
- **View Blog Posts** - Read full blog posts in a clean, distraction-free layout
- **Edit Blog Posts** - Update existing blog entries with ease
- **Delete Blog Posts** - Remove unwanted posts with AJAX-powered deletion
- **Responsive Design** - Beautiful UI with custom typography and styling
- **Real-time Updates** - Instant page updates without full page reloads for deletions
- **Timestamps** - Automatic date and time tracking for all posts

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository** (or download the project)
   ```bash
   git clone https://github.com/PremBhugraIITD/Blog-Web-Application.git)
   cd "Blob Web Application"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   node index.js
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
Blob Web Application/
│
├── index.js                 # Main application file (server & routes)
├── package.json             # Project dependencies and metadata
├── README.md                # Project documentation
│
├── public/                  # Static files
│   └── css/
│       └── styles.css       # Application stylesheet
│
└── views/                   # EJS templates
    ├── home.ejs            # Homepage (blog list)
    ├── view.ejs            # Individual blog view
    ├── update.ejs          # Create/Edit blog form
    └── partials/           # Reusable components
        ├── header.ejs      # HTML head & navbar
        └── footer.ejs      # Footer section
```

## 🛠️ Technology Stack

### Backend
- **Express.js** - Fast, minimalist web framework
- **Body-Parser** - Parse incoming request bodies
- **Morgan** - HTTP request logger middleware

### Frontend
- **EJS** - Embedded JavaScript templating
- **Axios** - Promise-based HTTP client for AJAX requests
- **Custom CSS** - Styled with Google Fonts (Montserrat, Rubik, Roboto Slab)

## 📝 API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Display all blog posts |
| GET | `/add` | Show create blog form |
| POST | `/add` | Create a new blog post |
| POST | `/view/:id` | View a specific blog post |
| POST | `/edit/:id` | Show edit form for a blog |
| POST | `/update/:id` | Update an existing blog post |
| DELETE | `/delete/:id` | Delete a blog post |

## 💾 Data Structure

Each blog post contains:
```javascript
{
  id: 1,                                    // Unique identifier
  title: "Blog Title",                      // Post title
  content: "Blog content goes here...",     // Post content
  author: "Author Name",                    // Author's name
  date: "14/12/2024, 9:58:30 pm"           // Timestamp
}
```

## 🎨 Design Features

- **Color Scheme**: Dark theme with green, blue, and red accent colors
- **Typography**: 
  - Montserrat for headers
  - Rubik for titles
  - Roboto Slab for content
- **Textured Background**: Asphalt pattern overlay
- **Interactive Elements**: Hover effects and smooth transitions
- **Fixed Header & Footer**: Always visible navigation

## 🔄 How It Works

1. **Home Page**: Displays all blogs in a card-based layout with action buttons
2. **Create**: Click "Add Blog" to open a form for new posts
3. **View**: Click "View" on any blog card to read the full content
4. **Edit**: Click "Edit" to modify an existing post
5. **Delete**: Click "Delete" to remove a post (uses AJAX for instant removal)

## ⚙️ Configuration

The server runs on **port 3000** by default. To change this, modify the `port` variable in `index.js`:

```javascript
const port = 3000; // Change to your preferred port
```

## 📦 Dependencies

```json
{
  "express": "^4.21.2",
  "ejs": "^3.1.10",
  "body-parser": "^1.20.3",
  "morgan": "^1.10.0",
  "axios": "^1.7.9",
  "method-override": "^3.0.0"
}
```

## 🔮 Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication and authorization
- [ ] Comment system
- [ ] Categories and tags
- [ ] Search functionality
- [ ] Pagination for blog lists
- [ ] Rich text editor
- [ ] Image upload support
- [ ] Social media sharing
- [ ] Dark/Light theme toggle

## ⚠️ Important Notes

- **Data Persistence**: Currently, blog data is stored in memory. All data will be lost when the server restarts. Consider integrating a database for production use.
- **Security**: This is a demonstration project. For production deployment, implement:
  - Input sanitization (to prevent XSS attacks)
  - CSRF protection
  - Rate limiting
  - Authentication & authorization
  - Environment variables for sensitive data

## 👨‍💻 Author

**Prem Bhugra**

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

**Made with ❤️ using Node.js and Express**

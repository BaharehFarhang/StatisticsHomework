# Statistics Homework Viewer

A modern, responsive Vue 3 application for organizing and viewing statistics homework assignments.

## Features

- 🎨 **Modern UI Design**: Clean, responsive interface with beautiful gradients and animations
- 📱 **Mobile Responsive**: Optimized for all device sizes
- 📚 **Homework Organization**: Structured display of 10 homework assignments
- 📁 **File Management**: View and organize different files (documents, HTML)
- 🚀 **Fast Navigation**: Vue Router for seamless page transitions
- 🎯 **Interactive Elements**: Hover effects and smooth animations

## Screenshots

The application features:
- **Home Page**: Grid layout of homework assignments with descriptions and file counts
- **Homework Detail Pages**: Individual homework views with file listings and metadata
- **Responsive Design**: Adapts to desktop, tablet, and mobile devices

## Project Structure

```
src/
├── App.vue              # Main application component
├── main.js              # Vue app entry point with router
└── views/
    ├── Home.vue         # Home page with homework grid
    └── HomeworkView.vue # Individual homework detail view
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd /Users/nastaran/Documents/projects/bahare
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   The application will automatically open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Usage

### Home Page
- View all 10 homework assignments in a responsive grid
- Each card shows the homework title, description, and file count
- Click on any homework card to view details

### Homework Detail Pages
- Navigate to individual homework assignments
- View file listings with type icons and file sizes
- Use breadcrumb navigation to return to home
- Click on files to open them (currently shows alerts)

### Navigation
- Use the header navigation to return to home
- Breadcrumb links for easy navigation between pages
- Responsive design adapts to your device

## Customization

### Adding New Homework
To add new homework assignments, edit the `homeworkList` array in `src/views/Home.vue`:

```javascript
{
  id: 11,
  title: 'HW 11',
  description: 'New homework description',
  fileCount: 5
}
```

### Modifying File Data
Update the `homeworkData` object in `src/views/HomeworkView.vue` to include actual file information from your `Statistics-homework/` directory.

### Styling
The application uses CSS custom properties and modern CSS features. Modify the styles in each component to match your preferences.

## File Types Supported

- **Documents**: .docx, .pdf files
- **HTML**: .html files
- **Generic**: Other file types

## Technologies Used

- **Vue 3**: Progressive JavaScript framework
- **Vue Router 4**: Official router for Vue.js
- **Vite**: Fast build tool and dev server
- **CSS3**: Modern styling with flexbox and grid
- **SVG Icons**: Scalable vector graphics for file types

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Built with Vue 3 and modern web technologies
- Designed for educational content organization

## Support

If you encounter any issues or have questions:
1. Check the browser console for errors
2. Ensure all dependencies are installed
3. Verify Node.js version compatibility
4. Check that the development server is running

---

**Happy studying! 📊📚**

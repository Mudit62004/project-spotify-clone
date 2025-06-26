# 🎵 Spotify Clone

A web-based music streaming application that replicates the core functionality and design of Spotify. This project is built as part of a learning journey to understand modern web development technologies and music streaming interfaces.

## ✨ Features

- **Music Playback**: Play, pause, skip, and control volume
- **Progress Bar**: Visual representation of song progress with seek functionality
- **Playlist Management**: Browse through curated playlists
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Search Functionality**: Search for songs, artists, and albums
- **User Interface**: Clean, modern UI inspired by Spotify's design
- **Song Queue**: Next/previous song navigation
- **Audio Controls**: Play/pause, volume control, and shuffle options

## 🛠 Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, CSS Variables
- **Audio**: HTML5 Audio API
- **Icons**: Font Awesome or custom SVG icons
- **Version Control**: Git & GitHub

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML, CSS, and JavaScript
- Git installed on your machine

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mudit62004/project-spotify-clone.git
   cd project-spotify-clone
   ```

2. **Open the project**
   - Simply open `index.html` in your preferred web browser
   - Or use a local development server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   
   # Using Live Server extension in VS Code
   ```

3. **Access the application**
   - Open your browser and navigate to `http://localhost:8000` (if using a local server)
   - Or directly open the `index.html` file in your browser

## 💻 Usage

1. **Playing Music**:
   - Click on any song from the playlist to start playing
   - Use the play/pause button in the player controls
   - Adjust volume using the volume slider

2. **Navigation**:
   - Use the previous/next buttons to navigate between songs
   - Click on the progress bar to seek to a specific time
   - Browse different playlists from the sidebar

3. **Controls**:
   - **Spacebar**: Play/Pause toggle
   - **Arrow Keys**: Volume control and seeking
   - **Click**: Direct interaction with UI elements

## 📁 Project Structure

```
project-spotify-clone/
│
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Main stylesheet
│   ├── responsive.css     # Mobile responsiveness
│   └── components.css     # Component-specific styles
│
├── js/
│   ├── script.js          # Main JavaScript functionality
│   ├── player.js          # Audio player logic
│   └── playlist.js        # Playlist management
│
├── assets/
│   ├── images/            # Album covers, icons, backgrounds
│   ├── audio/             # Sample audio files
│   └── icons/             # SVG icons and logos
│
├── README.md              # Project documentation
└── LICENSE                # License file
```

##🔌Local Storage Structure
The app stores data in the following format:
javascript// Songs data
localStorage.setItem('songs', JSON.stringify([
  {
    id: 1,
    title: "Song Title",
    artist: "Artist Name",
    duration: "3:45",
    src: "path/to/audio.mp3"
  }
]));

// Playlists data
localStorage.setItem('playlists', JSON.stringify([
  {
    id: 1,
    name: "My Playlist",
    songs: [1, 2, 3] // song IDs
  }
]));

## 🤝 Contributing

Contributions are welcome! This is a learning project, so feel free to:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Areas for Contribution
- Bug fixes and improvements
- New features implementation
- UI/UX enhancements
- Code optimization
- Documentation improvements

## 🎯 Learning Objectives

This project helped in understanding:

- **DOM Manipulation**: Interactive UI elements and event handling
- **Audio API**: Working with HTML5 audio and media controls
- **Responsive Design**: Creating mobile-friendly interfaces
- **JavaScript ES6+**: Modern JavaScript features and best practices
- **CSS Grid & Flexbox**: Advanced layout techniques
- **Version Control**: Git workflow and collaboration
- **Web Development**: Frontend development principles





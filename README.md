# UnregulatedTheFilm.com

A web presence for the UnregulatedTheFilm documentary/brand platform. This project showcases the film, streaming information, and audience engagement features.

## Project Structure

```
.
├── index.html                 # Main landing page
├── css/                       # Stylesheets
│   ├── style.css              # Main styles
│   ├── responsive.css         # Mobile/responsive styles
│   └── variables.css          # CSS custom properties
├── js/                        # JavaScript
│   ├── main.js                # Core functionality
│   ├── analytics.js           # Tracking & analytics
│   └── utils.js               # Utility functions
├── images/                    # Image assets
├── docs/                      # Documentation
├── config/                    # Configuration
│   ├── config.example.js      # Configuration template
│   └── config.js              # (gitignored) Local config
├── tests/                     # Test files
├── .gitignore                 # Git ignore rules
├── DESIGN_SPEC.md             # Design specifications
└── README.md                  # This file
```

## Getting Started

1. Clone the repository
2. Copy `config/config.example.js` to `config/config.js` and update with your settings
3. Open `index.html` in a browser or serve with a local development server
4. Check `DESIGN_SPEC.md` for design specifications and requirements

## Development

- CSS files should follow the structure in `css/`
- JavaScript should be modularized in `js/`
- All configuration should use `config/config.js`
- Tests should be placed in `tests/` directory

## Features

- Film information and streaming links
- Audience engagement platform
- Responsive design for mobile/desktop
- Analytics integration
- SEO optimization

## Configuration

Copy `config/config.example.js` to `config/config.js` and configure your settings:
- API endpoints
- Analytics credentials
- Third-party service keys
- Environment-specific settings

## License

All rights reserved - UnregulatedTheFilm

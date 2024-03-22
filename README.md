## Frontend Mentor: Time Tracking Dashboard

Solution to the _[Time Tracking Dashboard](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw/hub)_ challenge on Frontend Mentor.

### Challenge

- Build out a dashboard using provided [desktop](/archive/fem-assets/design/desktop-design.jpg) and [mobile](/archive/fem-assets/design/mobile-design.jpg) designs
- Users should be able to:
  - View the optimal layout for the site depending on their device's screen size
  - See hover states for all interactive elements on the page
  - Switch between viewing Daily, Weekly, and Monthly stats

### Enhancement(s)

- Made Daily states/values editable and persisted with Session Storage
- Added light theme option
- Pending
  - Improve accessibility
  - Factor in user preference and system default for light-dark mode theme switching

### Solution

Live Site: [tt-fm-timetracking-dashboard.netlify.app/](https://tt-fm-timetracking-dashboard.netlify.app/)

### Retrospective

- This could have been a fairly straight-forward project, except I opted for an extra layer of challenge by adding interactivity -- making the Daily records editable and storing the new values
- While the project took longer to complete I learned more in the process about: the Web Storage API, theming, state and prop management.

### Installation

```
Clone repository

In the project directory:

`npm install` - for dependencies

`npm start` - runs app in development mode

Open http://localhost:3000 (or next available port) to view app in the browser
```

### Tools & Resources

- HTML, CSS, JavaScript, React
- CSS Resets
- Articles/Tutorials
  - [Using the Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#feature-detecting_localstorage) _(MDN)_
  - [A Complete Guide to Dark Mode on the Web](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#aa-using-custom-properties) _(CSS Tricks)_
  - [Style Pseudo-elements with Javascript Using Custom Properties](https://css-irl.info/quick-tip-style-pseudo-elements-with-javascript-using-custom-properties/)
- Deployed on Netlify

_Visit my [Frontend Mentor profile](https://www.frontendmentor.io/profile/tinuola) to view other challenges I've completed!_

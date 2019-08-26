# Calorie Counter

[DEMO](https://peaceful-snyder-13d33a.netlify.com/)

This webapp calculates your daily calorie intake.

The app has been built using only ReactJS.
It also uses [Semantic UI](https://semantic-ui.com/)for styling, and [React Input Range](https://www.npmjs.com/package/react-input-range) to select values in one of the screens.

It's a responsive app that makes use of controlled components to manage user input.

The Card component contains the important state of the app and it renders it to its child components (Screens). The state is used to show the different Screen components and store all the data needed to make the final calculation (via props and callbacks).

![project screenshot](/src/assets/screenshot.jpg?raw=true "Calorie Counter WebApp Screenshot.")

# Memory Card Game
A simple react site that allows the user to play the simple version of memory card game. Deployed live at https://memory-game-by-ar.herokuapp.com/

# Algorithm:

We simply start of by saving the state of the clicked card in choiceOne and then choiceTwo. If the src property of those two objects are equal we simple changed their matched property to true so in future we do not allow user to re click them. If the src property does not match, we simply reset both our choices. We also update our turn state every time second choice is taken. Finally, every second choice we take in which our guess was correct or matched property is true, we retiterate through the cards state to check if all the card objects have their matched property true. If such is the case we set our win state to true and render such message along with taken turns.

https://user-images.githubusercontent.com/92116477/166100929-8e1a8907-d412-45d8-8271-d9aacc73b238.mp4

# Description:
useState for obvious state handling of different variables so we can re-render components if they are changed.
useEffect for handling sideeffects. No such sideffects as in api handling was used instead useEffect was utilized for other usecases like as react delays saving states we can not conditionally check them. So, we use those states in dependency array of the useEffect so if they are changed only then we check them.
Smooth animations were rendered using plain css with transform and transition properties.

# Conditions of winning:

If the user wins with less than 13 turns, user is prompted with a more winning message.

<img width="922" alt="less12turns" src="https://user-images.githubusercontent.com/92116477/166101008-0160e265-d8fe-485c-a696-bdc337726a9e.png">

However, if the user takes more turns to complete the game, they are prompted with a different message.

<img width="930" alt="grtrthan12turns" src="https://user-images.githubusercontent.com/92116477/166100999-98311dbc-d279-4d96-81aa-8c2d2207afd9.png">



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Credits:
Help,assets and inspiration from Shaun Pelling https://github.com/iamshaunjp


# Todolist App

This is a simple Todolist app that helps you keep track of your tasks and stay organized. The app allows you to fetch and display todo items from an API, add new items, update existing items, and delete items.

## Features
Fetch and show todo items from the API: The app makes a GET request to the JSONPlaceholder API and displays the todo items.
Add a todo item: You can add a new item by entering the task description and pressing the "Add" button. The app makes a POST request to the API to save the item in the React state.
Update an item: You can update an existing item by editing its description and clicking the "Update" button. The app makes a PUT request to the API to update the item.
Delete an item: You can delete a todo item by clicking the "Delete" button. The app makes a DELETE request to the API to remove the item.

### Technologies Used
The Todolist app is built using the following technologies:

React: A JavaScript library for building user interfaces.
CSS: Style sheet language for designing the app's appearance.
Html: Markup language for creating the user interface.

### Installation
To run the Todolist app locally, follow these steps:

Clone this repository: git clone https://github.com/arvind99grover/todo-list.git
Navigate to the project directory: cd todo-list
Open the index.html file in your web browser.

### Usage
Fetch todo items: The app automatically fetches todo items from the JSONPlaceholder API and displays them.
Add a todo item: Enter the task description in the input field and click the "Add" button. The item will be added to the todo list.
Update an item: Click the "Edit" button next to an item, modify the description, and click the "Update" button.
Delete an item: Click the "Delete" button next to an item to remove it from the list.

### Demo
A live demo of the Todolist app is available at https://arvind99grover.github.io/todo-list/

### API
The Todolist app uses the JSONPlaceholder API to fetch, add, update, and delete todo items.

Fetch todos: GET https://jsonplaceholder.typicode.com/todos
Add todo: POST https://jsonplaceholder.typicode.com/todos
Update todo: PUT https://jsonplaceholder.typicode.com/todos/{id}
Delete todo: DELETE https://jsonplaceholder.typicode.com/todos/{id}

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

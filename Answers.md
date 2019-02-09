1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
...`.map`, `.filter`, `.concat`; `Object.assign` allows us to create a new object while extending the properties of another object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
...`actions` are packets of information that contain an action type and data associated with the action type. Actions get dispatched to the reducer.
...`reducers` figure out the new version of state based on the current state and the given action. Reducers bind actions and our store together.
`store` is a Javascript object and is known as a 'single source of truth' because it contains the state for the entire application. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
...Application state is available to all components whereas Component state is only available to the Component in which it resides. If you need state to be available to other components, it is a good idea to place it in the Application level. If you are only using state in a single Component, Component state is best.

1.  What is middleware?
...Middleware is an extension point for Redux that allows us to add new functionality.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
...`redux-thunk` is a piece of middleware that allows us to handle asynchronous operations inside our action creators.

1.  Which `react-redux` method links up our `components` with our `redux store`?
...`connect()`

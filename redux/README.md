# This is the new redux with redux tool kit update (2022)

### Documentation [https://redux-toolkit.js.org/tutorials/quick-start](https://redux-toolkit.js.org/tutorials/quick-start)

1. First we should install the packages needed
   `npm install @reduxjs/toolkit react-redux`

2. Create a [redux store](store.js)
3. Provide your store to your app in [index.js](./index.js)
   1. `import { Provider } from 'react-redux'`
   2. `import store from './store'`
   3. Wrap <Provider> Component around your main App file
   4. Pass the created store as store props to the <Provider/> Component
4. Unlike the regular redux, we can create slice, which is like a combination of state, reducer and actions. In regular redux we might need to define each of these separately.
5. In this example, I'll use redux for authentication purposes. So I created [user.js](./user.js)
6. Add the created slice reducer to your store reducers object
7. Now we can use our state by using useSelector hook in react-redux
   1. `import { useReducer } from 'react-redux'`
   2. `const { isAuthenticated, user, token } = useReducer(state => state.user)`
8. To use actions, use useDispatch hook in react-redux
   1. `import { useDispatch } from 'react-redux'`;
   2. import the actions from your slice, `import { loginUser, logoutUser } from './user'`
   3. To dispatch this action 1. `const dispatch = useDispatch()` 2. `dispatch(loginUser( {user: {}, token: ""} ))` Dispatch action with payload 3. `dispatch(logoutUser())`.
      Now we can do something like this

```
axios.post("/api/login", data)
.then(res => dispatch(loginUser(res.data)))
.catch(err => dispatch(logoutUser()))
```

# But what if we want to use redux thunk middleware to write our dispatch outside of component?

### Documentation [https://redux-toolkit.js.org/usage/usage-guide#async-requests-with-createasyncthunk](https://redux-toolkit.js.org/usage/usage-guide#async-requests-with-createasyncthunk)

**The Redux Toolkit `configureStore` function automatically sets up the thunk middleware by default**

To do services in external files instead of doing everything in slice file:

1. Create a [service file](services.js) and add your API services
2. Create a [async thunk file](./asyncThunk.js) to handle all your redux thunk requests
3. `import { createAsyncThunk } from "@reduxjs/toolkit";` and all your services
4. In your [slice file](./data.js), import the async thunk functions created previously
5. check **extraReducers**

\*TBC abort thunk process

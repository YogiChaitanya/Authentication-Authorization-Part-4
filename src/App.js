import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

// ok now i got it thanku very much
import './App.css'
// cool,
// that is not command, we use // to comment a line in JS file,
// is your doubts cleared?

// what is that command ?
// for getting the output you entered one command in terminal right?
// as we are using the react app, we use the command

// npm start

// to start the server.
// once raise the discussion regarding this query, we will provide the complete steps.
// from next time, you can follow the same steps, that we are going to mention in the discussion.

// ok?
// one more thing is there can i ask?

// regarding?

// initializeDBAndServer() we will create in node js right
// in the function inside
// we will right
// server start running at next url how we have to mention?
// https://yogichaitanyapncjfrjsivooa2o.drops.nxtwave.tech:3000/
// like that?
//

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/products" component={Products} />
      <ProtectedRoute exact path="/cart" component={Cart} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
)

export default App

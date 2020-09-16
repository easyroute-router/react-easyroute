## Getting started

#### Creating a router
To create a router, open your main file (f.e. "index.jsx") and add the following code:
```javascript
import Router from 'react-easyroute'
import Index from './IndexPage.jsx'
import About from './About.jsx'

const router = new Router({
    mode: "hash", // "hash" or "history"
    routes:[
        {
            path: '/',
            component: Index,
            name: 'Index'
        },
        {
            path: '/about/me',
            component: About,
            name: 'About me'
        },
        {
            path: '/lazy-load',
            component: () => import('src/LazyPage.jsx'),
            name: 'This is a lazy-loading page'
        }
    ]
})
```

_I suggest you creating separated file for router instance._

**IMPORTANT:** if you are using lazy-loading components, you should export them via `export default`!!!

"mode" key allows you to specify the navigation mode:
* "hash": based on everything that comes after the "#" sign in the URL (window.location.hash)
* "history": based on [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)

#### Adding routes
"routes" key is array of registered routes. In the example above we defined two routes. Link `//yoursite.com/#/` will lead to Index component, and link `//yoursite.com/#/about/me` - to About component.

#### Last step
If you will try to launch your app after creating router 
instance you will see errors in console. This happening 
because there is no outlet - a container for router 
components. To create one, open your main component 
(f.e. "index.jsx") and add this:

```javascript
import { RouterOutlet } from "react-easyroute";
// ...
ReactDOM.render(
  <React.StrictMode>
      <RouterOutlet router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
```
Make sure you passed router instance as a prop to first `RouterOutlet`.
In nested routes it is not necessary. 
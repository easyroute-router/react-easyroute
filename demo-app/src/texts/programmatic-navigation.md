## Programmatic navigation

If you have access to route object in your component,
you can use its `push` method to navigate to another
page. 

**Important:** only string literal
is supported

```javascript
// SomeComponent.jsx
function SomeComponent(props) {
    // ...
    props.route.push('/home')
    // ...
}
```
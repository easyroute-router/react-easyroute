## Current route info
From every child component you can access current 
route state via props. 

#### Example 1: functional component
```javascript
function myPage(props) {
    // ...
    console.log(props.currentRoute)
    // ...
}
```

#### Example 2: class component
```javascript
class MyPage extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.currentRoute)
    }
    // ...
}
```

##### Output:
```javascript
{
  "fullPath": "/test/value?name=Alex&age=23",
  "params": {
    "param1": "value"
  },
  "query": {
    "name": "Alex",
    "age": "23"
  },
  "meta": {
    "pageTitle": "Title!"
  }
}
```

By default route info object is immutable, 
however, you can see `meta` field in the example above. 

Just like in VueRouter, you can pass any data to route
with this field. You can also add data in `beforeEach` hook.

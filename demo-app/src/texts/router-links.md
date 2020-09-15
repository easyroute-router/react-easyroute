## Router links

To add link to the another route you can use `RouterLink` component.

```javascript
import { RouterLink } from 'react-easyroute'

// ...

return <RouterLink to={'/route'} />
```
"to" prop is an url where you want to navigate. You can use query parameters here, like:
```javascript
<RouterLink to={'/route?test=123'} />
```

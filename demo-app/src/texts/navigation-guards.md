## Navigation guards

f you want to do something before component is 
changed by index, you can add navigation guards.

For now there are two navigation 
hooks: beforeEach and afterEach.

You can specify them like that: 
```javascript
index.beforeEach = (to,from,next) => {
	console.log(to.fullPath)
	console.log(from.fullPath)
	next()
}

index.afterEach = (to,from) => {
	console.log('We are on new page!')
}
```

"to" and "from" are objects with routes info. "next" 
is function that resolves hook's promise and 
continues transition. If you will not put "next()" 
in beforeEach methond - transition will NEVER 
complete.

### More control

`next` can be used without arguments, then route 
changing will continue. Next arguments are also valid:
* `true` - same as no argument passed;
* `false` - route changing will be cancelled;
* path, for example `/login` – redirect to another route.

You can use this for auth control, 404 redirects based
on resources fetch failure, etc.
# useEffect

- React hook which lets you run the code at specific times, after component is rendered.

## How to use

- Use empty array to store data, otherwise program might crash

```js
const FetchExample = () => {
const [posts, setPosts] = useEffect([]);
(
..
..
.finally(() => setLoading(false)); // Stops loading indicator
}, []);
```

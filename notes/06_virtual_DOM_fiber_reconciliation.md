Virtual DOM is not used now. But it is important to know why it was used.

The browser DOM is removes and recreates the entire DOM. This is called **page reload**.

### `ReactDOM.createRoot()` 
- behind the scene, it creates a DOM like structure(i.e. virtual DOM) like browser DOM.
- React compares the its DOM with the browser's DOM, and updates/removes the parts which are actually changed in the UI.
- React does not update the DOM immediately e.g. sometime you need to wait for the response from a network call.

### [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture) 
it is used to update the virtual DOM
Key features
- to increase its suitability for areas like animation, layout, and gestures.
- headline feature is **incremental rendering**
	- the ability to split rendering work into chunks and spread it out over multiple frames.
- the ability to pause, abort, or reuse work as new updates come in
- the ability to assign priority to different types of updates
- new concurrency primitives

#### **Reconciliation**
The algorithm React uses to diff one tree with another to determine which parts need to be changed.
Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." 
A high-level description goes something like this: when you render a React application, a tree of nodes(object within the JSX) that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via `setState`), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.
The key points are:
- Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.
- Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique." -> important from interview point of view.

**update**
<br>
A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.


#### Fiber
- Fibers are a much lower-level abstraction
- we need to be able to
	- pause work and come back to it later.
	- assign priority to different types of work.
	- reuse previously completed work.
	- abort work if it's no longer needed.
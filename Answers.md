# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

It is a JS library made by Facebook to assist in building big applications with data changes. It is considered part of the V in the MVC model.

2. What does it mean to think in react?

To take a more modular approach to building with JS. 
	a) Mock up the project, breaking up the elements and components.
	b) Build a static version.
	c) Identify a minimalistic version of your app. 
	d) Add state
	e) Add data.

3. Describe state.

It's an object that represents the parts of the app that can change. Each different component can maintain its own state. When it changes, the compenent re-renders.

4. Describe props.

props, short for properties, hold information that gets passed to the component.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is anything that affects something outside of the scope of the function being executed. You use useEffect(), which tells tour component it needs to do something after the render.

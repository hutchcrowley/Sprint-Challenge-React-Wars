# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a JavaScript library that was developed by the Facebook team in 2014 with the explicit intention of developing better User Interfaces. It uses a style of coding known as **declarative code** to achieve a better workflow. It accomplishes this by essentially wrapping vanilla JavaScript, or **imperative code** in a syntax that combines markdown and JavaScript. It supports many modules that extend this functionality, some allowing for CSS-in-JS, some are custom UI libraries, etc. It also supports a design philospophy wherein each component of an application is a self-contained, re-useable, and composable part. This compartmentalization of functionality, combined with placing markup side-by-side with logic, add up to a revolutionary new paradigm in software development.

2. What does it mean to think in react?

React, possibly more than a lot of other libraries and frameworks for JS, is built around a particular design philosophy. The team set out to question best practices, and create the best possible tool for creating user interfaces. It has evolved into it's own monster, allowing you to do just about any time of software engineering utilizing it's toolset. In particular, React supports the design philosophy in which each component of an application should be a self contained, re-useable unit that only does one thing. In this way, software development, debugging, and design are simplified, allowing developers to focus on things other than deep logic of an application and build better UX/UI.


3. Describe state.

State is one of the two ways that React Components handle data. State is local and mutable. It allows for variables to maintain their values outside of the scope of the functions that they are called in. React utilizes state to create rich web applications that have the same functionality as desktop apps. It also helps React make these applications scaleable, fast, and useable on a wide variety of systems.

4. Describe props.

Props are the second way that React Components handle data. Props are read- only and are passed between components. Props actually live as property-like values on an object called props. Props can be changed within a component, but, generally, thier immutability is what encourages stability within a React app. Props are passed into a functional component a parameter when the function is declared.
4. Describe props.
Props are the second way that React Components handle data. Props are read- only and are passed between components. Props actually live as property-like values on an object called props. Props can be changed within a component, but, generally, thier immutability is what encourages stability within a React app. Props are passed into a functional component a parameter when the function is declared.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is anything that affects something outside of the scope of the function being executed. Things like getting data from an API, timers, and manually mutating the DOM are side effects. In react, there are side effects that require clean-up, and side effects that do not require clean-up.
Effects in a React component are synced to state/prop changes via passing a dependency array as the second argument to the useEffect hook. An empty array will cause the useEffect hook to fire off only after the page renders. Putting in something like props.userID will cause the effect to fire only if that particular prop changes.

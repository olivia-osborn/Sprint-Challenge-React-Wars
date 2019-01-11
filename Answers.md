# Answers

1.  What is React JS and what problems does it try and solve?
React JS is a library that developers use that make it easier to scale large web apps that require lots of user data. React JS allows us to break down an app into reusable components that makes scaling the website much more manageable. React also gives us the ability to deal with constant incoming data from users using "state" and "props" which can be passed down to components in a reusable or "reactive" way. 

2.  What does it mean to _think_ in react?
Thinking in react means looking at a website and breaking it down into a hierarchy of components. Having these separate components allows us to reuse code instead of coding multiple components that look the same. Thinking in react also means knowing which component the state (or data) should be stored in and where it should be passed down to (as props). 

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
Class/Stateful components are components contain state. These are the components that deal with the data (usually a container component), and pass down the data to their children components using "props". Function/presentational components do not contain information about the data that is received, these components only have access to state via props passed down to it from a class/stateful component. These functional/presentational components usually deal with how things "look" instead of how things "work".

4.  Describe state.
State is quite literally the state of your app. State refers to the data your app is currently dealing with that it has received from the UI. Anything that a user adds to a website, filling in an input field, uploading pictures onto instagram etc. is stored as state. 

5.  Describe props.
Props is how state (or data) is passed throughout your code. A class component higher up on the component hierarchy will receive data as state (which is just an object) from your app and pass that data to its children components as "props" or "properties". 

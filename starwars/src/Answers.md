1.)What is React JS and what problems does it try and solve?
    React is a JavaScript library that allows for sections of code to be reused which cuts down the time needed to code. react calls reusable code, components, which can take and pass around data. React allows for more reusable code when creating websites and passing data. React components can hold data, and through state and props, it makes understanding data flow less complex.

2.)What does it mean to think in react?
    This means to think about breaking things down into components that can be reused and take data. The data will flow through from state and props. When thinking in React, it means to also keep in mind, what how state is being updated as well as what props is receiving in terms of data.

3.)Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    classes within react are stateful components which means they have state within the class. the State holds the data from some API, or data that you created yourself. Stateful components have a render method which gets called every time state is being updated

    Functional components or stateless functional components do not have state built in, but have props that receive the data. Functional components are used more for the displaying and mapping over of the data.


4.)Describe state.
    State holds the data of an application and through built in methods you render components that update the state. State is mutable, but the unpredictable behavior of state is the reason why you never directly manipulate the state. When we are wanting to update the state, we make sure to create a shallow copy of the state, and then through setState, we can then update the state of the component.
    When the state is updated, React will recall the render method, which is how the application gets updated.

5.)Describe props.
    props are meant to visualize the data from some stateful component being passed down to another stateless functional component or stateful class component. props are immutable because the stateless components don't house the state itself. It's only through the stateful components that state is updated.
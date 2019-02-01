In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
 
 Actions help the reducer understand how to update the state. Reducers is where all the changes happen and then proceed to the view. The store holds all the data and cannot be changed. 



 What is the difference between Application state and Component state? When would be a good time to use one over the other? 


Application state can be accessed throughout the entire app while component state can only be used in the component and the children by passing down props.


 Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

 Is a midddleware that lets you call action creators that return a function instead of an object.

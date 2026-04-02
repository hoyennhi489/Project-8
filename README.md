This is a learning project created with the help of AI tools in Visual Studio Code. Some bugs are intentionally left in the source code so I can practice debugging and fixing issues.

### Learning Journal

Today I worked on a Shopping List App built with React. The app allows users to add items with quantities and display them in a list.

While running the project, I encountered a runtime error caused by using an undefined variable called "newTodo". This made the application stop working properly. After reviewing the code, I realized that the correct variable should be "newItem". Fixing this helped me understand the importance of consistent variable naming.

I also found an issue with how I was updating the state. I used the push() method, which modifies the original array and returns a number instead of a new array. This caused unexpected behavior in React. I fixed it by using the spread operator to create a new array when adding items.

In addition, I learned that each element rendered in a list should have a unique key. I updated the list rendering to include a key, which helps React manage updates more efficiently.

Today I realized that small mistakes can lead to bigger problems, but debugging step by step helps me understand the code better. I also gained a clearer understanding of how to update state safely in React.

This was a productive learning day and helped me improve my coding skills.
import React, { useEffect, useState } from 'react';

const Draganddrop = () => {
  const [loading, setLoading] = useState(false);
  const [todo, setTodos] = useState([]);

  async function fetchListOfTodos() {
    try {
      setLoading(true);
      const apiResponse = await fetch('https://dummyjson.com/todos?limit=5&skip=0');
      const result = await apiResponse.json();

      if (result && result.todos && result.todos.length > 0) {
        setLoading(false);
        const updatedTodos = result.todos.map((todoItem) => ({
          ...todoItem,
          // Initialize all as 'wip' (work in progress)
          status: 'wip',
        }));
        setTodos(updatedTodos);
      }
    } catch (e) {
      console.error('Error fetching todos:', e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfTodos();
  }, []);

  // --- Drag Handlers ---

  function onDragStart(e, todoitem) {
    // 1. FIX: Pass the item's ID as a string, not the whole object
    // Using 'todoId' as the data key for clarity
    e.dataTransfer.setData('todoId', String(todoitem.id));
  }

  function onDrop(e, status) {
    e.preventDefault(); // Good practice to keep

    // 2. FIX: Retrieve the data using the correct key and convert it to a Number
    const idToUpdate = Number(e.dataTransfer.getData('todoId'));

    // Use map to create a new array (better for immutability)
    const updatedTodos = todo.map((todoitem) => {
      // Compare the numerical IDs
      if (todoitem.id === idToUpdate) {
        // Return a NEW object with the updated status
        return { ...todoitem, status: status };
      }
      return todoitem;
    });

    setTodos(updatedTodos);
  }

  // --- Rendering Logic ---

  function renderTodo() {
    const todolisttorander = {
      workinProgressTodos: [],
      completedTodos: [],
    };

    todo.forEach((todoitem) => {
      const todoElement = (
        <div
          onDragStart={(e) => onDragStart(e, todoitem)}
          draggable
          key={todoitem.id}
          style={{ padding: '8px', margin: '4px', border: '1px solid #ccc', cursor: 'grab' }} // Added basic styling for visibility
        >
          {todoitem.todo}
        </div>
      );

      // Populate the correct list based on the current status
      if (todoitem.status === 'wip') {
        todolisttorander.workinProgressTodos.push(todoElement);
      } else if (todoitem.status === 'completed') {
        todolisttorander.completedTodos.push(todoElement);
      }
    });

    // 3. FIX: Must return the object to the caller
    return todolisttorander;
  }

  if (loading) {
    return <h1>Loading Todos...</h1>;
  }

  const { workinProgressTodos, completedTodos } = renderTodo();

  return (
    <div style={{ padding: '20px' }}>
      <h1 className="text-4xl">Drag and Drop ToDo Board</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Work in Progress Column */}
        <div
          onDrop={(e) => onDrop(e, 'wip')}
          onDragOver={(e) => e.preventDefault()} // Essential to allow dropping
          style={{ flex: 1, padding: '10px', border: '2px dashed blue', minHeight: '300px' }}
        >
          <h2>⏳ In Progress</h2>
          {workinProgressTodos}
        </div>

        {/* Completed Column */}
        <div
          onDrop={(e) => onDrop(e, 'completed')}
          onDragOver={(e) => e.preventDefault()} // Essential to allow dropping
          style={{ flex: 1, padding: '10px', border: '2px dashed green', minHeight: '300px' }}
        >
          <h2>✅ Completed</h2>
          {completedTodos}
        </div>
      </div>
    </div>
  );
};

export default Draganddrop;

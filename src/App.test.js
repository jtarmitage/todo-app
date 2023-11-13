import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Todo App and adds/removes todos', () => {
  const { getByText, getByPlaceholderText } = render(<App />);

  // Check if the heading is rendered
  const heading = getByText(/Todo App/i);
  expect(heading).toBeInTheDocument();

  // Add a todo
  const input = getByPlaceholderText('Add a new task');
  const addButton = getByText('Add');

  fireEvent.change(input, { target: { value: 'Test Todo' } });
  fireEvent.click(addButton);

  // Check if the todo is added
  const addedTodo = getByText('Test Todo');
  expect(addedTodo).toBeInTheDocument();

  // Remove the todo
  const removeButton = getByText('Remove');
  fireEvent.click(removeButton);

  // Check if the todo is removed
  expect(addedTodo).not.toBeInTheDocument();
});

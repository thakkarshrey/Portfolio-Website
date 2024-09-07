// Import necessary dependencies for testing
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' // Import to extend Jest's expectations

// Import the component to be tested
import Box from './Box'

// Test suite for the Box component
describe('Box component', () => {
  // Test case to check if Box renders children correctly
  it('renders children correctly', () => {
    // Define some test content to be rendered inside the Box component
    const testContent = 'Hello, world!'

    // Render the Box component with the test content
    const { getByText } = render(<Box>{testContent}</Box>)

    // Assert that the rendered Box component contains the test content
    expect(getByText(testContent)).toBeInTheDocument()
  })

  // Test case to check if Box applies the correct CSS class
  it('applies the correct CSS class', () => {
    // Render the Box component
    const { container } = render(<Box />)

    // Get the container element of the rendered Box component
    const boxContainer = container.firstChild

    // Assert that the container element has the expected CSS class
    expect(boxContainer).toHaveClass('box-container')
  })

  // Test case to check if Box forwards props correctly
  it('forwards additional props', () => {
    // Define test props to be forwarded to the Box component
    const testId = 'test-box'

    // Render the Box component with additional props
    const { getByTestId } = render(<Box data-testid={testId} />)

    // Get the rendered Box component by its test ID
    const boxElement = getByTestId(testId)

    // Assert that the rendered Box component contains the specified test ID
    expect(boxElement).toBeInTheDocument()
  })
})

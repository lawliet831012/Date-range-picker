import '@testing-library/jest-dom/vitest';
import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App';
import { format, add, startOfToday } from 'date-fns';

describe('App', () => {
  render(<App />);
  const header = screen.getByText('Date Range Picker');

  test('renders header correctly', () => {
    expect(header).toBeInTheDocument();
  });
  
  test('renders calendar with correct day labels', () => {
    const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    dayLabels.forEach((label) => {
      const dayLabel = screen.getByText(label);
      expect(dayLabel).toBeInTheDocument();
    });
  });

  test('changes month correctly when clicking previous and next buttons', () => {
    const previousButton = screen.getByText('<');
    const nextButton = screen.getByText('>');
    const monthText = screen.getByText(format(new Date(), 'yyyy MMMM'));

    fireEvent.click(previousButton);
    expect(monthText).toHaveTextContent(format(add(new Date(), { months: -1 }), 'yyyy MMMM'));

    fireEvent.click(nextButton);
    expect(monthText).toHaveTextContent(format(new Date(), 'yyyy MMMM'));
  });

  test('renders today\'s date with correct styling', () => {
    const todayButton = screen.getByText(format(startOfToday(), 'd'));
    expect(todayButton).toHaveStyle('color: #ff9800');
  });
});


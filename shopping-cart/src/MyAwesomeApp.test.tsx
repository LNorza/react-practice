import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyAwesomeApp from './MyAwesomeApp';

describe('MyAwesomeApp', () => {
  // test('should render correctly', () => {
  //   // console.log(document.body);

  //   const { container } = render(<MyAwesomeApp />);
  //   // screen.debug();

  //   const h1 = container.querySelector('h1');
  //   expect(h1?.innerHTML).toContain(' Fernando ');
  // });

  test('should render correctly - Screen', () => {
    // console.log(document.body);

    render(<MyAwesomeApp />);
    screen.debug();

    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.innerHTML).toContain(' Fernando ');
  });
});

import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';
import ProjectsCarousel from '../ProjectsCarousel';

// Mock the projects data
vi.mock('../../data/projects.js', () => ({
  default: [
    {
      slug: 'test-project-1',
      title: 'Test Project 1',
      image: 'test-image-1.png',
      summary: 'This is test project 1'
    },
    {
      slug: 'test-project-2',
      title: 'Test Project 2',
      image: '',
      summary: 'This is test project 2'
    },
    {
      slug: 'test-project-3',
      title: 'Test Project 3',
      image: 'test-image-3.png',
      summary: 'This is test project 3'
    }
  ]
}));

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('ProjectsCarousel', () => {
  beforeEach(() => {
    vi.clearAllTimers();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  test('renders carousel with projects', () => {
    renderWithRouter(<ProjectsCarousel />);
    
    expect(screen.getByRole('region', { name: 'Projects carousel' })).toBeInTheDocument();
    expect(screen.getByText('Test Project 1')).toBeInTheDocument();
    expect(screen.getByText('This is test project 1')).toBeInTheDocument();
  });

  test('shows navigation buttons when multiple projects exist', () => {
    renderWithRouter(<ProjectsCarousel />);
    
    expect(screen.getByRole('button', { name: 'Previous project' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next project' })).toBeInTheDocument();
  });

  test('handles next button click', () => {
    renderWithRouter(<ProjectsCarousel />);

    const nextButton = screen.getByRole('button', { name: 'Next project' });

    act(() => {
      fireEvent.click(nextButton);
    });

    // Should show the second project
    expect(screen.getByText('Test Project 2')).toBeInTheDocument();
  });

  test('handles previous button click', () => {
    renderWithRouter(<ProjectsCarousel />);

    const prevButton = screen.getByRole('button', { name: 'Previous project' });

    act(() => {
      fireEvent.click(prevButton);
    });

    // Should show the last project (wraps around)
    expect(screen.getByText('Test Project 3')).toBeInTheDocument();
  });

  test('handles keyboard navigation', () => {
    renderWithRouter(<ProjectsCarousel />);

    // Test right arrow key
    act(() => {
      fireEvent.keyDown(document, { key: 'ArrowRight' });
    });
    expect(screen.getByText('Test Project 2')).toBeInTheDocument();

    // Test left arrow key
    act(() => {
      fireEvent.keyDown(document, { key: 'ArrowLeft' });
    });
    expect(screen.getByText('Test Project 1')).toBeInTheDocument();
  });

  test('auto-advances slides', async () => {
    renderWithRouter(<ProjectsCarousel interval={1000} />);

    // Initially shows first project
    expect(screen.getByText('Test Project 1')).toBeInTheDocument();

    // Fast-forward time
    await act(async () => {
      vi.advanceTimersByTime(1000);
    });

    // Should show the second project
    expect(screen.getByText('Test Project 2')).toBeInTheDocument();
  });

  test('handles empty image gracefully', () => {
    renderWithRouter(<ProjectsCarousel />);

    const nextButton = screen.getByRole('button', { name: 'Next project' });

    act(() => {
      fireEvent.click(nextButton);
    });

    // Should show project 2 which has empty image
    expect(screen.getByText('Test Project 2')).toBeInTheDocument();
    expect(screen.getByText('This is test project 2')).toBeInTheDocument();

    // Should not have an image element for this project
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2); // Only projects 1 and 3 should have images
  });
});

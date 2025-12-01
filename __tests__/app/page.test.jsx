import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Index from '@/app/page'

const homePage = [
    {
        title: 'Test Starter Page'
    }
]
  
jest.mock('@/lib/api', () => ({
    fetchCrudCollection: jest.fn(() => homePage),
}));

describe('Page', () => {
    it('renders a heading', async () => {
       const jsx = await Index()
        render(jsx);

        const testHomePageHeading = screen.getByText(homePage[0].title)
        expect(testHomePageHeading).toBeInTheDocument();
    });
});
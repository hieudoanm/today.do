import { render } from '@testing-library/react';
import { Home } from './Home';

describe('Home', () => {
	it('should match snapshot', () => {
		const { container } = render(<Home />);
		expect(container).toMatchSnapshot();
	});
});

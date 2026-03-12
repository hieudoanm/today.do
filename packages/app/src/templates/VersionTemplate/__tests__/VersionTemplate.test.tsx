import { render } from '@testing-library/react';
import { VersionTemplate } from '../VersionTemplate';

describe('VersionTemplate', () => {
	it('to match snapshot', () => {
		const { container } = render(<VersionTemplate version="0.0.0" />);
		expect(container).toMatchSnapshot();
	});
});

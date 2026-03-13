import { render } from '@testing-library/react';
import { ErrorTemplate } from '../ErrorTemplate';

describe('ErrorTemplate', () => {
	it('to match snapshot', () => {
		const { container } = render(
			<ErrorTemplate
				error={{
					code: 0,
					message: '',
				}}
				messages={[]}
			/>,
		);
		expect(container).toMatchSnapshot();
	});
});

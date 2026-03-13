import { render } from '@testing-library/react';
import { LandingTemplate } from '../LandingTemplate';

describe('LandingTemplate', () => {
	it('to match snapshot', () => {
		const { container } = render(
			<LandingTemplate
				content={{
					navbar: {
						title: undefined,
						buttonText: '',
						buttonHref: '',
					},
					hero: {
						title: undefined,
						tagline: undefined,
						buttonText: '',
						buttonHref: '',
					},
					cta: {
						title: undefined,
						description: undefined,
						buttonText: '',
						buttonHref: '',
					},
					footer: {
						name: '',
						year: undefined,
					},
				}}
			/>,
		);
		expect(container).toMatchSnapshot();
	});
});

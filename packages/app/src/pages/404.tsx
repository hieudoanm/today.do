import { ErrorTemplate } from '@tasks/templates/ErrorTemplate';
import { NextPage } from 'next';

const messages = [
	'This page seems to have wandered off.',
	'Nothing to see here — just a missing page.',
	'You’ve reached a dead end.',
	'Looks like this link is broken.',
	'We couldn’t find what you were looking for.',
];

const NotFoundPage: NextPage = () => {
	return (
		<ErrorTemplate
			error={{
				code: 404,
				message: 'Page not found',
			}}
			messages={messages}
		/>
	);
};

export default NotFoundPage;

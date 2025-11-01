import { Head, Html, Main, NextScript } from 'next/document';
import { FC } from 'react';

const Document: FC = () => {
	return (
		<Html lang="en" data-theme="nothing">
			<Head />
			<body className="antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;

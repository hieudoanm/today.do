import { GetStaticProps, NextPage } from 'next';
import { VersionTemplate } from '@today.do/templates/VersionTemplate';

type Props = {
	version: string;
};

export const VersionPage: NextPage<Props> = ({ version }) => {
	return <VersionTemplate version={version} />;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	const now = new Date();

	const pad = (n: number) => n.toString().padStart(2, '0');

	const version = [
		now.getFullYear(),
		pad(now.getMonth() + 1),
		pad(now.getDate()),
		pad(now.getHours()),
		pad(now.getMinutes()),
		pad(now.getSeconds()),
	].join('.');

	return {
		props: {
			version,
		},
	};
};

export default VersionPage;

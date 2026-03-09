import type { NextConfig } from 'next';

const NODE_ENV = process.env.NODE_ENV ?? 'development';

const nextConfig: NextConfig = {
	trailingSlash: true,
	reactCompiler: true,
	reactStrictMode: true,
	images: { unoptimized: true },
	basePath: NODE_ENV === 'development' ? '' : '/today.do',
	output: NODE_ENV === 'development' ? 'standalone' : 'export',
	distDir: NODE_ENV === 'development' ? '.next' : '../../docs',
};

export default nextConfig;

import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
	globalIgnores([
		'.next/**',
		'build/**',
		'docs/**',
		'mobile/**',
		'node_modules/**',
		'out/**',
		'src-tauri/**',
		'next-env.d.ts',
		'jest.config.ts',
		'jest.setup.ts',
	]),
	{
		rules: {
			'react-hooks/set-state-in-effect': 'off',
		},
	},
]);

export default eslintConfig;

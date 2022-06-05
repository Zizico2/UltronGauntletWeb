import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import postcssJitProps from 'postcss-jit-props';
import OpenProps from 'open-props';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			css: {
				postcss: {
					plugins: [postcssJitProps(OpenProps)]
				}
			}
		}
	}
};

export default config;

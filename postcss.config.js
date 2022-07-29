module.exports = {
	plugins: [
		require('postcss-import'),
		require('postcss-flexbugs-fixes'),
		require('postcss-preset-env')({
			autoprefixer: {
				flexbox: 'no-2009',
			},
			stage: 3,
		}),
	],
};
/*you need this one.it is not only for tailwind. pls do not 
delete it again 
*/

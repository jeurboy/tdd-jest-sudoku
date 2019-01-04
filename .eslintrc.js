module.exports = {
	parser: 'babel-eslint',
	extends: 'airbnb',
	env: {
		es6: true,
		node: true,
		browser: true,
		jest: true
	},
	settings: {
		'import/resolver': {
			'babel-plugin-root-import': {
				rootPathPrefix: '~'
			}
		},
		polyfills: ['fetch', 'promises'],
		react: {
			pragma: 'React',
			version: '^16.4.0'
		}
	},
	plugins: ['react', 'jsx-a11y', 'import', 'babel'],
	rules: {
		semi: ['error'],
		quotes: ['error', 'single'],
		indent: [
			2,
			'tab',
			{
				SwitchCase: 1
			}
		],
		camelcase: [
			'error',
			{
				properties: 'never'
			}
		],
		curly: ['error', 'all'],
		'no-tabs': 0,
		'no-console': 'warn',
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-one-expression-per-line': 0,
		'no-nested-ternary': 0,
		'func-names': 0,
		'no-shadow': 0,
		'function-paren-newline': 0,
		'object-curly-newline': 0,
		'operator-linebreak': 0,
		'arrow-parens': 0,
		'no-unused-vars': 0,
		'no-useless-constructor': 0,
		'no-param-reassign': 0,
		'spaced-comment': 0,
		'import/prefer-default-export': 0,
		'react/no-unused-prop-types': 0,
		'react/no-unused-state': 'warn',
		'prefer-arrow-callback': 0,
		'array-bracket-spacing': 0,
		'no-confusing-arrow': 0,
		'react/destructuring-assignment': 0,
		'comma-dangle': ['error', 'never'],
		'arrow-body-style': ['error', 'always'],
		'space-before-function-paren': ['error', 'always'],
		'no-underscore-dangle': [
			'error',
			{
				allow: ['_id']
			}
		],
		'import/no-unresolved': [
			2,
			{
				ignore: ['^~/']
			}
		],
		'no-unused-expressions': [
			'error',
			{
				allowTaggedTemplates: true
			}
		],
		'react/jsx-wrap-multilines': [
			'error',
			{
				declaration: 'parens-new-line',
				assignment: 'parens-new-line',
				return: 'parens-new-line',
				arrow: 'parens-new-line',
				condition: 'parens-new-line',
				logical: 'parens-new-line',
				prop: 'ignore'
			}
		],
		'prefer-destructuring': [
			'error',
			{
				VariableDeclarator: {
					array: false,
					object: true
				},
				AssignmentExpression: {
					array: true,
					object: false
				}
			},
			{
				enforceForRenamedProperties: false
			}
		],
		'no-else-return': [0],
		'no-restricted-syntax': [0],
		'no-use-before-define': [0],
		'arrow-body-style': [0],
		'jsx-a11y/no-static-element-interactions': [0],
		'jsx-a11y/no-noninteractive-element-interactions': [0],
		'jsx-a11y/click-events-have-key-events': [0],
		'jsx-a11y/anchor-is-valid': [0],
		'jsx-a11y/anchor-is-valid': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [
			'error',
			{
				extensions: ['.js']
			}
		]
	}
};

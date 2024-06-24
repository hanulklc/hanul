import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': 'Quicksand, sans-serif',
		'--theme-font-family-heading': 'Quicksand, sans-serif',
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '24px',
		'--theme-border-base': '2px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #1cb4eb
		'--color-primary-50': '221 244 252', // #ddf4fc
		'--color-primary-100': '210 240 251', // #d2f0fb
		'--color-primary-200': '198 236 250', // #c6ecfa
		'--color-primary-300': '164 225 247', // #a4e1f7
		'--color-primary-400': '96 203 241', // #60cbf1
		'--color-primary-500': '28 180 235', // #1cb4eb
		'--color-primary-600': '25 162 212', // #19a2d4
		'--color-primary-700': '21 135 176', // #1587b0
		'--color-primary-800': '17 108 141', // #116c8d
		'--color-primary-900': '14 88 115', // #0e5873
		// secondary | #00cae8
		'--color-secondary-50': '217 247 252', // #d9f7fc
		'--color-secondary-100': '204 244 250', // #ccf4fa
		'--color-secondary-200': '191 242 249', // #bff2f9
		'--color-secondary-300': '153 234 246', // #99eaf6
		'--color-secondary-400': '77 218 239', // #4ddaef
		'--color-secondary-500': '0 202 232', // #00cae8
		'--color-secondary-600': '0 182 209', // #00b6d1
		'--color-secondary-700': '0 152 174', // #0098ae
		'--color-secondary-800': '0 121 139', // #00798b
		'--color-secondary-900': '0 99 114', // #006372
		// tertiary | #00ddd1
		'--color-tertiary-50': '217 250 248', // #d9faf8
		'--color-tertiary-100': '204 248 246', // #ccf8f6
		'--color-tertiary-200': '191 247 244', // #bff7f4
		'--color-tertiary-300': '153 241 237', // #99f1ed
		'--color-tertiary-400': '77 231 223', // #4de7df
		'--color-tertiary-500': '0 221 209', // #00ddd1
		'--color-tertiary-600': '0 199 188', // #00c7bc
		'--color-tertiary-700': '0 166 157', // #00a69d
		'--color-tertiary-800': '0 133 125', // #00857d
		'--color-tertiary-900': '0 108 102', // #006c66
		// success | #73bc5c
		'--color-success-50': '234 245 231', // #eaf5e7
		'--color-success-100': '227 242 222', // #e3f2de
		'--color-success-200': '220 238 214', // #dceed6
		'--color-success-300': '199 228 190', // #c7e4be
		'--color-success-400': '157 208 141', // #9dd08d
		'--color-success-500': '115 188 92', // #73bc5c
		'--color-success-600': '104 169 83', // #68a953
		'--color-success-700': '86 141 69', // #568d45
		'--color-success-800': '69 113 55', // #457137
		'--color-success-900': '56 92 45', // #385c2d
		// warning | #fcbc4c
		'--color-warning-50': '255 245 228', // #fff5e4
		'--color-warning-100': '254 242 219', // #fef2db
		'--color-warning-200': '254 238 210', // #feeed2
		'--color-warning-300': '254 228 183', // #fee4b7
		'--color-warning-400': '253 208 130', // #fdd082
		'--color-warning-500': '252 188 76', // #fcbc4c
		'--color-warning-600': '227 169 68', // #e3a944
		'--color-warning-700': '189 141 57', // #bd8d39
		'--color-warning-800': '151 113 46', // #97712e
		'--color-warning-900': '123 92 37', // #7b5c25
		// error | #ec7c24
		'--color-error-50': '252 235 222', // #fcebde
		'--color-error-100': '251 229 211', // #fbe5d3
		'--color-error-200': '250 222 200', // #fadec8
		'--color-error-300': '247 203 167', // #f7cba7
		'--color-error-400': '242 163 102', // #f2a366
		'--color-error-500': '236 124 36', // #ec7c24
		'--color-error-600': '212 112 32', // #d47020
		'--color-error-700': '177 93 27', // #b15d1b
		'--color-error-800': '142 74 22', // #8e4a16
		'--color-error-900': '116 61 18', // #743d12
		// surface | #EEEEEE
		'--color-surface-50': '252 252 252', // #fcfcfc
		'--color-surface-100': '252 252 252', // #fcfcfc
		'--color-surface-200': '251 251 251', // #fbfbfb
		'--color-surface-300': '248 248 248', // #f8f8f8
		'--color-surface-400': '243 243 243', // #f3f3f3
		'--color-surface-500': '238 238 238', // #EEEEEE
		'--color-surface-600': '214 214 214', // #d6d6d6
		'--color-surface-700': '179 179 179', // #b3b3b3
		'--color-surface-800': '143 143 143', // #8f8f8f
		'--color-surface-900': '117 117 117' // #757575
	}
};

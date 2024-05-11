import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const custom_theme: CustomThemeConfig = {
	name: 'custom_theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': 'var(--color-surface-900)',
		'--theme-font-color-dark': 'var(--color-surface-100)',
		'--theme-rounded-base': '4px',
		'--theme-rounded-container': '4px',
		'--theme-border-base': '2px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #1f2833
		'--color-primary-50': '221 223 224', // #dddfe0
		'--color-primary-100': '210 212 214', // #d2d4d6
		'--color-primary-200': '199 201 204', // #c7c9cc
		'--color-primary-300': '165 169 173', // #a5a9ad
		'--color-primary-400': '98 105 112', // #626970
		'--color-primary-500': '31 40 51', // #1f2833
		'--color-primary-600': '28 36 46', // #1c242e
		'--color-primary-700': '23 30 38', // #171e26
		'--color-primary-800': '19 24 31', // #13181f
		'--color-primary-900': '15 20 25', // #0f1419
		// secondary | #c5c6c7
		'--color-secondary-50': '246 246 247', // #f6f6f7
		'--color-secondary-100': '243 244 244', // #f3f4f4
		'--color-secondary-200': '241 241 241', // #f1f1f1
		'--color-secondary-300': '232 232 233', // #e8e8e9
		'--color-secondary-400': '214 215 216', // #d6d7d8
		'--color-secondary-500': '197 198 199', // #c5c6c7
		'--color-secondary-600': '177 178 179', // #b1b2b3
		'--color-secondary-700': '148 149 149', // #949595
		'--color-secondary-800': '118 119 119', // #767777
		'--color-secondary-900': '97 97 98', // #616162
		// tertiary | #4caea9
		'--color-tertiary-50': '228 243 242', // #e4f3f2
		'--color-tertiary-100': '219 239 238', // #dbefee
		'--color-tertiary-200': '210 235 234', // #d2ebea
		'--color-tertiary-300': '183 223 221', // #b7dfdd
		'--color-tertiary-400': '130 198 195', // #82c6c3
		'--color-tertiary-500': '76 174 169', // #4caea9
		'--color-tertiary-600': '68 157 152', // #449d98
		'--color-tertiary-700': '57 131 127', // #39837f
		'--color-tertiary-800': '46 104 101', // #2e6865
		'--color-tertiary-900': '37 85 83', // #255553
		// success | #96bb5d
		'--color-success-50': '239 245 231', // #eff5e7
		'--color-success-100': '234 241 223', // #eaf1df
		'--color-success-200': '229 238 215', // #e5eed7
		'--color-success-300': '213 228 190', // #d5e4be
		'--color-success-400': '182 207 142', // #b6cf8e
		'--color-success-500': '150 187 93', // #96bb5d
		'--color-success-600': '135 168 84', // #87a854
		'--color-success-700': '113 140 70', // #718c46
		'--color-success-800': '90 112 56', // #5a7038
		'--color-success-900': '74 92 46', // #4a5c2e
		// warning | #cea93b
		'--color-warning-50': '248 242 226', // #f8f2e2
		'--color-warning-100': '245 238 216', // #f5eed8
		'--color-warning-200': '243 234 206', // #f3eace
		'--color-warning-300': '235 221 177', // #ebddb1
		'--color-warning-400': '221 195 118', // #ddc376
		'--color-warning-500': '206 169 59', // #cea93b
		'--color-warning-600': '185 152 53', // #b99835
		'--color-warning-700': '155 127 44', // #9b7f2c
		'--color-warning-800': '124 101 35', // #7c6523
		'--color-warning-900': '101 83 29', // #65531d
		// error | #752f52
		'--color-error-50': '234 224 229', // #eae0e5
		'--color-error-100': '227 213 220', // #e3d5dc
		'--color-error-200': '221 203 212', // #ddcbd4
		'--color-error-300': '200 172 186', // #c8acba
		'--color-error-400': '158 109 134', // #9e6d86
		'--color-error-500': '117 47 82', // #752f52
		'--color-error-600': '105 42 74', // #692a4a
		'--color-error-700': '88 35 62', // #58233e
		'--color-error-800': '70 28 49', // #461c31
		'--color-error-900': '57 23 40', // #391728
		// surface | #23252f
		'--color-surface-50': '222 222 224', // #dedee0
		'--color-surface-100': '211 211 213', // #d3d3d5
		'--color-surface-200': '200 201 203', // #c8c9cb
		'--color-surface-300': '167 168 172', // #a7a8ac
		'--color-surface-400': '101 102 109', // #65666d
		'--color-surface-500': '35 37 47', // #23252f
		'--color-surface-600': '32 33 42', // #20212a
		'--color-surface-700': '26 28 35', // #1a1c23
		'--color-surface-800': '21 22 28', // #15161c
		'--color-surface-900': '17 18 23' // #111217
	}
};

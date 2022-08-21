import { Breakpoint, Theme } from "@mui/material";
import { assertUnreachable } from 'utils/error';

const inRange = (start: Breakpoint | number, end: Breakpoint | number) => (`@media (min-width: ${start}) and (max-width: ${end})`)
const isAbove = (key: Breakpoint | number) => (`@media (min-width: ${key})`)
const isBelow = (key: Breakpoint | number) => (`@media (max-width: ${key})`)
const notInRange = (start: Breakpoint | number, end: Breakpoint | number) => (`@media (max-width: ${start}) or (min-width: ${end})`)


const breakpoints: Theme['breakpoints'] = {
	values: {
		xs: 480,
		sm: 640,
		md: 768,
		lg: 1024,
		xl: 1280,
	},
	unit: 'px',
	only: (key) => {
		switch(key){
			case 'xs':
				return inRange('xs', 'sm')
			case 'sm':
				return inRange('sm', 'md')
			case 'md':
				return inRange('md', 'lg')
			case 'lg':
				return inRange('lg', 'xl')
			case 'xl':
				return isAbove('xl')
			default:
				assertUnreachable(key)
				return ''
		}
	},
	between: (start, end) => `@media (min-width: ${start}) and (max-width: ${end})`,
	down: (key) => isBelow(key),
	keys: ['xs', 'sm', 'md', 'lg', 'xl'],
	not: (key) => {
		switch(key){
			case 'xs':
				return notInRange('xs', 'sm')
			case 'sm':
				return notInRange('sm', 'md')
			case 'md':
				return notInRange('md', 'lg')
			case 'lg':
				return notInRange('lg', 'xl')
			case 'xl':
				return isBelow('xl')
			default:
				assertUnreachable(key)
				return ''
		}
	},
	up: (key) => isAbove(key),
}

export default breakpoints
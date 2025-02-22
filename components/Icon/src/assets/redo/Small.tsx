import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
const SvgSmall = (
    props: SVGProps<SVGSVGElement> & {
        color?: keyof ThemeType['palette']['actions'] | `#${string}` | `rgba(${string})`;
    },
) => {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
            <path
                fill={
                    theme.palette.actions[props.color as keyof ThemeType['palette']['actions']] ??
                    props.color ??
                    '#656565'
                }
                fillRule="evenodd"
                d="M12.891 2.892a.625.625 0 0 1 .884 0l4.167 4.166a.625.625 0 0 1 0 .884l-4.167 4.167a.625.625 0 0 1-.884-.884L16.616 7.5 12.89 3.775a.625.625 0 0 1 0-.883Z"
                clipRule="evenodd"
            />
            <path
                fill={
                    theme.palette.actions[props.color as keyof ThemeType['palette']['actions']] ??
                    props.color ??
                    '#656565'
                }
                fillRule="evenodd"
                d="M4.233 8.4a5.2 5.2 0 0 1 3.683-1.525h8.75a.625.625 0 1 1 0 1.25h-8.75a3.958 3.958 0 0 0 0 7.917h2.917a.625.625 0 0 1 0 1.25H7.916A5.208 5.208 0 0 1 4.233 8.4"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;

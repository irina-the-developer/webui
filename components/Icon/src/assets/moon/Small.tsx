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
                d="M9.314 3.583a6.453 6.453 0 1 0 7.103 7.103 5.057 5.057 0 0 1-8.703-1.332 5.06 5.06 0 0 1 1.6-5.77ZM2.5 10A7.5 7.5 0 0 1 10 2.5c.5 0 .75.399.793.716a.92.92 0 0 1-.422.906 4.011 4.011 0 1 0 5.507 5.508.92.92 0 0 1 .906-.423c.318.043.716.293.716.793a7.5 7.5 0 0 1-15 0"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;

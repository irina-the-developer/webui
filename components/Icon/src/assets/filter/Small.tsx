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
                d="M17.69 6.363a.53.53 0 0 1-.53.53H3.03a.53.53 0 0 1 0-1.06h14.13a.53.53 0 0 1 .53.53m-2.12 3.533a.53.53 0 0 1-.53.53H5.15a.53.53 0 1 1 0-1.06h9.89a.53.53 0 0 1 .53.53m-2.119 3.533a.53.53 0 0 1-.53.53H7.27a.53.53 0 1 1 0-1.06h5.652a.53.53 0 0 1 .53.53Z"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;

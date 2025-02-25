import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { Paths } from 'type-fest';

import get from 'lodash/get';
const SvgMedium = (
    props: SVGProps<SVGSVGElement> & {
        color?: Paths<ThemeType['palette'], { leavesOnly: true }> | 'currentColor' | `#${string}` | `rgba(${string})`;
    },
) => {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                fillRule="evenodd"
                d="M2.93 11.2c.072-4.96 4.146-8.95 9.15-8.95a9.16 9.16 0 0 1 7.813 4.357.75.75 0 0 1-1.277.786A7.66 7.66 0 0 0 12.08 3.75c-4.185 0-7.575 3.328-7.648 7.448l.4-.397a.75.75 0 1 1 1.057 1.065l-1.68 1.666a.75.75 0 0 1-1.056 0l-1.68-1.666A.75.75 0 1 1 2.528 10.8zm16.856-.733a.75.75 0 0 1 1.055 0l1.686 1.666a.75.75 0 1 1-1.054 1.067l-.41-.405c-.07 4.965-4.16 8.955-9.18 8.955a9.2 9.2 0 0 1-7.842-4.356.75.75 0 1 1 1.277-.788 7.7 7.7 0 0 0 6.565 3.644c4.206 0 7.61-3.333 7.68-7.453l-.408.403a.75.75 0 1 1-1.055-1.067z"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgMedium;

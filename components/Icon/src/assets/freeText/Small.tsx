import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { Paths } from 'type-fest';

import get from 'lodash/get';
const SvgSmall = (
    props: SVGProps<SVGSVGElement> & {
        color?: Paths<ThemeType['palette'], { leavesOnly: true }> | 'currentColor' | `#${string}` | `rgba(${string})`;
    },
) => {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                fillRule="evenodd"
                d="M11.35 3.805c.088-.315-.115-.678-.442-.68q-.603-.004-1.285-.003h-.08c-1.61 0-2.873 0-3.858.132-1.007.136-1.803.42-2.427 1.043-.625.624-.907 1.42-1.042 2.428-.133.984-.133 2.246-.133 3.857v.08c0 1.61 0 2.873.133 3.858.135 1.007.418 1.803 1.042 2.427s1.42.907 2.428 1.042c.984.133 2.246.133 3.857.133h.08c1.61 0 2.873 0 3.858-.133 1.007-.135 1.803-.418 2.427-1.042s.907-1.42 1.042-2.428c.133-.984.133-2.246.133-3.857v-.08c0-.814 0-1.539-.017-2.184a.5.5 0 0 0-.568-.475.527.527 0 0 0-.478.522c.016.622.017 1.34.017 2.177 0 1.659-.002 2.85-.123 3.758-.12.892-.35 1.43-.746 1.827-.398.398-.935.626-1.827.746-.907.121-2.099.122-3.758.122-1.66 0-2.85-.001-3.758-.122-.892-.12-1.43-.35-1.828-.746-.397-.398-.625-.935-.745-1.827-.121-.907-.122-2.099-.122-3.758 0-1.66 0-2.85.122-3.758.12-.892.35-1.43.746-1.827.398-.398.935-.626 1.827-.746.907-.121 2.099-.123 3.758-.123q.708-.001 1.31.004a.484.484 0 0 0 .456-.367Z"
                clipRule="evenodd"
            />
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                d="M8.499 8c-.226 0-.436 0-.608.025a.88.88 0 0 0-.554.276c-.154.17-.208.375-.232.57-.022.182-.022.409-.022.664v.299a.393.393 0 1 0 .786 0v-.277c0-.285 0-.462.016-.592a.5.5 0 0 1 .024-.115.1.1 0 0 1 .012-.024l.007-.004a.3.3 0 0 1 .08-.02c.106-.015.256-.016.516-.016h.655v4.453h-.917a.393.393 0 0 0 0 .786h2.881a.393.393 0 0 0 0-.786H9.965V8.786h.654c.26 0 .41 0 .517.016.048.008.07.016.08.02l.005.003a.1.1 0 0 1 .013.025.5.5 0 0 1 .024.115c.016.13.016.307.016.592v.277a.393.393 0 1 0 .786 0v-.3c0-.255 0-.48-.022-.663-.023-.195-.078-.4-.232-.571a.9.9 0 0 0-.554-.275A4 4 0 0 0 10.645 8zm9.249-3.856-.672-.2a1.72 1.72 0 0 1-1.18-1.18l-.2-.67c-.073-.236-.455-.236-.527 0l-.2.67a1.72 1.72 0 0 1-1.18 1.18l-.673.2c-.109.037-.2.145-.2.254s.073.218.2.254l.672.2a1.72 1.72 0 0 1 1.18 1.18l.2.671c.037.11.146.2.255.2a.27.27 0 0 0 .254-.2l.2-.671a1.72 1.72 0 0 1 1.18-1.18l.673-.2c.108-.036.2-.145.2-.254s-.055-.217-.182-.254m-2.307 1.58a2.32 2.32 0 0 0-1.308-1.308 2.32 2.32 0 0 0 1.308-1.306c.236.599.708 1.07 1.308 1.306-.6.236-1.072.708-1.308 1.307Z"
            />
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                d="M15.441 5.723a2.32 2.32 0 0 0-1.308-1.307 2.32 2.32 0 0 0 1.308-1.306c.236.599.708 1.07 1.308 1.306-.6.236-1.072.708-1.308 1.307"
            />
        </svg>
    );
};
export default SvgSmall;

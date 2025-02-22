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
                d="M6.917 2.708h6.166c.75 0 1.374 0 1.87.067.522.07.995.225 1.375.604.379.38.533.853.604 1.375.066.496.066 1.121.066 1.87v6.07l1.261 1.3.003.004.006.005.006.007.005.005.009.008.008.01.004.004.007.007.007.008.007.009.01.012c.31.359.586.895.623 1.431v.004l.003.019v.01l.001.012v.096c0 .108 0 .266-.004.333a2.29 2.29 0 0 1-2.142 2.142c-.073.005-.154.005-.259.005H3.447c-.105 0-.185 0-.258-.005a2.29 2.29 0 0 1-2.143-2.142 8 8 0 0 1-.004-.331v-.098l.001-.011v-.01l.003-.02v-.004c.038-.536.314-1.072.624-1.43l.01-.013.007-.008.008-.009.006-.007.003-.005.01-.008.008-.009.004-.005.006-.007.006-.005.004-.004 1.26-1.3v-6.07c0-.749 0-1.374.067-1.869.07-.523.225-.996.604-1.375.38-.38.853-.535 1.375-.605.496-.067 1.12-.067 1.869-.067M3.892 13.572 2.63 14.874c-.19.211-.328.522-.338.731v.186l.001.108a1.04 1.04 0 0 0 .975.973c.028.003.065.003.2.003h13.064c.134 0 .172 0 .2-.003a1.04 1.04 0 0 0 .974-.973v-.029l.002-.214v-.05c-.01-.21-.149-.521-.339-.732l-1.261-1.302zm11.855-1.25V6.667c0-.804-.001-1.344-.055-1.746-.052-.384-.141-.55-.25-.658s-.273-.197-.657-.25c-.402-.053-.943-.055-1.746-.055H6.961c-.804 0-1.344.002-1.746.056-.384.052-.55.141-.658.25s-.198.273-.25.657c-.054.402-.055.942-.055 1.746v5.655zM1.943 15.02l-.025-.01.007.004zm5.35.397a.625.625 0 0 1 .625-.625h4.166a.625.625 0 1 1 0 1.25H7.917a.625.625 0 0 1-.625-.625Z"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;

import * as React from 'react';
import type { SVGProps } from 'react';
const SvgXsmall = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
        <path
            fill="#656565"
            fillRule="evenodd"
            d="M10.98 5.647a.5.5 0 0 1 .707 0l4 4a.5.5 0 0 1 0 .706l-4 4a.5.5 0 1 1-.707-.706l3.147-3.147h-9.46a.5.5 0 1 1 0-1h9.46L10.98 6.353a.5.5 0 0 1 0-.706"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgXsmall;

import * as React from 'react';
import type { SVGProps } from 'react';
const SvgXsmall = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
        <path
            fill="#656565"
            fillRule="evenodd"
            d="M14.667 8A6.666 6.666 0 1 1 1.334 8a6.666 6.666 0 0 1 13.333 0M8 5.167a.75.75 0 0 0-.75.75.5.5 0 0 1-1 0 1.75 1.75 0 1 1 3.006 1.219l-.176.178q-.203.195-.381.411c-.147.188-.199.326-.199.442v.5a.5.5 0 0 1-1 0v-.5c0-.437.204-.791.41-1.056.152-.196.344-.386.5-.542l.128-.13A.75.75 0 0 0 8 5.167m0 6.166A.666.666 0 1 0 8 10a.666.666 0 0 0 0 1.333"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgXsmall;

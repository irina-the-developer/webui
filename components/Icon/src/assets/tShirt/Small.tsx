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
                d="M5.328 1.8a2.2 2.2 0 0 1 1.686-.222l.386.102c.455.12.847.41 1.097.808.717 1.13 2.272 1.13 2.988 0 .253-.397.642-.69 1.097-.81l.386-.102a2.2 2.2 0 0 1 1.687.224c.406.238.963.582 1.37.909q.18.145.362.312l.031.03c.343.316.651.601.866.88.243.315.4.66.398 1.096-.002.451-.187.808-.448 1.128-.238.292-.579.6-.969.95l-.177.16c-.428.387-.501.47-.542.562-.043.097-.054.218-.054.81v6.322c0 .49 0 .917-.05 1.275-.055.391-.174.742-.434 1.067-.494.618-1.126.733-1.877.87l-.101.019c-1.003.182-2.02.273-3.039.27-1.197 0-2.224-.12-3.038-.27l-.101-.018c-.75-.137-1.383-.252-1.877-.87-.26-.326-.379-.676-.434-1.067-.05-.358-.05-.785-.05-1.275V8.637c0-.592-.012-.712-.054-.809-.041-.093-.115-.176-.542-.561l-.146-.132-.032-.029c-.39-.35-.73-.658-.968-.95-.26-.321-.446-.678-.448-1.128-.003-.436.154-.782.397-1.097.216-.279.524-.564.866-.88l.032-.03q.18-.167.361-.312c.408-.327.965-.671 1.371-.91m1.385.922a1.02 1.02 0 0 0-.787.1c-.4.234-.893.542-1.229.81a6 6 0 0 0-.298.26c-.384.355-.617.572-.764.763-.126.163-.152.259-.151.367 0 .092.026.196.181.386.174.213.446.46.876.848l.147.132.065.06c.324.291.612.55.768.906.154.354.154.744.153 1.193v6.377c0 .537.001.88.039 1.147.033.24.092.374.186.492.192.24.37.3 1.269.464.75.138 1.706.251 2.823.251 1.118 0 2.073-.113 2.824-.25.899-.167 1.077-.225 1.269-.465.094-.118.153-.251.186-.492.038-.267.04-.61.04-1.148V8.546c-.002-.45-.002-.84.152-1.193.156-.357.444-.615.768-.907l.065-.059.146-.132c.43-.388.702-.635.876-.848.156-.19.181-.294.182-.386 0-.108-.025-.205-.15-.367-.148-.19-.381-.408-.766-.763a6 6 0 0 0-.297-.26c-.336-.268-.83-.576-1.23-.81a1.02 1.02 0 0 0-.786-.1l-.387.102a.68.68 0 0 0-.398.299 2.923 2.923 0 0 1-4.987 0 .68.68 0 0 0-.398-.3z"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default SvgSmall;

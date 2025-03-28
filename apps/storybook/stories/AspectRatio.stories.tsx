import { useState } from 'react';
import { AspectRatio } from '../../../components/AspectRatio/src';

export default {
    title: 'Compositions/Aspect Ratio',
    component: AspectRatio,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],

    decorators: [
        (Story: React.FC<any>, { args }: any) => {
            const [value, setValue] = useState('1:1');
            return (
                <div style={{ display: 'flex', width: 'auto', marginTop: '500px' }}>
                    <Story args={{ ...args, value, onChange: setValue }} />
                </div>
            );
        },
    ],
};

export const Main = {
    args: {
        options: ['1:1', '7:9', '13:19', '4:7', '5:12', '9:7', '19:13', '7:4', '12:5'],
        defaultOptions: ['7:9', '1:1', '9:7'],
        sizeForRatio: (aspectRatio: string) => {
            const [width, height] = aspectRatio.split(':').map(Number); // '7:9' => [7, 9]
            const ratio = width / height;
            const maxSide = 1024;

            if (width >= height) {
                return {
                    width: maxSide,
                    height: Math.round(maxSide / ratio),
                };
            } else {
                return {
                    width: Math.round(maxSide * ratio),
                    height: maxSide,
                };
            }
        },
    },
};

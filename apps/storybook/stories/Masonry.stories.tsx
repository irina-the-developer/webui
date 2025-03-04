import { Masonry } from '../../../components/Masonry/src';

export default {
    title: 'Layout/Masonry',
    component: Masonry,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
};

const images = [
    'https://picsum.photos/200/300?image=1050',
    'https://picsum.photos/400/400?image=1039',
    'https://picsum.photos/400/400?image=1080',
    'https://picsum.photos/200/200?image=997',
    'https://picsum.photos/500/400?image=287',
    'https://picsum.photos/400/500?image=955',
    'https://picsum.photos/200/300?image=916',
    'https://picsum.photos/300/300?image=110',
    'https://picsum.photos/300/300?image=206',
];

export const Main = {
    args: {
        children: images.map((image, i) => <img key={i} src={image} style={{ width: '100%', display: 'block' }} />),
        columnsCount: 4,
        gutter: 'm',
    },
};

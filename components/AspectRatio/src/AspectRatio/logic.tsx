import { useTheme } from '@hautechai/webui.themeprovider';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AspectRatioProps } from '.';

export const getBoxSize = (aspectRatio: string, maxPxSize: number) => {
    const [width, height] = aspectRatio.split(':').map(Number);
    return width >= height
        ? { width: maxPxSize, height: Math.round((maxPxSize / width) * height) }
        : { width: Math.round((maxPxSize / height) * width), height: maxPxSize };
};

const useLogic = (props: AspectRatioProps) => {
    const [selected, setSelected] = useState<string>(props.value ?? props.defaultOptions[0]);

    const ref = useRef<HTMLDivElement>(null);
    const [modalSelected, setModalSelected] = useState<string>(props.value ?? props.defaultOptions[0]);
    const [modalPosition, setModalPosition] = useState({ left: 0, top: 0 });

    useEffect(() => {
        if (props.value) {
            setSelected(props.value);
            setModalSelected(props.value);
        }
    }, [props.value]);

    const displayOptions = useMemo(() => {
        if (selected === 'custom') {
            return props.defaultOptions;
        }
        const toNumber = (ratio: string) => {
            const [w, h] = ratio.split(':').map(Number);
            return w / h;
        };
        if (toNumber(selected) <= toNumber(props.defaultOptions[0])) {
            return [selected, props.defaultOptions[1], props.defaultOptions[2]];
        }
        if (toNumber(selected) >= toNumber(props.defaultOptions[2])) {
            return [props.defaultOptions[0], props.defaultOptions[1], selected];
        }
        return [props.defaultOptions[0], selected, props.defaultOptions[2]];
    }, [props.defaultOptions, selected]);

    const theme = useTheme();

    useEffect(() => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
            setModalPosition({
                left: rect.right + theme.foundation.spacing.l,
                top: rect.top - 420, // todo check how modal position can be dynamic according to screen size and position of the element
            });
        }
    }, [theme, ref]);

    const onTabChange = useCallback(
        (event: React.MouseEvent<HTMLDivElement, MouseEvent>, value: string) => {
            setSelected(value);
            if (value !== 'custom') {
                props.onChange?.(value);
            }
        },
        [props.onChange],
    );

    const onCloseModal = useCallback(
        (value?: string) => {
            setSelected(value ?? modalSelected);
            props.onChange?.(value ?? modalSelected);
        },
        [props.value, modalSelected],
    );

    const isModalOpen = selected === 'custom';

    return {
        ref,
        selected,
        getBoxSize,
        onTabChange,
        modalPosition,
        onCloseModal,
        isModalOpen,
        modalSelected,
        setModalSelected,
        displayOptions,
    };
};

export default useLogic;

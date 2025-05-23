import { Column } from '@hautechai/webui.column';
import { Row } from '@hautechai/webui.row';
import { css, styled } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';
import React, { useCallback, useRef } from 'react';
import { LockIcon } from '@hautechai/webui.icon';

const Container = styled.div<{ disabled?: boolean; noStretch?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.foundation.spacing.s}px;
    ${({ noStretch }) =>
        !noStretch &&
        css`
            flex: 1;
        `}

    cursor: default;
`;

type LockedProps = {
    locked?: true;
    onLockedClick?: () => void;
};

export type FieldProps = LockedProps & {
    label?: string;
    labelPosition?: 'left' | 'right' | 'top';
    error?: string;
    caption?: string;
    children: React.ReactNode;
};

export const Field = (props: FieldProps) => {
    const { label, labelPosition = 'top', error, caption, locked, onLockedClick, children } = props;
    const ref = useRef<HTMLDivElement>(null);

    const handleClick = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            if (onLockedClick) {
                event.preventDefault();
                onLockedClick();
            }
        },
        [onLockedClick],
    );

    const Main = labelPosition === 'top' ? Column : Row;

    return (
        <Container onClick={handleClick} ref={ref} noStretch={labelPosition === 'right'}>
            <Main spacing={labelPosition === 'top' ? 'm' : 'ml'} stretch reverse={labelPosition === 'right'}>
                <Row spacing="s" align="center">
                    {label && (
                        <Typography variant="LabelSmallRegular" color={'layout.onSurface.secondary'}>
                            {label}
                        </Typography>
                    )}
                    {locked && <LockIcon size={16} color="layout.onSurface.secondary" />}
                </Row>
                <Row stretch spacing="s" align="center">
                    {React.Children.map(children, (child) => {
                        if (React.isValidElement(child)) {
                            return React.cloneElement(child, {
                                hasError: !!error,
                            } as any);
                        }
                        return child;
                    })}
                </Row>
            </Main>
            {caption && (
                <Typography variant="CaptionRegular" color="layout.onSurface.secondary">
                    {caption}
                </Typography>
            )}
            {error && (
                <Typography variant="CaptionRegular" color="actions.error">
                    {error}
                </Typography>
            )}
        </Container>
    );
};

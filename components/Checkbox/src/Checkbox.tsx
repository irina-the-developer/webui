import { CheckIcon } from '@hautechai/webui.icon';
import { styled } from '@hautechai/webui.themeprovider';
import { PropsWithChildren } from 'react';

const StyledCheckboxContainer = styled.label<Pick<CheckboxProps, 'checked'>>`
    cursor: pointer;

    display: inline-block;
    line-height: 24px;
    position: relative;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

const StyledInput = styled.input`
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
`;

const StyledCheckmarkContainer = styled.span`
    top: 0;
    left: 0;
    display: flex;
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    border-radius: ${({ theme }) => theme.foundation.cornerRadius.s}px;
    border-style: solid;
    border-width: ${({ theme }) => theme.foundation.stroke.standard}px;
    border-color: ${({ theme }) => theme.palette.layout.strokes};

    background-color: ${({ theme }) => theme.palette.layout.surfaceLow};

    *:checked ~ & {
        border-color: ${({ theme }) => theme.palette.actions.primary};
        color: ${({ theme }) => theme.palette.actions.primary};
    }
`;

const StyledCheckmark = styled(CheckIcon)`
    display: none;
    *:checked ~ * > & {
        display: block;
    }
`;

export type CheckboxProps = PropsWithChildren<{
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    readOnly?: boolean;
}>;

export const Checkbox = (props: CheckboxProps) => {
    const { checked, onChange, ...rest } = props;
    return (
        <StyledCheckboxContainer {...rest}>
            <StyledInput
                type="checkbox"
                checked={checked !== undefined ? !!checked : undefined}
                onChange={(e) => props?.onChange?.(e.target.checked)}
                readOnly={props.readOnly}
            />
            <StyledCheckmarkContainer onClick={(e) => e.stopPropagation()}>
                <StyledCheckmark size={20} />
            </StyledCheckmarkContainer>
        </StyledCheckboxContainer>
    );
};

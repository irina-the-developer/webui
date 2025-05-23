import { Button } from '@hautechai/webui.button';
import { UploadIcon } from '@hautechai/webui.icon';
import { css, styled } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';
import React from 'react';
import { useDropzone } from 'react-dropzone';

const FileInputContainer = styled.div<Pick<FileInputProps, 'stretch'>>`
    display: flex;
    width: 320px;
    height: 120px;
    padding: ${({ theme }) => theme.foundation.spacing.xxxl}px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.foundation.spacing.xl}px;
    flex-shrink: 0;

    border-radius: ${({ theme }) => theme.foundation.cornerRadius.l}px;
    border-color: ${({ theme }) => theme.palette.layout.strokes};
    border-style: dashed;
    border-width: ${({ theme }) => theme.foundation.stroke.thick}px;
`;

const ButtonFileInput = styled.div<Pick<FileInputProps, 'stretch'>>`
    display: flex;
`;

export type FileInputProps = {
    /** Callback function that is called when files are selected */
    onChange: (files: File[]) => void;

    /** Set accepted file types. Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information. Keep in mind that mime type determination is not reliable across platforms. CSV files, for example, are reported as text/plain under macOS but as application/vnd.ms-excel under Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276) */
    accept?: Record<string, string[]>;

    /** @property Maximum number of files that can be selected */
    maxFiles?: number;

    /** @property Maximum file size (in bytes) */
    maxSize?: number;

    /** @property Label for the file input */
    label?: string;

    /** @property Optional label to display when files are being dragged over the input */
    labelDragActive?: string;

    /** @property Optional label for upload button */
    labelButton?: string;

    variant?: 'dropzone' | 'button';
    stretch?: boolean;
};

export const FileInput: React.FC<FileInputProps> = (props) => {
    const {
        label = 'Drag and drop your file here', //
        labelDragActive = 'Drop your file here',
        labelButton = 'Open file',
    } = props;

    const onDrop = (acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            props.onChange(acceptedFiles);
        }
    };

    const { getRootProps, getInputProps, isDragActive, isDragReject, isDragAccept, fileRejections } = useDropzone({
        onDrop,
        accept: { 'image/*': [] },
        maxFiles: props.maxFiles,
        maxSize: props.maxSize,
    });

    return props.variant === 'button' ? (
        <ButtonFileInput {...getRootProps({})}>
            <input {...getInputProps()} />
            <Button label={labelButton} leadingIcon={<UploadIcon size={20} />} stretch={props.stretch} />
        </ButtonFileInput>
    ) : (
        <FileInputContainer {...getRootProps({})}>
            <input {...getInputProps()} />
            <Typography variant="H1" color="layout.onSurface.primary">
                {isDragActive ? labelDragActive : label}
            </Typography>
            <Button label={labelButton} leadingIcon={<UploadIcon size={20} />} />
            {/* {isDragActive && <p>Drop here...</p>}
            {isDragReject && <p>Rejected...</p>}
            {isDragAccept && <p>Accepted...</p>}
            {fileRejections && JSON.stringify(fileRejections)} */}
        </FileInputContainer>
    );
};

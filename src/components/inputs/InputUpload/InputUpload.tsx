import React, { useEffect, useState } from "react";
import { DropzoneOptions, useDropzone } from "react-dropzone";
import { Control, useController } from "react-hook-form";
import { Container, thumb, thumbInner, thumbsContainer } from "./style";

type Props = {
  name: string;
  control: Control<any>;
  // onErrorCus: boolean;
} & Partial<DropzoneOptions>;

const InputUpload = ({ name, control }: Props) => {
  const {
    field: { onChange, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  const [uploadFiles, setUploadFiles] = useState([]);

  const { getInputProps, getRootProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      onDrop: (acceptedFiles: any) => {
        setUploadFiles(
          acceptedFiles.map((file: any) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
        onChange(acceptedFiles);
      },
      accept: {
        "image/*": [".jpeg", ".png", ".svg"],
      },
    });

  const previewImage = uploadFiles.map((file: any, key: React.Key) => {
    return (
      <div style={thumb} key={key}>
        <div style={thumbInner}>
          <img
            src={file.preview}
            onLoad={() => {
              URL.revokeObjectURL(file.preview);
            }}
          />
        </div>
      </div>
    );
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () =>
      uploadFiles.forEach((file: any) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <Container
          $isInvalid={invalid}
          {...getRootProps({ isFocused, isDragAccept, isDragReject })}
        >
          {uploadFiles.length > 0 ? (
            <aside style={thumbsContainer}>{previewImage}</aside>
          ) : (
            <svg
              className="w-10 h-10 mb-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
          )}

          <input id={name} name={name} ref={ref} {...getInputProps()} />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG (MAX. 800x400px)
          </p>
        </Container>
        {error?.message && (
          <div className="flex w-full justify-center pt-5 content-center">
            <div className="text-xs text-red-500">{error?.message}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default InputUpload;

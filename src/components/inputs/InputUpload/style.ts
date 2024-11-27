import { DropzoneState } from "react-dropzone";
import styled from "@emotion/styled";

const getColor = (props: any) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isFocused) {
    return "#2196f3";
  }
  return "#1d4ed8";
};

type Arguments = {
  $isInvalid: boolean;
} & Partial<DropzoneState>;

export const thumbsContainer = {
  display: "flex",
  marginTop: 16,
};

export const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
};

export const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

export const imgUpload = {
  display: "block",
  width: "auto",
  height: "100%",
};

export const Container = styled.div<Arguments>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 10px;
  border-color: ${(props: any) =>
    getColor({
      ...props,
      isDragReject: props.isDragReject || props.$isInvalid,
    })};
  border-style: dashed;
  color: #000;
  outline: none;
  transition: border 0.24s ease-in-out;
  background: #fff;
`;

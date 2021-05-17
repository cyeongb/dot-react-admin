import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  NumberInput,
  required,
  PasswordInput,
  ImageInput,
  ImageField,
  DateTimeInput,
  FileInput,
  FileField,
} from "react-admin";

import { Typography, Box } from "@material-ui/core";

const Separator = () => <Box pt="1em" />;

const ProductCreate = (props) => {
  return (
    <Create title="글 작성 게시판" {...props}>
      <SimpleForm>
        <TextInput
          source="title"
          placeholder="제목"
          title="제목"
          validate={required()}
        />
        <TextInput multiline source="body" placeholder="내용" title="내용" />
        {/* <TextInput source="name" placeholder="이름" title="이름" /> */}
        {/* <PasswordInput
          source="password"
          placeholder="비밀번호"
          title="비밀번호"
          validate={required()}
        />
        <Separator />
        <NumberInput source="x" placeholder="x 좌표" title="x" />
        <NumberInput source="y" placeholder="y 좌표" title="y" />
        <Separator />
      
        <FileInput source="pictures" accept="image/*">
          <FileField source="src" title="title" />
        </FileInput> */}
      </SimpleForm>
    </Create>

    // 글 작성 완료 후 바로 글list 페이지로 이동하게 구현하기
  );
};

export default ProductCreate;

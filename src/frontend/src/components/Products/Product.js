import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  FormWithRedirect,
  PasswordInput,
  NumberInput,
  required,
  DeleteButton,
  EditButton,
  Datagrid,
  DateTimeInput,
  ImageField,
  ImageInput,
  FileInput,
  FileField,
} from "react-admin";

const Product = (props) => {
  console.log("ProductEdit() props > ", props);
  return (
    <Edit title="글 보기 " {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput disabled source="title" placeholder="제목" title="제목" />
        <TextInput disabled source="name" placeholder="이름" title="이름" />
        <TextInput
          disabled
          multiline
          source="body"
          placeholder="내용"
          title="내용"
        />
        {/* 비밀번호 일치 validation check 하기  */}
        <PasswordInput
          disabled
          source="password"
          placeholder="비밀번호"
          title="비밀번호"
          validate={required()}
        />
        <NumberInput disabled source="x" placeholder="x 좌표" title="x" />
        <NumberInput disabled source="y" placeholder="y 좌표" title="y" />
        <DateInput disabled label="Published" source="publishedAt" />
        <FileInput
          disabled
          source="pictures"
          accept="image/*"
          placeholder="사진 첨부 클릭 또는 드래그 "
        >
          {/* accept 가 empty면 모든 파일 type이 지원됩니다. */}
          <FileField source="src" title="title" />
        </FileInput>
        <EditButton />
        <DeleteButton />
      </SimpleForm>
    </Edit>
  );
};

export default Product;

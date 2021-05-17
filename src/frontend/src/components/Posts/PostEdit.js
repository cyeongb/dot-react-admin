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
  DateTimeInput,
  ImageInput,
  ImageField,
  FileInput,
  FileField,
} from "react-admin";

const PostEdit = (props) => {
  console.log("PostEdit() props > ", props);
  return (
    <Edit title="글 수정하기 " {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="title" placeholder="제목" title="제목" />
        <TextInput source="name" placeholder="이름" title="이름" />
        <TextInput multiline source="body" placeholder="내용" title="내용" />
        {/* 비밀번호 일치 validation check 하기  */}
        <PasswordInput
          source="password"
          placeholder="비밀번호"
          title="비밀번호"
          validate={required()}
        />
        <NumberInput source="x" placeholder="x 좌표" title="x" />
        <NumberInput source="y" placeholder="y 좌표" title="y" />
        <FileInput source="pictures" accept="image/*">
          <FileField source="src" title="title" />
        </FileInput>
        <DateInput label="Published" source="publishedAt" />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;

import React from 'react'
import { Filter ,TextInput ,ReferenceInput ,SelectInput ,BooleanInput ,SearchInput ,DateInput ,DateTimeInput } from 'react-admin';

const PostFilter = (props) => {

    return(
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
        <BooleanInput source="is_published" alwaysOn />
        <DateInput source="publishedAt"  />
    </Filter>
    )
};

export default PostFilter

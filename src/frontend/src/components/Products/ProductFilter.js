import React from 'react'
import { Filter ,TextInput ,ReferenceInput ,SelectInput ,BooleanInput ,SearchInput ,DateInput ,DateTimeInput } from 'react-admin';

const ProductFilter = (props) => {

    return(
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
        <BooleanInput source="is_published" alwaysOn />
        <DateInput source="publishedAt"  />
    </Filter>
    )
};

export default ProductFilter

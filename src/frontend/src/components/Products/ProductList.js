import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  DateTimeInput
} from 'react-admin';
import ProductListActions from './ProductListActions';
import ProductFilter from './ProductFilter';
const ProductList = ({ permissions, ...props }) => {
  console.log('ProductList() props : ', props);
  return (
    <div>
      <List
        {...props}
        title='Product Management'
        actions={<ProductListActions permissions={permissions} />}
        filters={<ProductFilter />}
        filterDefaultValues={{ is_published: true }}
        sort={{ field: 'publishedAt', order: 'DESC' }} //제일 최근에 작성한 글이 맨 위로 올라오도록
      >
        <Datagrid optimized rowClick="show">
          <TextField source='id' />
          <TextField source='title' />
          <TextField source='name' />
          <DateField source='publishedAt' />
      
        </Datagrid>
      </List>
    </div>
  );
};

export default ProductList;

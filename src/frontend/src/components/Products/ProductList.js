import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  DateTimeInput,
} from "react-admin";
import ProductListActions from "./ProductListActions";
import ProductFilter from "./ProductFilter";
const ProductList = ({ permissions, ...props }) => {
  console.log("ProductList() props : ", props);
  return (
    <div>
      <List
        {...props}
        title="Product Management"
        actions={<ProductListActions permissions={permissions} />}
        filters={<ProductFilter />}
        filterDefaultValues={{ is_published: true }}
        sort={{ field: "id", order: "DESC" }}
      >
        <Datagrid optimized rowClick="show">
          <TextField source="id" />
          <TextField source="title" />
          <TextField source="body" />
          {/* <TextField source="name" /> */}
        </Datagrid>
      </List>
    </div>
  );
};

export default ProductList;

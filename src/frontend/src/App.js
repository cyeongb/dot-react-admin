import { Admin, Resource } from "react-admin";

import restDataProvider from "./api/RestDataProvider";
import PostList from "./components/Posts/PostList";
import PostCreate from "./components/Posts/PostCreate";
import PostEdit from "./components/Posts/PostEdit";
import Post from "./components/Posts/Post";
// import PostFilter from './components/Posts/PostFilter'
// import authProvider from './components/Auth/AuthProvider';

import ProductList from "./components/Products/ProductList";
import ProductCreate from "./components/Products/ProductCreate";
import ProductEdit from "./components/Products/ProductEdit";
import Product from "./components/Products/Product";

function App() {
  return (
    // <Admin dataProvider={springRestProvider('http://localhost:8080')} authProvider={authProvider}>
    <Admin dataProvider={restDataProvider("http://localhost:8080")}>
      <Resource
        name="posts"
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
        show={Post}
      />
      <Resource
        name="products"
        list={ProductList}
        create={ProductCreate}
        edit={ProductEdit}
        show={Product}
      />

      {/* <Resource name='users' list={UserList} create={UserCreate} edit={UserEdit} /> */}
    </Admin>
  );
}

export default App;

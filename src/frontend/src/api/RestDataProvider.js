/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import  React from 'react';
import {
  fetchUtils,
  GET_LIST,
  GET_ONE,
  GET_MANY,
  GET_MANY_REFERENCE,
  CREATE,
  UPDATE,
  UPDATE_MANY,
  DELETE,
  DELETE_MANY
} from "react-admin";

/**
 * Maps react-admin queries to a REST API implemented using Java Spring Boot and Swagger
 *
 * @example
 * GET_LIST     => GET http://my.api.url/posts?page=0&size=10
 * GET_ONE      => GET http://my.api.url/posts/123
 * GET_MANY     => GET http://my.api.url/posts?id=1234&id=5678
 * UPDATE       => PUT http://my.api.url/posts/123
 * CREATE       => POST http://my.api.url/posts
 * DELETE       => DELETE http://my.api.url/posts/123
 */
// eslint-disable-next-line import/no-anonymous-default-export
export default (apiUrl, httpClient = fetchUtils.fetchJson) => {
  /**
   * apiUrl을 사용하면 개발시 CORS에러를 반환할 수 있으므로 package.json의 proxy를 사용하여 url을 결정하고
   * 현재 소스에서는 apiUrl을 사용하지 않는다. 필요시 사용한다.
   * 
   * 참조링크
   * https://snowdeer.github.io/openshift/2020/06/13/react-for-cors-using-proxy/
   */
  // console.log(apiUrl);

  /**
     * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
     * @param {String} resource Name of the resource to fetch, e.g. 'posts'
     * @param {Object} params The data request params, depending on the type
     * @returns {Object} { url, options } The HTTP request parameters
     */
  const convertDataRequestToHTTP = (type, resource, params) => {
    // console.log(type, "resouece:",resource, params);
    let url = "";
    const options = {};
    // if (!options.headers) {
    //   options.headers = new Headers({ Accept: 'application/json' });
    // }
    // const { token } = JSON.parse(localStorage.getItem('auth'));
    // options.headers.set('Authorization', `Bearer ${token}`);

    switch (type) {
      
      case GET_LIST: {
        const { page, perPage } = params.pagination;
        const {field,order} = params.sort;

        // url = `${apiUrl}/${resource}?page=${page - 1}&size=${perPage}&sort=${field},${order}`;
        url = `/${resource}?page=${page - 1}&size=${perPage}&sort=${field},${order}`;
        break;
      }
      case GET_ONE:
        // url = `${apiUrl}/${resource}/${params.id}`;
        url = `/${resource}/${params.id}`;
        break;
      case GET_MANY: {
        const query = {
          filter: JSON.stringify({ id: params.ids })
        };
        let idStr = "";
        const queryString = params.ids.map(id => idStr + `id=${id}`);
        // url = `${apiUrl}/${resource}?${idStr}}`;
        url = `/${resource}?${idStr}}`;
        break;
      }
      case GET_MANY_REFERENCE: {
        const { page, perPage } = params.pagination;

        console.log('RestProvider - params : ',params);
        // url = `${apiUrl}/${resource}?page=${page - 1}&size=${perPage}`;
        url = `/${resource}?page=${page - 1}&size=${perPage}`;
        break;
      }
      case UPDATE:
        // url = `${apiUrl}/${resource}/${params.id}`;
        url = `/${resource}/${Number(params.id)}`;
        options.method = "PATCH";
        options.body = JSON.stringify(params.data);
        break;
      case CREATE:
        // url = `${apiUrl}/${resource}`;
        url = `/${resource}`;
        options.method = "POST";
        options.body = JSON.stringify(params.data);
        break;
      case DELETE:
        // url = `${apiUrl}/${resource}/${params.id}`;
        url = `/${resource}/${Number(params.id)}`;
        options.method = "DELETE";
        break;
      default:
        throw new Error(`Unsupported fetch action type ${type}`);
    }
    return { url, options };
  };

  /**
     * @param {Object} response HTTP response from fetch()
     * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
     * @param {String} resource Name of the resource to fetch, e.g. 'posts'
     * @param {Object} params The data request params, depending on the type
     * @returns {Object} Data response
     */
  const convertHTTPResponse = (response, type, resource, params) => {
    const { headers, json } = response;
    // console.log(json,response, type, resource, params);
    switch (type) {
      case GET_LIST:
      case GET_MANY_REFERENCE:
        if (!json.page.hasOwnProperty("totalElements")) {
          throw new Error(
            "The numberOfElements property must be must be present in the Json response"
          );
        }
        return {
          // data: json.content,
          data: json._embedded[`${resource}`],
          total: parseInt(json.page.totalElements, 10)
        };
      case CREATE:
        // console.log(params,json)
        return { data: { ...params.data, id: json.id } };
      default:
        // console.log("default",json,response)
        return { data: json };
    }
  };

  /**
     * @param {string} type Request type, e.g GET_LIST
     * @param {string} resource Resource name, e.g. "posts"
     * @param {Object} payload Request parameters. Depends on the request type
     * @returns {Promise} the Promise for a data response
     */
  return (type, resource, params) => {
    // simple-rest doesn't handle filters on UPDATE route, so we fallback to calling UPDATE n times instead
    if (type === UPDATE_MANY) {
      return Promise.all(
        params.ids.map(id =>
          // httpClient(`${apiUrl}/${resource}/${id}`, {
          httpClient(`/${resource}/${id}`, {
            method: "PUT",
            body: JSON.stringify(params.data)
          })
        )
      ).then(responses => ({
        data: responses.map(response => response.json)
      }));
    }
    // simple-rest doesn't handle filters on DELETE route, so we fallback to calling DELETE n times instead
    if (type === DELETE_MANY) {
      return Promise.all(
        params.ids.map(id =>
          // httpClient(`${apiUrl}/${resource}/${id}`, {
          httpClient(`/${resource}/${id}`, {
            method: "DELETE"
          })
        )
      ).then(responses => ({
        data: responses.map(response => response.json)
      }));
    }

    const { url, options } = convertDataRequestToHTTP(type, resource, params);
    return httpClient(url, options).then(response =>
      convertHTTPResponse(response, type, resource, params)
    );
  };



    /**
   * Convert a `File` object returned by the upload input into a base 64 string.
   * That's not the most optimized way to store images in production, but it's
   * enough to illustrate the idea of data provider decoration.
   */
  const convertFileToBase64 = file =>
  new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;

      reader.readAsDataURL(file.rawFile);
  });

};
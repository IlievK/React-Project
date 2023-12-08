import * as api from "../utils/api.js";

const endpoints = {
    allItems: "/data/comments",
    getOneById: "/data/comments/",
    allComments: (id) => `/data/comments?where=id%3D%22${id}%22`,
    create: "/data/comments",
    edit: "/data/comments/",
    delete: "/data/comments/"
  };

  export async function getAll() {
    return api.get(endpoints.allItems);
  }
  
  export async function getOne(id) {
    return api.get(endpoints.getOneById + id);
  }
  
  export async function getAllComments(id){
   
    const result = await api.get(endpoints.allComments(id))
    console.log(result);
    return result
  }
  
  export async function createOne( id, data,userEmail){
    return api.post(endpoints.create,({id,data,userEmail}))
  }
  export async function editItem(id,data){
    return api.put(endpoints.edit + id,(data))
  
  }
  
  export async function deleteItem(id){
    api.del(endpoints.delete + id)
  
  }
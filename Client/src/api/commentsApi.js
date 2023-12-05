import * as api from "../utils/api.js";

const endpoints = {
    allItems: "/data/comments",
    getOneById: "/data/comments/",
    myItems: (userId) => `/data/comments?where=_ownerId%3D%22${userId}%22`,
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
  
  // export async function getMyItems(userId){
  //   api.get(endpoints.myItems(userId))
  // }
  
  export async function createOne(data){
    return api.post(endpoints.create,(data))
  }
  export async function editItem(id,data){
    return api.put(endpoints.edit + id,(data))
  
  }
  
  export async function deleteItem(id,){
    api.del(endpoints.delete + id,)
  
  }
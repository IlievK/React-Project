import * as api from "./api.js";
//TO DO - ADD RELEVANT ENDPOINTS
const endpoints = {
  allItems: "/data/catalog",
  getOneById: "/data/catalog/",
  myItems: (userId) => `/data/catalog?where=_ownerId%3D%22${userId}%22`,
  create: "/data/catalog",
  edit: "/data/catalog/",
  delete: "/data/catalog/"
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
  api.post(endpoints.create,(data))
}
export async function editItem(id,data){
  api.put(endpoints.edit + id,(data))

}

export async function deleteItem(id,){
  api.del(endpoints.delete + id,)

}
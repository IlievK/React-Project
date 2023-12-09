import * as api from "../utils/api.js";
//TO DO - ADD RELEVANT ENDPOINTS
const endpoints = {
  allItems: "/data/games",
  getOneById: "/data/games/",
  myItems: (userId) => `/data/games?where=_ownerId%3D%22${userId}%22`,
  latest : '/data/games?sortBy=_createdOn%20desc',
  create: "/data/games",
  edit: "/data/games/",
  delete: "/data/games/"
};

export async function getAll() {
  return api.get(endpoints.allItems);
}

export async function getOne(id) {
  return api.get(endpoints.getOneById + id);
}

export async function getMyItems(userId){
  return api.get(endpoints.myItems(userId))
}
export async function  getLatest(){
  const res = await api.get(endpoints.latest)
  return  res.splice(0,3)
  
}

export async function createOne(data){
  api.post(endpoints.create,(data))
}
export async function editItem(id,data){
  return api.put(endpoints.edit + id,(data))

}

export async function deleteItem(id,){
  api.del(endpoints.delete + id,)

}
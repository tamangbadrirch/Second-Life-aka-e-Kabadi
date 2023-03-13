const employee = {
  get: "/employee",
  post: "/employee",
  put: "/employee",
  delete: "/employee",
};
const user = {
  save: "/users",
  get: "/users",
  delete: "/users",
};
const items = {
  save: "/items",
  get: "/items",
  delete: "/items",
};

const category = {
  save: "/category",
  get: "/category",
  delete: "/category",
  
};
export { employee as employeeUrl, user as userUrl, items as itemsUrl, category as categoryUrl };

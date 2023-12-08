const {
  loginAdmin,
  addAdmin,
  addCrime,
//  createUser,
//  findAllUsers,
 // findUserID,
 // updateUser,
 // addPost,
 // getPostByUser,
} = require("./crudRoutes");

function getRoutes(app) {
  app.post("/login/user",loginAdmin);
  app.post("/user-management/add-admin", addAdmin);
  app.post("/crime-list/add-crime",addCrime)
 // app.post("/post", postMessage);
//app.post("/create/user", createUser);
 // app.post("/findAll/users", findAllUsers);
 // app.post("/find/user-id", findUserID);
  //app.post("/update/user", updateUser);
  //Post routes
 //app.post("/post/add", addPost);

}

exports.getRoutes = getRoutes;

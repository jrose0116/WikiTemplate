export const mongoConfig = {
  // serverUrl: "mongodb://127.0.0.1:27017/",
  serverUrl: `mongodb+srv://jrose0116:${process.env.mongoPass}@cluster.nbrlskp.mongodb.net/?retryWrites=true&w=majority`,
  database: "JacobRose_Wiki",
};

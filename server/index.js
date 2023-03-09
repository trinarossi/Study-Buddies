const { db } = require("./db");
const PORT = process.env.PORT || 8080;
const app = require("./app");
//const seed = require("../script/seed");


const init = async () => {
  try {
    // drop all tables if they exist already and reseed
    await db.sync({ force: true });
    // combined seed function for demo data (Users, Puzzles and Orders)
    //await seed();
    // start listening (and create a 'server' object representing our server)
    app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();
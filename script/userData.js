const { User, Pet } = require("../server/db");

async function userSeed() {
  
  const user = await User.create({
    username: "test@studybuddies.com",
    password: "test123",
    firstName: "Katrina",
    lastName: "Rossi"
  })

  const pet = await Pet.create({
    name: "Smokey",
    petType: "DRAGON",
  });

  pet.setUser(user);
}

module.exports = userSeed;
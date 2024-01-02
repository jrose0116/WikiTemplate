import { users } from "@/config/mongoCollections"
import { ObjectId } from "mongodb"
import bcrypt from "bcrypt"

export const createUser = async (username, password, displayName) => {
    const usersCollection = await users()

    if((await userExists(username))) throw "User already exists with this username"

    const user = {username, password: (await bcrypt.hash(password, 10)), displayName, role: "user"}

    return (await usersCollection.insertOne(user)).insertedId
}

export const getUserInfo = async (id) => {
    const usersCollection = await users()
    return (await usersCollection.findOne({_id: new ObjectId(id)}, {username: 1, displayName: 1, _id: 0}))
}

export const userExists = async (username) => {
  const usersCollection = await users()
  try {
      const existingUser = await usersCollection.findOne({ username: username });
      return existingUser ? true : false;
    } catch (error) {
      return false;
    }
}

export const login = async (username, password) => {
  const usersCollection = await users();
  try {
      const user = await usersCollection.findOne({ username });
      if (!user) {
          return {success: false, message: "Could not find user with given username and password"};
      }

      if (!(await bcrypt.compare(password, user.password))) {
        return {success: false, message: "Could not find user with given username and password"};
      }

      const { _id, displayName, role } = user;
      return { success: true, _id:_id.toString(), username: user.username, displayName, role };
  } catch (error) {
      return {success: false, message: "Internal server error"};
  }
}

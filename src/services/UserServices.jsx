import Db from "./../config/FirebaseConfig";

const GetUsers = () => {
  Db.collection("users").onSnapshot(docs => {
    var users = [];
    docs.forEach(doc => users.push({ username: doc.id, ...doc.data() }));
    return users;
    // this.setState({ users: users });
  });
};

export const UserService = { GetUsers: GetUsers };

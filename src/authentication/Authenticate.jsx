import Db, { Authen } from "./../config/FirebaseConfig";

const Authenticate = ref => {
  Authen.onAuthStateChanged(user => {
    if (user) {
      Db.collection("authen-users")
        .doc(user.uid)
        .onSnapshot(doc =>
          ref.setState({ loginUser: { id: doc.id, ...doc.data() } })
        );
    } else {
      ref.setState({ loginUser: null });
    }
  });
};

export default { Authenticate: Authenticate };

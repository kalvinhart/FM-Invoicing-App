// firebase
import firebase from "../firebase/firebase";

export const getData = () => {
  console.log("querying database");
  const query = firebase.firestore().collection("invoices");

  const response = query.get().then((snapshot) => {
    let allData = [];
    snapshot.forEach((doc) => {
      allData.push(doc.data());
    });
    return allData;
  });

  return response;
};

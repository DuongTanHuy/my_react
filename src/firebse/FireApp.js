import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";
import { useEffect } from "react";

const FireApp = () => {
  //   var myPromise = new Promise(function (resolve, reject) {
  //     resolve([
  //       {
  //         id: 1,
  //         name: "John",
  //       },
  //     ]);
  //   });
  //   myPromise.then(function (resole) {
  //     console.log(resole);
  //     return 1;
  //   });
  useEffect(() => {
    const colRef = collection(db, "posts");
    getDocs(colRef)
      .then((snapshot) => {
        let posts = [];
        snapshot.docs.forEach((doc) => {
          posts.push({
            id: doc.id,
            ...doc.data(),
          });
          console.log(posts);
        });
      })
      .catch((error) => console.log(error));
  }, []);
  return <div></div>;
};

export default FireApp;

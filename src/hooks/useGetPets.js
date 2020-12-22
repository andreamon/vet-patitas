import { useState, useEffect } from "react";
import { db } from "../firebase";

const useGetPets = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    db.collection("pets").onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.docs.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setPets(list);
    });
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const db = firebase.firestore();
  //     const data = await db.collection("pets").get();
  //     setPets(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   fetchData();
  //   console.log('fetch pets');
  // }, []);

  return pets;
};

export default useGetPets;

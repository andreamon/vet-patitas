import { useState, useEffect } from "react";
import { db } from "../database/firebase";

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

  return pets;
};

export default useGetPets;

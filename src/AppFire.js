import React, { useEffect, useState } from "react";
import firebase from "./firebase";
import List from './components/PetsList'

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faCameraRetro);

const App = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("pets").get();
      setPets(data.docs.map((doc) => ({...doc.data(), 'id': doc.id})));
    };
    fetchData();
  }, []);
  return (
    <List pets={pets} />
  );
};

export default App;

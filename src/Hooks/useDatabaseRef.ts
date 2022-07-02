import { useState } from "react";
import { ref, DatabaseReference } from "firebase/database";

import { db } from "../Utils/initFirebase";

interface DataBaseRefsProps {
  [k: string]: DatabaseReference;
}

export const useDatabaseRef = (database: string) => {
  const [databaseRefs, setDatabaseRefs] = useState<DataBaseRefsProps>({});

  const getDatabaseRef = () => {
    const databaseRef = ref(db, database);

    setDatabaseRefs({ ...databaseRefs, [database]: databaseRef });

    return databaseRef;
  };

  return databaseRefs[database] || getDatabaseRef();
};

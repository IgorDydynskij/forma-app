import { collection, getDocs, query } from "@firebase/firestore";
import { firestoreDb } from "../constants";
import { UserPurchases } from "./user.interface";

export async function getUserEsims(
): Promise<UserPurchases[]> {
  const q = query(collection(firestoreDb, "users"));
  const snapshot = await getDocs(q);
  const userPurchases: UserPurchases[] = [];

  for (let i = 0; i < snapshot.docs.length; i++) {
    const data = snapshot.docs[i].data() as undefined as UserPurchases;

    userPurchases.push(data);
  };

  console.log(userPurchases);


  return userPurchases;
};
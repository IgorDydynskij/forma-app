import { collection, getDocs, query } from "@firebase/firestore";
// import { Report } from "src/api/reports/interfaces/report.interface";
import { firestoreDb } from "src/constants";
import { UserPurchases } from "../interfaces/user-purchases.interface";

export async function getUserPurchases(
  userId: string
): Promise<UserPurchases[]> {
  const q = query(collection(firestoreDb, "users", userId, "purchases"));
  const snapshot = await getDocs(q);
  const userPurchases: UserPurchases[] = [];

  for (let i = 0; i < snapshot.docs.length; i++) {
    const data = snapshot.docs[i].data() as undefined as UserPurchases;

    userPurchases.push(data);
  };

  return userPurchases;
};
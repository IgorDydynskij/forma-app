import { getDatabase, update, ref } from "firebase/database";
import { firebaseApp } from '../../../FirebaseConfig';
import { CountryFullInfo } from "../interfaces/country-full-info.inteface";

export async function updateCountryUsecase(
  country: CountryFullInfo,
): Promise<void> {
  const db = getDatabase(firebaseApp);
  const countryRef = ref(db, `appdata/countries/${country.documentId}`);

  return update(countryRef, country);
};
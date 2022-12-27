import { getDatabase, onValue, ref } from "firebase/database";
import { firebaseApp } from '../../../FirebaseConfig';
import { CountryFullInfo } from "../interfaces/country-full-info.inteface";

export async function getCountriesFullInfoUsecase(
): Promise<CountryFullInfo[]> {
  return new Promise((resolve, reject) => {
    const db = getDatabase(firebaseApp);
    const contriesRef = ref(db, "appdata/countries");
    const countries: CountryFullInfo[] = [];
  
    onValue(contriesRef, (snapshot) => {
      snapshot.forEach((_country) => {
        const countryFull: CountryFullInfo = _country.val();
        countryFull.documentId = _country.key;
        
        countries.push(countryFull);
      });

      resolve(countries);
    });
  });
};
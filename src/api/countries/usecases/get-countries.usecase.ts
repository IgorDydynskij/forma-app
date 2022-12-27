import { getDatabase, onValue, ref } from "firebase/database";
import { firebaseApp } from '../../../FirebaseConfig';
import { CountryFullInfo } from "../interfaces/country-full-info.inteface";
import { Country } from "../interfaces/country.inteface";

export async function getCountriesUsecase(
): Promise<Country[]> {
  return new Promise((resolve, reject) => {
    const db = getDatabase(firebaseApp);
    const contriesRef = ref(db, "appdata/countries");
    const countries: Country[] = [];
  
    onValue(contriesRef, (snapshot) => {
      snapshot.forEach((_country) => {
        const countryFull: CountryFullInfo = _country.val();

        countries.push({
          iso: countryFull.alpha2,
          name: countryFull.name,
          region: countryFull.region,
        });
      });

      resolve(countries);
    });
  });
};
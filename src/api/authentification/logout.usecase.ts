import { getAuth, signOut } from '@firebase/auth';
import { firebaseApp } from '../../FirebaseConfig';

export async function logoutUsecase(
): Promise<[string, boolean]> {
  const auth = getAuth(firebaseApp);

  try {
    const signedOut = await signOut(auth);

    return ["", true];
  } catch(e) {
    console.log(e);
    return [e, false];
  };
};
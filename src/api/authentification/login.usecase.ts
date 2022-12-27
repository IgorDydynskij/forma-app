import { getAuth, signInWithEmailAndPassword, UserCredential } from '@firebase/auth';
import { firebaseApp } from '../../FirebaseConfig';


export async function loginUsecase(
  email: string,
  password: string
): Promise<[string, UserCredential]> {
  const auth = getAuth(firebaseApp);

  try {
    const authentificated = await signInWithEmailAndPassword(auth, email, password);

    return ["", authentificated];
  } catch(e) {
    console.log(e);
    return [e, null];
  };
};
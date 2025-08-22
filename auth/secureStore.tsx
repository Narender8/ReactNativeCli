import EncryptedStorage from "react-native-encrypted-storage";

const TOKEN_KEY = "auth_token";

export async function saveToken(token: string) {
  await EncryptedStorage.setItem(TOKEN_KEY, token);
}

export async function getToken() {
  return await EncryptedStorage.getItem(TOKEN_KEY);
}

export async function clearToken() {
  await EncryptedStorage.removeItem(TOKEN_KEY);
}

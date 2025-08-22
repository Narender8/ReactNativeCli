import axios from "axios";

// Fake API: https://reqres.in/api/login
export async function loginApi(email: string, password: string): Promise<string> {
  const res = await axios.post("https://reqres.in/api/login", { email, password },
    {
      headers: {
        "x-api-key": "reqres-free-v1", // Required now
        "Content-Type": "application/json",
      },
    }
  );
  console.log("✅ API Response:", res.data);  // 👈 print full response
  if (!res.data?.token) {
    console.log("✅ API Error:", "No token returned from API");  // 👈 print full response
  }
  return res.data?.token as string;
}

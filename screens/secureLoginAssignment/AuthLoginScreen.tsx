import React, { useEffect, useState } from "react";
import { Alert, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../auth/AuthContext";
import { RootStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, 'AuthLogin'>;

const AuthLoginScreen: React.FC<Props> = ({ navigation }) => {
  const { signIn, loading,token} = useAuth();
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const [submitting, setSubmitting] = useState(false);

        // ✅ React to token changes
    useEffect(() => {
      if (token) {
        console.log("✅ Token updated:", token);
        navigation.reset({
          index: 0,
          routes: [{ name: "AuthHome" }], // replace stack with Home
        });
      }
    }, [token, navigation]);


  const onSubmit = async () => {
    if (!email || !password) {
      Alert.alert("Validation", "Please enter email and password.");
      return;
    }
    setSubmitting(true);

    try {
        await signIn(email.trim(), password);       
    } catch (e: any) {
      Alert.alert("Login failed", e?.response?.data?.error ?? "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1, paddingHorizontal: 24, justifyContent: "center" }}>
        <Text style={{ fontSize: 28, fontWeight: "700", marginBottom: 8 }}>Welcome 👋</Text>
        <Text style={{ fontSize: 14, color: "#555", marginBottom: 24 }}>
          Sign in to continue.
        </Text>

        <Text>Email</Text>
        <TextInput
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="you@example.com"
          value={email}
          onChangeText={setEmail}
          style={{
            borderWidth: 1, borderColor: "#ddd", borderRadius: 12, padding: 12, marginBottom: 16
          }}
        />

        <Text>Password</Text>
        <TextInput
          secureTextEntry
          placeholder="••••••••"
          value={password}
          onChangeText={setPassword}
          style={{
            borderWidth: 1, borderColor: "#ddd", borderRadius: 12, padding: 12, marginBottom: 24
          }}
        />

        <TouchableOpacity
          onPress={onSubmit}
          disabled={submitting || loading}
          style={{
            backgroundColor: "#111827",
            paddingVertical: 14,
            borderRadius: 12,
            alignItems: "center",
            opacity: submitting || loading ? 0.6 : 1
          }}
        >
          <Text style={{ color: "white", fontWeight: "700" }}>
            {submitting ? "Signing in…" : "Sign In"}
          </Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 12, color: "#777", marginTop: 16 }}>
          Tip: This demo uses the ReqRes fake auth API.
        </Text>
      </View>
    </SafeAreaView>
  );
}
export default AuthLoginScreen;

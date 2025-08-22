import React from "react";
import { SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../auth/AuthContext";
import { RootStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CommonActions } from "@react-navigation/native";

type Props = NativeStackScreenProps<RootStackParamList, 'AuthHome'>;

const AuthHomeScreen: React.FC<Props> = ({ navigation }) => {
  const { signOut, token } = useAuth();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1, padding: 24 }}>
        <Text style={{ fontSize: 24, fontWeight: "700" }}>Protected Area 🔐</Text>
        <Text style={{ marginTop: 8, color: "#444" }}>
          You can only see this screen when authenticated.
        </Text>

        <View style={{ marginTop: 24, padding: 16, backgroundColor: "#F3F4F6", borderRadius: 12 }}>
          <Text style={{ fontWeight: "600", marginBottom: 6 }}>Stored Token</Text>
          <Text selectable style={{ fontFamily: "monospace" }} numberOfLines={2}>
            {token}
          </Text>
        </View>

        <TouchableOpacity
          onPress={async () => {
            await signOut();
            navigation.reset({
              index: 0,
              routes: [{ name: "Home" }], // replace stack with Home
            });
          }}
          style={{
            marginTop: 24,
            backgroundColor: "#DC2626",
            paddingVertical: 14,
            borderRadius: 12,
            alignItems: "center"
          }}
        >
          <Text style={{ color: "white", fontWeight: "700" }}>Log out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export default AuthHomeScreen;
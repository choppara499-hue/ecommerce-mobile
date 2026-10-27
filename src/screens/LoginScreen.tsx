
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import type { NativeStackScreenProps } from
  "@react-navigation/native-stack";
import type { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "Login"
>;

export default function LoginScreen({
  navigation,
}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] =
    useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] =
    useState("");

  const validateEmail = (value: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      value.trim()
    );
  };

  const handleLogin = () => {
    let isValid = true;

    setEmailError("");
    setPasswordError("");

    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
      isValid = false;
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    Alert.alert(
      "Login Successful",
      "Demo login successful!"
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={
        Platform.OS === "ios" ? "padding" : undefined
      }
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card}>
          <Text style={styles.title}>Welcome Back!</Text>

          <Text style={styles.subtitle}>
            Login to your MyStore account
          </Text>

          {/* Email */}
          <Text style={styles.label}>Email</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={(value) => {
              setEmail(value);
              setEmailError("");
            }}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="emailAddress"
            returnKeyType="next"
            accessibilityLabel="Email"
          />

          {emailError ? (
            <Text style={styles.error}>
              {emailError}
            </Text>
          ) : null}

          {/* Password */}
          <Text style={styles.label}>Password</Text>

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter your password"
              value={password}
              onChangeText={(value) => {
                setPassword(value);
                setPasswordError("");
              }}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="password"
              returnKeyType="done"
              onSubmitEditing={handleLogin}
              accessibilityLabel="Password"
            />

            <Pressable
              onPress={() =>
                setShowPassword((prev) => !prev)
              }
              style={styles.showButton}
              accessibilityRole="button"
              accessibilityLabel={
                showPassword
                  ? "Hide password"
                  : "Show password"
              }
            >
              <Text style={styles.showText}>
                {showPassword ? "Hide" : "Show"}
              </Text>
            </Pressable>
          </View>

          {passwordError ? (
            <Text style={styles.error}>
              {passwordError}
            </Text>
          ) : null}

          {/* Login Button */}
          <Pressable
            style={styles.loginButton}
            onPress={handleLogin}
            accessibilityRole="button"
          >
            <Text style={styles.loginButtonText}>
              Login
            </Text>
          </Pressable>

          {/* Register Navigation */}
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>
              Don't have an account?{" "}
            </Text>

            <Pressable
              onPress={() =>
                navigation.navigate("Register")
              }
              accessibilityRole="button"
            >
              <Text style={styles.registerLink}>
                Register
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },

  card: {
    backgroundColor: "#ffffff",
    padding: 24,
    borderRadius: 16,
    elevation: 4,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2563eb",
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: "#666666",
    textAlign: "center",
    marginBottom: 28,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333333",
    marginBottom: 8,
    marginTop: 12,
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: "#ffffff",
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 8,
    backgroundColor: "#ffffff",
  },

  passwordInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 12,
    fontSize: 16,
  },

  showButton: {
    minWidth: 60,
    minHeight: 48,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
  },

  showText: {
    color: "#2563eb",
    fontWeight: "bold",
  },

  error: {
    color: "#dc2626",
    fontSize: 13,
    marginTop: 6,
  },

  loginButton: {
    height: 50,
    backgroundColor: "#2563eb",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },

  loginButtonText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "bold",
  },

  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: 24,
  },

  registerText: {
    fontSize: 14,
    color: "#555555",
  },

  registerLink: {
    fontSize: 14,
    color: "#2563eb",
    fontWeight: "bold",
    paddingVertical: 8,
  },
});

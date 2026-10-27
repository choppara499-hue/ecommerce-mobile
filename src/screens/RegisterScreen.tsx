
import React, { useRef, useState } from "react";
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

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

type RegisterErrors = {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

const validateEmail = (value: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
};

export default function RegisterScreen({ navigation }: Props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState<RegisterErrors>({});

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: RegisterErrors = {};
    const cleanEmail = email.trim();

    if (!fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    }

    if (!cleanEmail) {
      newErrors.email = "Please enter your email";
    } else if (!validateEmail(cleanEmail)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!password) {
      newErrors.password = "Please enter your password";
    } else if (password.length < 8) {
      newErrors.password =
        "Password must be at least 8 characters";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword =
        "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Register button
  const handleRegister = () => {
    if (!validateForm()) return;

    Alert.alert(
      "Demo Success",
      "Registration form validation successful! This is only a demo. No account was created.",
      [
        {
          text: "OK",
          onPress: () => navigation.navigate("Login"),
        },
      ]
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
      >
        <View style={styles.card}>
          <Text style={styles.logo}>MyStore 🛒</Text>

          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Join us today</Text>

          {/* Full Name */}
          <Text style={styles.label}>Full Name</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            value={fullName}
            onChangeText={(text) => {
              setFullName(text);
              setErrors((prev) => ({
                ...prev,
                fullName: undefined,
              }));
            }}
            autoCapitalize="words"
            autoCorrect={false}
            autoComplete="name"
            textContentType="name"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current?.focus()}
            accessibilityLabel="Full name"
          />

          {errors.fullName ? (
            <Text style={styles.error}>{errors.fullName}</Text>
          ) : null}

          {/* Email */}
          <Text style={styles.label}>Email</Text>

          <TextInput
            ref={emailRef}
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setErrors((prev) => ({
                ...prev,
                email: undefined,
              }));
            }}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="email"
            textContentType="emailAddress"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current?.focus()}
            accessibilityLabel="Email address"
          />

          {errors.email ? (
            <Text style={styles.error}>{errors.email}</Text>
          ) : null}

          {/* Password */}
          <Text style={styles.label}>Password</Text>

          <View style={styles.passwordBox}>
            <TextInput
              ref={passwordRef}
              style={styles.passwordInput}
              placeholder="Minimum 8 characters"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setErrors((prev) => ({
                  ...prev,
                  password: undefined,
                  confirmPassword: undefined,
                }));
              }}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="off"
              textContentType="newPassword"
              returnKeyType="next"
              onSubmitEditing={() =>
                confirmPasswordRef.current?.focus()
              }
              accessibilityLabel="Password"
            />

            <Pressable
              onPress={() => setShowPassword((prev) => !prev)}
              hitSlop={8}
              accessibilityRole="button"
              accessibilityLabel={
                showPassword ? "Hide password" : "Show password"
              }
            >
              <Text style={styles.showText}>
                {showPassword ? "Hide" : "Show"}
              </Text>
            </Pressable>
          </View>

          {errors.password ? (
            <Text style={styles.error}>{errors.password}</Text>
          ) : null}

          {/* Confirm Password */}
          <Text style={styles.label}>Confirm Password</Text>

          <View style={styles.passwordBox}>
            <TextInput
              ref={confirmPasswordRef}
              style={styles.passwordInput}
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChangeText={(text) => {
                setConfirmPassword(text);
                setErrors((prev) => ({
                  ...prev,
                  confirmPassword: undefined,
                }));
              }}
              secureTextEntry={!showConfirmPassword}
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="off"
              returnKeyType="done"
              onSubmitEditing={handleRegister}
              accessibilityLabel="Confirm password"
            />

            <Pressable
              onPress={() =>
                setShowConfirmPassword((prev) => !prev)
              }
              hitSlop={8}
              accessibilityRole="button"
              accessibilityLabel={
                showConfirmPassword
                  ? "Hide confirm password"
                  : "Show confirm password"
              }
            >
              <Text style={styles.showText}>
                {showConfirmPassword ? "Hide" : "Show"}
              </Text>
            </Pressable>
          </View>

          {errors.confirmPassword ? (
            <Text style={styles.error}>
              {errors.confirmPassword}
            </Text>
          ) : null}

          {/* Register Button */}
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
            onPress={handleRegister}
            accessibilityRole="button"
            accessibilityLabel="Register"
          >
            <Text style={styles.buttonText}>Register</Text>
          </Pressable>

          {/* Login Link */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Already have an account?{" "}
            </Text>

            <Pressable
              onPress={() => navigation.navigate("Login")}
              hitSlop={8}
              accessibilityRole="button"
            >
              <Text style={styles.link}>Login</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },

  container: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 24,
  },

  card: {
    backgroundColor: "#ffffff",
    padding: 22,
    borderRadius: 16,
    elevation: 3,
  },

  logo: {
    textAlign: "center",
    color: "#2563eb",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 18,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#111827",
  },

  subtitle: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 18,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 7,
    marginTop: 12,
  },

  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 9,
    paddingHorizontal: 13,
    paddingVertical: 12,
    fontSize: 16,
    minHeight: 48,
    color: "#111827",
    backgroundColor: "#ffffff",
  },

  passwordBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 9,
    paddingHorizontal: 12,
    minHeight: 50,
    backgroundColor: "#ffffff",
  },

  passwordInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: "#111827",
  },

  showText: {
    color: "#2563eb",
    fontWeight: "bold",
    fontSize: 14,
    padding: 8,
  },

  error: {
    color: "#dc2626",
    fontSize: 14,
    marginTop: 5,
  },

  button: {
    backgroundColor: "#2563eb",
    padding: 15,
    minHeight: 50,
    borderRadius: 9,
    marginTop: 24,
    justifyContent: "center",
  },

  buttonPressed: {
    opacity: 0.8,
  },

  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: 22,
    alignItems: "center",
  },

  footerText: {
    color: "#4b5563",
    fontSize: 14,
  },

  link: {
    color: "#2563eb",
    fontWeight: "bold",
    fontSize: 15,
    paddingVertical: 8,
  },
});

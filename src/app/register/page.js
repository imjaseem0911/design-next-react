"use client";
import { useState } from "react";
import { registerLocalUser } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = (e) => {
    e.preventDefault();
    try {
      registerLocalUser({ username, email, password });
      router.push("/"); // auto-login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      style={{
        margin: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "#fafafa",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          width: "800px",
          maxWidth: "95%",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          background: "#ffff",
        }}
      >
        {/* yahan tum image wala div rakhoge */}
        <div
          style={{
            flex: 1,
            backgroundImage: "url('/images/logo.png')",
            padding: "20px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>

        <main
          style={{
            padding: "50px",
            flex: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              marginBottom: "20px",
              fontSize: "30px",
              color: "#333",
            }}
          >
            Register
          </h1>
          <form
            onSubmit={handleRegister}
            style={{
              flex: "1",
            }}
          >
            <input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                margin: "10px 0",
                border: "1px solid #ccc",
                borderRadius: "8px",
                outline: "none",
                fontSize: "16px",
                transition: "0.3s",
              }}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                margin: "10px 0",
                border: "1px solid #ccc",
                borderRadius: "8px",
                outline: "none",
                fontSize: "16px",
                transition: "0.3s",
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                margin: "10px 0",
                border: "1px solid #ccc",
                borderRadius: "8px",
                outline: "none",
                fontSize: "16px",
                transition: "0.3s",
              }}
            />
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "15px",
                border: "none",
                borderRadius: "8px",
                background: "rgb(44 147 249)",
                color: "#fff",
                fontSize: "16px",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              Register
            </button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <p
            style={{
              color: "#555",
              marginTop: "30px",
              fontSize: "14px",
            }}
          >
            Already have an account?{" "}
            <a
              href="/login"
              style={{
                color: "rgb(44 147 249)",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              Login
            </a>
          </p>
        </main>
      </div>
    </div>
  );
}

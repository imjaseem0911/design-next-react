"use client";
import { useEffect, useState } from "react";
import { fetchData } from "@/lib/api";
import Layout from "@/components/Layout";

export default function TodosPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchData("/todos").then(setTodos).catch(console.error);
  }, []);

  return (
    <Layout>
      <h1>Todos</h1>
      <div
        style={{
          gap: "13px",
          width: "90%",
          maxWidth: "1489px",
          margin: "10px auto",
          display: "flex",
          flexDirection: "column",
          gap: "13px",
        }}
      >
        {todos.slice(0, 10).map((t) => (
          <div
            key={t.id}
            style={{
              background: "#fefefe",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "rgb(144 144 144 / 71%) -1px -1px 8px -1px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => handleToggle(t.id)}
              style={{
                width: "25px",
                height: "25px",
                border: "9px solid #0080ffff",
                borderRadius: "50%",
                cursor: "pointer",
                backgroundColor: t.completed ? "#2b93f8" : "transparent",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            />
            {t.completed ? "" : ""}

            {t.title}
          </div>
        ))}
      </div>
    </Layout>
  );
}

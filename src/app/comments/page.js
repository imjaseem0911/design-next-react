"use client";
import { useEffect, useState } from "react";
import { fetchData } from "@/lib/api";
import Layout from "@/components/Layout";

export default function CommentsPage() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchData("/comments").then(setComments).catch(console.error);
  }, []);

  return (
    <Layout>
      <h1>Comments</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "31px",
          width: "100%",
          maxWidth: "1489px",
          margin: "20px auto",
        }}
      >
        {comments.slice(0, 10).map((c) => (
          <div
            key={c.id}
            style={{
              width: "350px",
              background: "#fefefe",
              borderRadius: "10px",
              padding: "13px",

              transition: "transform 0.2s ease-in-out",
              boxShadow: "rgb(144 144 144 / 71%) -1px -1px 8px -1px",
              height: "200px",
            }}
          >
            <div
              style={{
                borderBottom: "1px solid #e5e7eb",
                marginBottom: "5px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                paddingBottom: "1rem",
              }}
            >
              <span
                style={{
                  background: "#d7d2d2",
                  width: "50px",
                  height: "50px",
                  display: "inline-block",
                  borderRadius: "50%",
                  padding: "24px",
                }}
              >
                <span></span>
              </span>
              <strong
                style={{
                  display: "flex",
                  flexirection: "column",
                  justifyContent: "center",
                  color: "#1f2937",
                }}
              >
                <strong
                  style={{
                    display: "flex",
                    flexDirection: "column",

                    color: "",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.1rem",
                      whiteSpace: "nowrap",
                      overflow: " hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "235px",
                      color: "#1f2937",
                      fontWeight: "600",
                    }}
                  >
                    <span>{c.name}</span>
                  </span>

                  <span
                    style={{
                      marginTop: "1px",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      color: "#6b7280",
                      marginTop: "2px",
                      whiteSpace: "nowrap",
                      overflow: " hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "235px",
                    }}
                  >
                    <span>({c.email})</span>
                  </span>
                </strong>
              </strong>
            </div>
            <div
              style={{
                marginTop: "15px",
              }}
            >
              <span
                style={{
                  color: "rgb(73, 73, 73)",
                  marginBottom: "7px",
                  fontWeight: "600",
                }}
              >
                <span>Comments:</span>
              </span>
              <p
                style={{
                  color: "#404040",
                  marginTop: "5px",
                  display: "-webkit-box",
                  webkitLineClamp: "3",
                  webkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                <p>{c.body}</p>
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

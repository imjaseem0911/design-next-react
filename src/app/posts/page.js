"use client";
import { useEffect, useState } from "react";
import { fetchData } from "@/lib/api";
import Layout from "@/components/Layout";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData("/posts").then(setPosts).catch(console.error);
  }, []);

  return (
    <Layout>
      <h1>Posts</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", // ✅ string me likhna hoga
          gap: "31px",
          width: "100%",
          maxWidth: "1489px",
          margin: "20px auto",
        }}
      >
        {posts.slice(0, 10).map((post) => (
          <div
            key={post.id}
            style={{
              width: "350px",
              background: "#fefefe",
              borderRadius: "10px",
              padding: "13px",

              transition: "transform 0.2s ease-in-out",
              boxShadow: "rgb(144 144 144 / 71%) -1px -1px 8px -1px",
              height: "220px",
            }}
          >
            <div
              style={{
                display: "flex",
                marginBottom: " 15px",
                background: "#2c93f9",
                padding: "15px",
                borderRadius: "7px 7px 0px 0px",
                border: "none",
                color: "white",
                width: "324px",
                height: "80px",
              }}
            >
              <span
                style={{
                  color: "#ffffff",
                  marginRight: "7px",
                  fontWeight: "600",
                }}
              >
                <span>Title:</span>
              </span>

              <strong>{post.title}</strong>
            </div>
            <div>
              <span
                style={{
                  color: "rgb(73 73 73)",
                  marginBottom: "7px",
                  fontWeight: "600",
                }}
              >
                <span>Description:</span>
              </span>

              <p
                style={{
                  color: "#404040",
                  marginTop: "10px",
                  display: "-webkit-box",
                  webkitLineClamp: "3",
                  webkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                <p>{post.body}</p>
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

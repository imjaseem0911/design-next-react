"use client";
import { useEffect, useState } from "react";
import { fetchData } from "@/lib/api";
import Layout from "@/components/Layout";

export default function PhotosPage() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchData("/photos").then(setPhotos).catch(console.error);
  }, []);

  return (
    <Layout>
      <h1>Photos</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "31px",
          width: "100%",
          maxWidth: "1489px",
          margin: "20px auto",
        }}
      >
        {photos.slice(0, 20).map((p) => (
          <div
            key={p.id}
            style={{
              background: "rgb(34, 55, 62)",
              position: "relative",
              // width: "270px",
              // height: "350px",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
              color: "#fff",
            }}
          >
            <img
              src="https://sherohomefood.in/wp-content/uploads/2021/05/SHF_home-slide-1.jpg"
              height={"100%"}
              width={"100%"}
              objectFit={"cover"}
              position={"absolute"}
              top={"0"}
              left={"0"}
              zIndex={"1"}
              alt={p.title}
            />

            <p
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 2,
                background: "#313c4182", // semi-transparent overlay
                padding: "30px",
                whiteSpace: "nowrap",
                overflow: " hidden",
                textOverflow: "ellipsis",
                maxWidth: "348px",
              }}
            >
              {p.title}
            </p>
            <div
              style={{
                width: "20px",
                height: "20px",
                background: "red",
                position: "absolute",
              }}
            ></div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

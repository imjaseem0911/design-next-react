"use client";
import { useEffect, useState } from "react";
import { fetchData } from "@/lib/api";
import Layout from "@/components/Layout";

export default function AlbumsPage() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchData("/albums").then(setAlbums).catch(console.error);
  }, []);

  return (
    <Layout>
      <h1>Albums</h1>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "31px",
          width: "100%",
          maxWidth: "1489px",
          margin: "20px auto",
        }}
      >
        {albums.slice(0, 10).map((a) => (
          <div
            key={a.id}
            style={{
              background: "#fefefe",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              boxShadow: "rgb(144 144 144 / 71%) -1px -1px 8px -1px",
              borderRadius: "10px 35px 7px 35px",
            }}
          >
            <img
              style={{
                borderRadius: "10px 35px 0px 35px",
              }}
              src="https://sherohomefood.in/wp-content/uploads/2021/05/SHF_home-slide-1.jpg"
              height={"100%"}
              width={"100%"}
            />

            <li
              style={{
                color: "#404040",
                listStyle: "none",
                padding: "20px",
                fontSize: "16px",

                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              <li key={a.id}>{a.title}</li>
            </li>
          </div>
        ))}
      </ul>
    </Layout>
  );
}

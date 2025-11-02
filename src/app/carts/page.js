import Layout from "@/components/Layout";
import styles from "./carts.module.css";

export default async function CartsPage() {
  const res = await fetch("https://dummyjson.com/carts");
  const data = await res.json();
  const carts = data.carts || [];

  return (
    <Layout>
      <h1>Carts</h1>

      {carts.map((cart) => (
        <div
          key={cart.id}
          style={{
            border: "1px solid #ccc",

            padding: "15px",
            borderRadius: "8px",

            margin: "20px auto",
            width: "100%",
            maxWidth: "1435px",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              marginBottom: "15px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
              marginBottom: "25px",
            }}
          >
            <h3 style={{ margin: "0 0 10px 0" }}>Cart #{cart.id}</h3>
            <p style={{ margin: "5px 0" }}>
              <strong>Total:</strong> ${cart.total} |{" "}
              <strong>Discounted:</strong> ${cart.discountedTotal}
            </p>
            <p style={{ margin: "5px 0" }}>
              <strong>User ID:</strong> {cart.userId}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(228px, 1fr))",
              gap: "15px",
              marginTop: "10px",
            }}
          >
            {cart.products.map((p) => (
              <div
                key={p.id}
                style={{
                  border: "1px solid rgb(238, 238, 238)",
                  borderRadius: "6px",

                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                  background: "#fff",
                }}
              >
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "6px",
                    marginBottom: "10px",
                    background: "linear-gradient(135deg, #f9f9f9, #eaeaea)",
                    borderRadius: "0 0 20px 20px",
                    borderBottom: "3px solid #dcdcdc",
                  }}
                />

                <div
                  style={{
                    padding: "15px",
                    textAlign: "left",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "#333",
                      marginBottom: "10px",

                      height: "45px",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: ".95rem",
                      margin: "8px 0",
                      color: "#555",
                    }}
                  >
                    Qty: {p.quantity}
                  </p>
                  <p
                    style={{
                      fontSize: ".95rem",
                      margin: "8px 0",
                      color: "#555",
                    }}
                  >
                    Price: ${p.price}
                  </p>
                  <p
                    style={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      color: "#424242",
                    }}
                  >
                    Total: ${p.total}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Layout>
  );
}

import Layout from "@/components/Layout";

export default async function QuotesPage() {
  const res = await fetch("https://dummyjson.com/quotes");
  const data = await res.json();
  const quotes = data.quotes || [];

  return (
    <Layout>
      <h1>Quotes</h1>
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
        {quotes.slice(0, 10).map((quote) => (
          <div
            key={quote.id}
            style={{
              marginBottom: "15px",
              border: "5px solid #ffffffff",
              height: "450px",
              position: "relative",
              backgroundImage: "url('/quotes-rumi.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              boxShadow: "rgb(144 144 144 / 71%) -1px -1px 8px -1px",
            }}
          >
            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgb(58 58 58 / 0.85)",
                borderRadius: "20px",
              }}
            ></div>

            {/* Content */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                color: "white",
                // padding: "36px",
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}
            >
              {/* Quote */}
              <blockquote
                style={{
                  fontSize: "1.1rem",
                  flex: 1,
                  padding: "36px",
                  display: "flex",
                  alignItems: "center", // 👈 vertically center
                  justifyContent: "center",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                "{quote.quote}"
              </blockquote>

              {/* Author */}
              <p
                style={{
                  background: "#ffffffff",
                  padding: "10px 14px",
                  borderRadius: "0px 0px 20px 0px",
                  color: "black",
                  marginTop: "340px", // 👈 ab hamesha quote ke thoda neeche rahega
                  alignSelf: "flex-start",
                  position: "absolute",
                }}
              >
                — {quote.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

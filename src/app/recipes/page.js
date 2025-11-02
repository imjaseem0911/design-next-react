import Layout from "@/components/Layout";

export default async function RecipesPage() {
  const res = await fetch("https://dummyjson.com/recipes");
  const data = await res.json();
  const recipes = data.recipes || [];

  return (
    <Layout>
      <h1>Recipes</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "31px",
          margin: "20px auto",
          width: "100%",
          maxWidth: "1435px",
        }}
      >
        {recipes.slice(0, 12).map((recipe) => (
          <div
            key={recipe.id}
            style={{
              // border: "1px solid #1211117d",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              background: " rgb(255, 255, 255)",
              borderRadius: "16px",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
              overflow: "hidden",
              width: "460px",
            }}
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              style={{
                width: "210px",
                height: "100%",
                objectFit: "cover",
                padding: "15px",
                borderRadius: "23px",
                boxShadow: "9px 0px 5px -9px gray",
              }}
            />
            <div
              style={{
                padding: "19px",
                gap: "14px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                }}
              >
                {recipe.name}
              </h3>

              <p>
                <strong>Cuisine:</strong> {recipe.cuisine}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

import Layout from "@/components/Layout";

export default async function UsersPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <Layout>
      <h1>Users</h1>
      <div style={{}}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
            background: "white",
            borderRadius: "20px",
            overflow: "hidden",
            color: "#333",
            boxShadow: "rgba(144, 144, 144, 0.71) -1px -1px 8px -1px",
            margin: "6px auto",
            width: "100%",
            maxWidth: "1435px",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#2c93f9",
                color: "white",
                borderBottom: "1px solid red",
              }}
            >
              <th
                style={{
                  border: "1px solid #2c93f9",
                  padding: "20px",
                }}
              >
                ID
              </th>
              <th
                style={{
                  border: "1px solid #2c93f9",
                  padding: "8px",
                }}
              >
                Name
              </th>
              <th
                style={{
                  border: "1px solid #2c93f9",
                  padding: "8px",
                }}
              >
                Username
              </th>

              <th
                style={{
                  border: "1px solid #2c93f9",
                  padding: "8px",
                }}
              >
                Email
              </th>
              <th
                style={{
                  border: "1px solid #2c93f9",
                  padding: "8px",
                }}
              >
                Phone
              </th>
              <th
                style={{
                  border: "1px solid #2c93f9",
                  padding: "8px",
                }}
              >
                Website
              </th>
              <th
                style={{
                  border: "1px solid #2c93f9",
                  padding: "8px",
                }}
              >
                City
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, index) => (
              <tr
                style={{
                  borderBottom:
                    index !== users.length - 1 ? "1px solid #dfdfdf" : "none",
                  textAlign: "center",
                }}
                key={u.id}
              >
                <td
                  style={{
                    padding: "25px",
                  }}
                >
                  {u.id}
                </td>
                <td
                  style={{
                    border: "none",
                  }}
                >
                  {u.name}
                </td>
                <td
                  style={{
                    border: "none",
                  }}
                >
                  {u.username}
                </td>
                <td
                  style={{
                    border: "none",
                  }}
                >
                  {u.email}
                </td>
                <td style={{}}>{u.phone}</td>
                <td style={{}}>{u.website}</td>
                <td style={{}}>{u.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

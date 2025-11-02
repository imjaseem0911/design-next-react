"use client";
import { getActiveUser, logoutUser } from "@/lib/auth";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function Layout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const user = getActiveUser();

  return (
    <div className="layout">
      {/* Header */}
      <header className="header">
        <div className="logo">ConnectoMedia</div>
        <div className="user-info">
          {user && <span>{user.username}</span>}
          {user && (
            <button
              onClick={() => {
                logoutUser();
                router.push("/login");
              }}
            >
              Logout
            </button>
          )}
        </div>
      </header>

      {/* Sidebar + Body */}
      <div className="content">
        <aside className="sidebar">
          <ul>
            <li>
              <Link href="/" className={pathname === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/posts"
                className={pathname === "/posts" ? "active" : ""}
              >
                Posts
              </Link>
            </li>
            <li>
              <Link
                href="/comments"
                className={pathname === "/comments" ? "active" : ""}
              >
                Comments
              </Link>
            </li>
            <li>
              <Link
                href="/albums"
                className={pathname === "/albums" ? "active" : ""}
              >
                Albums
              </Link>
            </li>
            <li>
              <Link
                href="/photos"
                className={pathname === "/photos" ? "active" : ""}
              >
                Photos
              </Link>
            </li>
            <li>
              <Link
                href="/todos"
                className={pathname === "/todos" ? "active" : ""}
              >
                Todos
              </Link>
            </li>
            <li>
              <Link
                href="/recipes"
                className={pathname === "/recipes" ? "active" : ""}
              >
                Recipes
              </Link>
            </li>
            <li>
              <Link
                href="/carts"
                className={pathname === "/carts" ? "active" : ""}
              >
                Carts
              </Link>
            </li>
            <li>
              <Link
                href="/quotes"
                className={pathname === "/quotes" ? "active" : ""}
              >
                Quotes
              </Link>
            </li>
            <li>
              <Link
                href="/users"
                className={pathname === "/users" ? "active" : ""}
              >
                Users
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className={pathname === "/login" ? "active" : ""}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/register"
                className={pathname === "/register" ? "active" : ""}
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                href="/mui"
                className={pathname === "/register" ? "active" : ""}
              >
                MUI
              </Link>
            </li>
          </ul>
        </aside>

        <main className="page-body">{children}</main>
      </div>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </footer>
    </div>
  );
}

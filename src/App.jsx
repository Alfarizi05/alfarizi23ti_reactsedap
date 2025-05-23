import { Routes, Route } from "react-router-dom";
import "./assets/tailwind.css";
import React, { Suspense } from "react";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Orders = React.lazy(() => import("./pages/Orders"));
const UserPage = React.lazy(() => import("./pages/UserPage"));
const ErrorPage = React.lazy(() => import("./components/ErrorPage"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const Loading = React.lazy(() => import("./components/Loading"));
const SedapGuestPage = React.lazy(() => import("./pages/SedapGuestpage"));
// const Navbar = React.lazy(() => import("./components/Navbar"));
// const Footer = React.lazy(() => import("./components/ErrorPage"));
// const About = React.lazy(() => import("./components/ErrorPage"));
// const Produk = React.lazy(() => import("./components/ErrorPage"));
// const Testimoni = React.lazy(() => import("./components/ErrorPage"));

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Main layout for regular routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/users" element={<UserPage />} />
        </Route>

        {/* Auth layout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* Guest Page Route */}
        <Route path="/guest" element={<SedapGuestPage />} />

        {/* Error Routes */}
        <Route
          path="/error/400"
          element={
            <ErrorPage
              code={400}
              description="The server cannot process the request due to a bad syntax."
              image="/img/400.jpg"
            />
          }
        />
        <Route
          path="/error/401"
          element={
            <ErrorPage
              code={401}
              description="You are not authorized to view this page."
              image="/img/401.jpg"
            />
          }
        />
        <Route
          path="/error/403"
          element={
            <ErrorPage
              code={403}
              description="You don't have permission to access this page."
              image="/img/403.jpg"
            />
          }
        />
        <Route
          path="*"
          element={
            <ErrorPage
              code={404}
              description="Page Not Found"
              image="/img/404.jpg"
            />
          }
        />
      </Routes>
    </Suspense>
  );
}

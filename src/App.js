import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import HeaderNav from "./page/nav/HeaderNav";
import { HeaderTab } from "./page/nav/HeaderTab";
import { Resume } from "./page/nav/Resume";
// import MyParticle from "./page/MyParticle";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <HeaderTab />
      {/* <HeaderNav />
      <Outlet />  */}
    </div>
  );
}

function Home() {
  return (
    <div>
      <HeaderTab />
    </div>
  );
}

function About() {
  return (
    <div>
      <Resume />
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

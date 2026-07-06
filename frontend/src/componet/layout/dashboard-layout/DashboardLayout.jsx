import { Outlet } from "react-router";

export const DashboardLayout = () => {
  return (
    <main className="w-full h-screen bg-black rounded-3xl">
      <Outlet />
    </main>
  );
};

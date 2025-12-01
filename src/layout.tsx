import BottomNavigation from "./components/bottomNavigation";
import Header from "./components/header";
import type { ReactNode } from "react";

const Layout = ({children} : {children: ReactNode}) => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center">
        {children}
      </main>
      <BottomNavigation />
    </div>
  );
};

export default Layout;

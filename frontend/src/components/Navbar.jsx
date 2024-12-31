import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquareDot, Moon, Sun } from "lucide-react";
import { useThemeStore } from "../store/useThemeStore";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const { theme, setTheme } = useThemeStore();

  const toggleTheme = () => {
    const newTheme = theme === "autumn" ? "sunset" : "autumn";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };
  return (
    <header
      className="bg-base-100 border-b border-base-300 sticky w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquareDot className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">ByteTalk</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            {/* <Link
              to={"/settings"}
              className={`
              btn btn-sm gap-2 transition-colors
              
              `}
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link> */}
            <button
              onClick={toggleTheme}
              className={`btn btn-sm gap-2 transition-colors`}
              title={
                theme === "autumn"
                  ? "Switch to Dark Mode"
                  : "Switch to Light Mode"
              }
            >
              {theme === "autumn" ? (
                <Moon className="w-4 h-4" title="Switch to Dark Mode" />
              ) : (
                <Sun className="w-4 h-4" title="Switch to Light Mode" />
              )}
            </button>

            {authUser && (
              <>
                <Link to={"/profile"} title={`Profile`}>
                  <img
                    src={authUser?.profilePic || "/avatar.png"}
                    alt="Profile"
                    className="size-10 rounded-full object-cover border-4 "
                  />
                </Link>

                <button className="flex gap-2 items-center" onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;

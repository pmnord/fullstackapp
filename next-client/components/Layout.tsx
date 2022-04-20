import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import Link from "next/link";
import { toggleTheme } from "store/core/coreSlice";
import Button from "./Button";

const Layout: React.FC<{}> = ({ children }) => {
  const theme = useAppSelector((state) => state.core.theme);
  const dispatch = useAppDispatch();

  console.log(theme);

  const handleThemeToggleClick = () => dispatch(toggleTheme());

  return (
    <div className={theme}>
      <div className="dark:bg-stone-900 dark:text-white">
        <div className="mx-auto flex min-h-screen max-w-3xl flex-col">
          <header className="flex justify-between py-2">
            <nav>
              <Link href="/" passHref>
                <a className="block font-bold">HousePlantr</a>
              </Link>
            </nav>
            <Button onClick={handleThemeToggleClick}>light/dark</Button>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="p-2 text-center">
            <Link href="https://github.com/pmnord/fullstackapp" passHref>
              <a
                className="text-gray-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source on GitHub
              </a>
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Layout;

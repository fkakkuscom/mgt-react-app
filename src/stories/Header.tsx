import { Link, useRoute } from "wouter";
import "./Header.css";

interface HeaderLinkProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  href: string;
  children?: React.ReactNode;
}

function HeaderLink({ href, children }: HeaderLinkProps) {
  const [isActive] = useRoute(href);

  return (
    <Link
      href={href}
      className={[
        "block px-4 py-2 rounded-full " +
          " font-medium no-underline dark:text-purple-400 hover:text-purple-300" +
          " hover:bg-purple-300 hover:bg-opacity-5" +
          " transition-colors duration-300 ease-in-out whitespace-nowrap -outline-offset-1",
        isActive ? " bg-purple-700 bg-opacity-15" : "",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

export interface HeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  loggedIn?: boolean;
  className?: string;
}

function Header({ loggedIn, className }: HeaderProps) {
  return (
    <header
      className={[
        "storybook-header self-center w-full dark:text-white",
        className,
      ].join(" ")}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center py-6 px-4">
          <img
            src="/logo48.png"
            alt="Logo"
            className="h-10 w-10 mr-4 rounded-full"
          />
          <div className="flex justify-center overflow-hidden">
            <nav className="overflow-x-auto">
              <ul className="flex flex-row space-x-0 list-none p-0 m-0">
                <li>
                  <HeaderLink href="/">Home</HeaderLink>
                </li>
                <li>
                  <HeaderLink href="/about">About</HeaderLink>
                </li>
                <li>
                  <HeaderLink href="/blog">Blog</HeaderLink>
                </li>
                <li>
                  <HeaderLink href="/three">3D Scene</HeaderLink>
                </li>
                <li>
                  <HeaderLink href="/storybook">Storybook</HeaderLink>
                </li>
                {loggedIn ? (
                  <li>
                    <HeaderLink href="/profile">Profile</HeaderLink>
                  </li>
                ) : (
                  <li>
                    <HeaderLink href="/login">Login</HeaderLink>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

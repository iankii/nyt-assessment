import { Logo, Container } from "../index";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

type NavItem = {
  name: string;
  slug: string;
};

function Header() {
  const navigate = useNavigate();

  const navItems: NavItem[] = [
    { name: "Home", slug: "/" },
    { name: "All Post", slug: "/all-posts" },
  ];

  return (
    <header className="py-3 shadow bg-green-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item: NavItem) => (
              <li key={item.name}>
                <button
                  className="inline-bock px-6 py-2 duration-200 hover:scale-110 hover:bg-blue-100 rounded-full"
                  onClick={() => navigate(item.slug)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;

import React from "react";
import { Link } from "react-scroll";
import { ReactComponent as Illustration } from "../assets/footer.svg";
import { MENU, NAME } from "../data/data";
const Footer: React.FC = () => {
  return (
    <>
      <div className="px-0 py-0 mx-0 my-0 antialiased text-center">
        <Illustration />
        <div className="flex flex-col pt-3 bg-current md:items-center f-f-l">
          <h1 className="text-4xl font-black text-neutral-content">
            Chaymae ABOURRI
          </h1>
          <div className="my-3 text-base text-center text-neutral-content ">
            <ul className="items-center md:flex">
              {MENU.map(({ key, name, route }) => (
                <Link
                  key={key}
                  activeClass="btn btn-ghost btn-sm rounded-btn cursor-pointer active font-extrabold text-secondary-focus transition "
                  to={route}
                  spy={true}
                  smooth={true}
                  duration={300}
                  className={
                    "btn-primary btn-ghost btn-sm rounded-btn  pt-2 cursor-pointer md:mr-6 lg:py-0"
                  }
                >
                  {name}
                </Link>
              ))}
            </ul>
          </div>
          <div className="mb-3 text-md text-neutral-content">
            <p>
              © {new Date().getFullYear()} {NAME}. Tous les droits sont réservés.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

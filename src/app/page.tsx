import { getSession, signOut } from "next-auth/react";
import Link from "next/link";
import WebBar from "@/components/WebBar";
import TableList from "@/components/TableList"

const links = [
  {
    label: "HomePage",
    route: "/"
  },
  {
    label: "LoginPage",
    route: "/login"
  },
  {
    label: "RegisterPage",
    route: "/register"
  }
];

async function HomePage() {
  return (
    <div className="container-page">
      <WebBar />
      <div className="container-body">
        <div className="container-menu">
          <p>Bienvenido</p>
          <div className="item-menu">
            <svg
              id="icon"
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            <div className="link-page">
              <Link href="/">Inicio</Link>
            </div>
          </div>
          <div className="item-menu">
            <svg
              id="icon"
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v2H7V2ZM5 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm8 4H8a1 1 0 0 1 0-2h5a1 1 0 0 1 0 2Zm0-4H8a1 1 0 0 1 0-2h5a1 1 0 1 1 0 2Z" />
            </svg>
            <div className="link-page">
              <Link href="/register">Newsletter</Link>
            </div>
          </div>
          <div className="item-menu">
            <svg
              id="icon"
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
            <div className="link-page">
              <Link href="/galeria">Galeria</Link>
            </div>
          </div>
        </div>
        <div className="card-list">
          <div className="pestania">Newsletter</div>
          <div className="list-newletter">
            <div className="title">Listado de Newsletter</div>
            <button className="btn-crear">
              <svg
                id="plus"
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path stroke="currentColor" d="M9 1v16M1 9h16" />
              </svg>
              <strong> Crear</strong>
            </button>
          </div>
          <TableList/>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

export const getServerSideProps = async ({context}) => {
  const session = await getSession(context);

  if (!session)
    return {
      redirect: {
        destination: "/login",
        permanent: false
      }
    };

  return {
    props: {
      session
    }
  };
};

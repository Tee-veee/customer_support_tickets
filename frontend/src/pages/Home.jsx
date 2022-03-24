import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";

function Home() {
  return (
    <div className="px-6 xl:px-[400px]">
      <section className="flex items-center justify-center flex-col text-3xl mt-10 space-y-10">
        <h1>What do you need help with?</h1>
        <p>Choose from an option below!</p>
      </section>
      <section className="flex items-center justify-center flex-col text-xl mt-10 space-y-10">
        <Link
          to="/new-ticket"
          className="w-full xl:w-6/12 xl:mx-auto flex items-center justify-center bg-green-400 p-1 rounded-lg  hover:scale-[.98] hover:transition-all"
        >
          <FaQuestionCircle className="text-3xl" />
          <h1 className="ml-2 py-2 px-1 ">Create New Ticket</h1>
        </Link>
        <Link
          to="/tickets"
          className="w-full xl:w-6/12 xl:mx-auto flex items-center justify-center bg-black text-white p-1 rounded-lg  hover:scale-[.98] hover:transition-all"
        >
          <FaTicketAlt className="text-3xl" />
          <h1 className="ml-2 py-2 px-1">View My Tickets</h1>
        </Link>
      </section>
    </div>
  );
}

export default Home;

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createTicket, reset } from "../features/tickets/ticketSlice";
// COMPONENTS
import Spinner from "../components/Spinner";

function NewTicket() {
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.tickets
  );
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [product, setProduct] = useState("iPhone");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      dispatch(reset());
      navigate("/tickets");
    }

    dispatch(reset());
  }, [dispatch, isError, isSuccess, navigate, message, reset]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createTicket({ product, description }));
    console.log(product, description);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="px-6 xl:px-80 flex items-center flex-col w-full ">
      <section>
        <h1 className="text-center text-5xl mt-10">Create new ticket</h1>
        <p className="my-6 text-center text-3xl">
          Please fill out the required fields
        </p>
      </section>

      <section className="flex flex-col  xl:w-6/12 w-full">
        <div className="w-full flex flex-col mb-4">
          <label htmlFor="name" className="text-sm">
            Customer Name
          </label>
          <input type="text" value={name} className="p-1 text-xl" disabled />
        </div>
        <div className="w-full flex  flex-col mb-4">
          <label htmlFor="email" className="text-sm">
            Customer Email
          </label>
          <input type="text" value={email} className="p-1 text-xl" disabled />
        </div>
      </section>
      <form onSubmit={handleSubmit} className="w-full xl:w-6/12 ">
        <div className="flex flex-col w-full mb-4">
          <label htmlFor="product" className="text-sm">
            Product
          </label>
          <select
            name="product"
            id="product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="w-full p-1 text-xl"
          >
            <option value="iPhone">iPhone</option>
            <option value="Macbook Pro">Macbook Pro</option>
            <option value="Pixel 6">Pixel 6</option>
            <option value="iPad Pro">iPad Pro</option>
          </select>
        </div>
        <div className=" flex flex-col w-full">
          <label htmlFor="description" className="text-sm">
            Description of the issue
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="Ticket description"
            value={description}
            className="p-1 text-xl mb-4"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <button className="p-2 w-full flex items-center justify-center bg-green-400 rounded-lg hover:scale-[.99] hover:transition-all">
            <h1>Submit</h1>
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewTicket;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    paymentMethod: "Credit Card",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.address) {
      toast.error("Please fill in all required fields!");
      return;
    }

    toast.success(`Thank you for your purchase, ${formData.name}!Transaction in progress.`)

    
    setTimeout(() => navigate("/"),10000)
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Name:</label>
        <input
          type="text"
          className="border w-full p-2 rounded-md mb-4"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />

        <label className="block mb-2">Shipping Address:</label>
        <input
          type="text"
          className="border w-full p-2 rounded-md mb-4"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          required
        />

        <label className="block mb-2">Payment Method:</label>
        <select
          className="border w-full p-2 rounded-md mb-4"
          value={formData.paymentMethod}
          onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
        >
          <option>Credit Card</option>
          <option>PayPal</option>
          <option>Mobile Money</option>
        </select>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors">
          Complete Purchase
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Checkout;
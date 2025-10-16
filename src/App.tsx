import React, { useState } from "react";
import { createPayment } from "./services/sonicpesa";

interface PaymentForm {
  name: string;
  email: string;
  phone: string;
  amount: string;
}

interface PaymentData {
    name: string;
    email: string;
    phone: string;
    amount: number;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<PaymentForm>({
    name: "",
    email: "",
    phone: "",
    amount: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const paymentData: PaymentData = {
          phone: formData.phone,
          amount: formData.amount,
          name: formData.name,
          email: formData.email,
      };
      const res = await createPayment(paymentData)
      console.log("Response: ", res)
      // await new Promise((resolve) => setTimeout(resolve, 2000));

      setMessage("✅ Payment successful!");
      // setFormData({ name: "", email: "", phone: "", amount: "" });
    } catch (error: unknown) {
      setMessage("❌ Payment failed. Try again.");
      console.log("Error: ", error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
          Make a Payment
        </h2>

        <form onSubmit={handlePayment} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="255657779003"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Amount (TZS)</label>
            <input
              type="number"
              name="amount"
              placeholder="5000"
              value={formData.amount}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg text-white font-semibold transition ${
              loading
                ? "bg-indigo-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center font-medium ${
              message.includes("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default App;

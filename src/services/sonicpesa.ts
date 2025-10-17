import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

interface PaymentData {
    name: string;
    email: string;
    phone: string;
    amount: number;
}

interface PaymentResponse {
    success: boolean;
    message: string;
    data?: unknown;
}

export const createPayment = async (paymentData: PaymentData) => {
    try {
        const response: PaymentResponse = await axios.post(
            "https://sonicpesa.com/api/payment/create",
            paymentData,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${API_KEY}`,
                },
            }
        );
        console.log("Payment created successfully: ", response.data);
        const data = response.data;
        return data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data || error.message;
        console.error("❌ API Error:", message);
        return message;
      }
    
      if (error instanceof Error) {
        // Standard JS error
        console.error("❌ Request Error:", error.message);
        return error.message;
      }
    
      console.error("❌ An unknown error occurred.");
      return "An unknown error occurred";
    }

};
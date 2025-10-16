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

export const createPayment = async (paymentData: PaymentData): Promise<void> => {
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
    } catch (error: any) {
        if (error.response) {
            console.error("❌ API Error:", error.response.data);
        } else {
            console.error("❌ Request Error:", error.message);
        }
    }
};
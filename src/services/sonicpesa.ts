import axios from "axios";

const API_KEY = "pk_YOUR_API_KEY";

interface PaymentData {
    phone: string;
    amount: number;
    name: string;
    email: string;
}

interface PaymentResponse {
    success: boolean;
    message: string;
    data?: any;
}

export const createPayment = async (paymentData: PaymentData): Promise<void> => {
    try {
        // const paymentData: PaymentData = {
        //     phone: "255657779003",
        //     amount: 5000,
        //     name: "Benjamini Omary",
        //     email: "sam@gmail.com",
        // };

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
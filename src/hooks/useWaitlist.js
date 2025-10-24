import { useState } from "react";

export const useWaitlist = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const submitToWaitlist = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setIsSuccess(true);
        setEmail(""); // Clear the email field on success
      } else {
        setMessage(data.error || "Something went wrong. Please try again.");
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage("Network error. Please check your connection and try again.");
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    isLoading,
    message,
    isSuccess,
    submitToWaitlist,
  };
};

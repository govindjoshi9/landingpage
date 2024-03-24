import { useState } from "react";

const JoinNowForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    mobNo: "",
    email: "",
    msg: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/createClient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Failed to submit form. Please try again later.");
    }
  };

  return (
    <div className="mt-8 max-w-md mx-auto">
      <h2 className="text-3xl text-center font-semibold mb-4">Join Now</h2>
      {isSubmitted ? (
        <p className="text-lg text-center text-green-600 mb-4">
          Thank you for your submission! We'll be in touch shortly.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              name="mobNo"
              value={formData.mobNo}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <textarea
              name="msg"
              value={formData.msg}
              onChange={handleChange}
              placeholder="Message (Optional)"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 resize-none"
              rows={4}
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default JoinNowForm;

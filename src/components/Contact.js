const Contact = () => {
    return (
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
  {/* Page Title */}
  <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Us</h1>

  {/* Contact Form */}
  <form className="flex flex-col">
    {/* Name Input */}
    <input
      type="text"
      className="border border-[#FBE49D] p-3 rounded-md mb-4 focus:ring-2 focus:ring-[#F8CB46] focus:outline-none"
      placeholder="Your Name"
    />

    {/* Message Input */}
    <textarea
      className="border border-[#FBE49D] p-3 rounded-md mb-4 h-32 focus:ring-2 focus:ring-[#F8CB46] focus:outline-none"
      placeholder="Your Message"
    ></textarea>

    {/* Submit Button with Corn Gradient */}
    <button className="p-3 font-semibold rounded-md text-white bg-gradient-to-r from-[#FDEFC4] via-[#F8CB46] to-[#936E00] hover:opacity-90 transition duration-300">
      Submit
    </button>
  </form>
</div>



    );
  };
  export default Contact;
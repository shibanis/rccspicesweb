const Contact = () => {
  return (
    <div className="text-white/80 space-y-4">
      <p>Email: contact@rccspices.com</p>
      <p>Phone: +1 234 567 8900</p>
      <p>Address: 123 Spice Street, Kerala, India</p>
      <div className="mt-8">
        <h3 className="text-xl mb-4">Send us a message</h3>
        <form className="space-y-4">
          <input 
            type="email" 
            placeholder="Your email"
            className="w-full p-2 bg-white/10 border border-white/20 rounded"
          />
          <textarea 
            placeholder="Your message"
            className="w-full p-2 bg-white/10 border border-white/20 rounded h-32"
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default Contact; 
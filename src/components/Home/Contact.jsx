import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email address";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted:", formData);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    
      <div className="w-[45vw]  ">
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#191919] text-white placeholder-gray-400 border-none rounded-sm  focus:ring-2 focus:ring-yellow-500 h-12 "
            />
            {errors.name && <p className="text-red-900 text-sm">{errors.name}</p>}
          </div>
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#191919] text-white placeholder-gray-400 border-none rounded-sm  focus:ring-2 focus:ring-yellow-500 h-12 "
            />
            {errors.email && <p className="text-red-900 text-sm">{errors.email}</p>}
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-[#191919] text-white placeholder-gray-400 border-none rounded-sm  focus:ring-2 focus:ring-yellow-500 h-32 "
            />
            {errors.message && <p className="text-red-900 text-sm">{errors.message}</p>}
          </div>
          <div className="flex justify-center">
            <Button  type="submit" className="bg-[#f0d083] text-black text-xl font-light px-4 py-2 rounded-sm  hover:bg-[#e8c56e] transition shadow-[0px_10px_8px_-5px_rgba(13,_13,_13,_0.4)] ">
              Submit
            </Button>
          </div>
        </form>
      </div>
    
  );
};

export default ContactForm;

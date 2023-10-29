import React, { useState } from "react";
import { addService } from "../../api/services";
import toast from "react-hot-toast";

const AddService = () => {
  const [newService, setNewService] = useState({
    img: "",
    name: "",
    description: "",
    price: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService({
      ...newService,
      [name]: value,
    });
  };

  const handleAddService = async () => {
    try {
      const response = await addService(newService); // Call the addService function
      if (response) {
        toast.success("Service added successfully");
        // Reset the form or perform other actions
        setNewService({
          img: "",
          name: "",
          description: "",
          price: 0,
        });
      } else {
        // Failed to add service
        toast.error("Failed to add service");
        console.error("Failed to add service");
      }
    } catch (error) {
      toast.error("Error adding service");
      console.error("Error adding service:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-medium text-[#0C0C0C] bg-white p-5">
        Add Services
      </h1>
      <div className="p-20">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-[#0C0C0C]">
            Service Image
          </label>
          <input
            type="text"
            name="img"
            value={newService.img}
            onChange={handleInputChange}
            className="border border-[#ff8cb2] rounded-md px-2 py-1 w-1/2"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-[#0C0C0C]">Name</label>
          <input
            type="text"
            name="name"
            value={newService.name}
            onChange={handleInputChange}
            className="border border-[#ff8cb2] rounded-md px-2 py-1 w-1/2"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-[#0C0C0C]">
            Description
          </label>
          <textarea
            name="description"
            value={newService.description}
            onChange={handleInputChange}
            className="border border-[#ff8cb2] rounded-md px-2 py-1 w-1/2"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-[#0C0C0C]">Price</label>
          <input
            type="number"
            name="price"
            value={newService.price}
            onChange={handleInputChange}
            className="border border-[#ff8cb2] rounded-md px-2 py-1 w-1/2"
          />
        </div>
        <button
          onClick={handleAddService}
          className="bg-[#ff578f] text-white px-2 py-1 rounded-md mt-5"
        >
          Add Service
        </button>
      </div>
    </div>
  );
};

export default AddService;

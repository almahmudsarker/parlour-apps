import React, { useState } from "react";
import Container from "../../shared/Container";
import Card from "./Card";
import { useEffect } from "react";
import Loader from "../../shared/Loader";
import { getAllService } from "../../../api/services.js";

const ServiceCard = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllService()
      .then((data) => {
        setServices(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const [exploreMore, setExploreMore] = useState(false);
  const handleExploreMore = () => {
    setExploreMore(!exploreMore);
  };

  const filteredServices = services.filter((service, index) => {
    if (exploreMore) {
      return true;
    } else {
      return index < 3;
    }
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        {filteredServices.map((service) => (
          <Card key={service._id} service={service} />
        ))}
      </div>
      <button
        className="bg-[#F63E7B] text-white font-medium py-3 px-8 rounded-md mt-10 mx-auto block"
        onClick={handleExploreMore}
      >
        {exploreMore ? "Show Less" : "Explore More"}
      </button>
    </Container>
  );
};

export default ServiceCard;

import React from "react";

const LeadershipSection = () => {
  const team = [
    {
      name: "PARENT",
      img: "https://res.cloudinary.com/duwddcqzi/image/upload/v1737742588/parents_fi1xvw.png",
    },
    {
      name: "CHILD",
      img: "https://res.cloudinary.com/duwddcqzi/image/upload/v1737742589/students_yvafhy.png",
    },
    {
      name: "ORGANISATION",
      img: "https://res.cloudinary.com/duwddcqzi/image/upload/v1737742588/orga_etmg6d.png",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 text-gray-800 h-screen w-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">CHOOSE YOUR CATEGORY</h2>
        <p className="text-gray-600 mb-24">
          Tailus prides itself not only on award-winning technology, but also on
          the talent of its people – some of the brightest minds and most
          experienced executives in business.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-full hover:scale-105 transition-all shadow-lg p-6 text-center hover:shadow-lime-600"
            >
              <img
                src={member.img}
                alt={member.name}
                className=" w-36 h-36 mx-auto rounded-full mb-4 hover:tra"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;

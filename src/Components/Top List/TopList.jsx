import image1 from "../../assets/3.png";
import image2 from "../../assets/4.png";
import image3 from "../../assets/5.png";

const TopList = () => {
  const FoodData = [
    {
      image: image1,
      rating: "★★★★★",
      price: "10.09$",
      name: "Food Name",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      image: image2,
      rating: "★★★★★",
      price: "17.09$",
      name: "Food Name",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      image: image3,
      rating: "★★★★★",
      price: "23.09$",
      name: "Food Name",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ];
  return (
    <div className="container py-14">
      {/* Header Section */}
      <div className="text-center mb-14">
        <h3 className="text-4xl font-semibold mb-3">Top List</h3>
        <p className="text-gray-500">Our Top List</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {FoodData.map((item, index) => (
          <div
            key={index}
            className="bg-white/50 p-5 lg:p-6 rounded-3xl hover:scale-105 transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-60 sm:w-40  lg:w-[240px] mx-auto object-cover rounded-full img-shadow"
            />
            <div className="space-y-2">
              <p className="text-red-500 text-2xl">{item.rating}</p>
              <p className="text-lg font-semibold text-slate-800">
                {item.name}
              </p>
              <p className="text-gray-700">{item.des}</p>
              <p className="text-lg font-semibold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopList;

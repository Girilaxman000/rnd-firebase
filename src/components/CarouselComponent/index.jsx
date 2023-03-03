import Carousel from "react-elastic-carousel";
import cursor from "../../assets/icons8-cursor-50.png";
import star from "../../assets/star.svg";
import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.avif";
import img3 from "../../assets/img3.avif";
const CarouselComponent = () => {
  const items = [
    {
      id: 1,
      title:
        "LendingThree is awesome. They were super quick and easy. I did all the stuff online and in couple minutes got an approval. I had to do an emergency tooth extraction because of the pain it was causing. It was great to be able to get it done so fast and not go another day with a terrible toothache. Thank you so much!",
      name: "THOMAS CHIRCHON",
      post: "WA",
      image: img1,
    },
    {
      id: 2,
      title:
        "When I was ready to go home, my car wouldn't start and it needed to be towed to a shop to be fixed. Since I hadn't been paid yet this week, I went online to see if I could find help. I found LendingThree. It took me 5 minutes to fill out the form and get approved. I got the money the next day. Thank you!",
      name: "THOMAS CHIRCHON",
      post: "WA",
      image: img2,
    },
    {
      id: 3,
      title:
        "A pipe in my house burst and I didn't have any money at the time to fix it. My buddy had used LendingThree before and told me they could help. I went online and filled out a their form. After only a couple of minutes they told me I could get $10,000. I got the money next day and was able to repair the pipe right away. ",
      name: "THOMAS CHIRCHON",
      post: "WA",
      image: img3,
    },
  ];

  return (
    <div className="p-10">
      <h1 className="text-center text-2xl font-bold">Customer Reviews</h1>
      <div className="pt-5">
        <Carousel showArrows={false}>
          {items.map((item) => (
            <div className="w-[30%]">
              <div className="flex justify-center">
                <img src={star} alt="" className="w-10" />
                <img src={star} alt="" className="w-10" />
                <img src={star} alt="" className="w-10" />
                <img src={star} alt="" className="w-10" />
                <img src={star} alt="" className="w-10" />
              </div>
              <div className="flex flex-col gap-8 mt-5">
                <p className="text-center text-[17px]">{item.title}</p>
                <div>
                  <div className="h-20 w-20 rounded-full overflow-hidden mx-auto">
                    <img
                      src={item.image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="text-center text-[20px] font-bold">
                    {item.name}
                  </p>
                  <p className="text-center">{item.post}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;

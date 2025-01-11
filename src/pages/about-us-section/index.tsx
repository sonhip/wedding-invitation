import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Đăng ký plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Định nghĩa kiểu cho dữ liệu giai đoạn
interface Stage {
  title: string;
  description: string;
  image: string;
}

const AboutUsSection: React.FC = () => {
  useEffect(() => {
    // GSAP Scroll Animation cho từng giai đoạn
    gsap.utils.toArray(".love-stage").forEach((stage: any) => {
      gsap.fromTo(
        stage,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: stage,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const stages: Stage[] = [
    {
      title: "Bắt đầu từ một ngày mùa xuân nào đó",
      description:
        "Cuộc hội ngộ của hai mảnh ghép đơn lẻ. Chúng mình đã vô tình tìm thấy nhau giữa biển người bao la rộng lớn. Và dù có những xa lạ và bỡ ngỡ ban đầu, chúng mình vẫn quyết định cùng cho nhau một cơ hội để nán lại tìm hiểu người kia thêm một chút. Và câu chuyện tình này bắt đầu..",
      image:
        "https://thiepcuoionline.huythanhjewelry.vn/storage/yOdqnVe5fv.webp",
    },
    {
      title: "Cột mốc đáng nhớ",
      description:
        'Quyết định quan trọng. Giống như mọi bản nhạc đều sẽ có lúc thăng trầm, câu chuyện sẽ có lúc lên xuống, chúng mình đã cùng nhau trải qua những khoảnh khắc vui, buồn, giận, hờn bên nhau. Và rồi ngày đó đã đến, sau thời gian cùng nhau điều chỉnh, "mài giũa", hai mảnh ghép quyết định sẽ không xuôi theo dòng chảy của riêng mình nữa. Chúng mình quyết định dừng chân để là bến đỗ cuối cùng của nhau...',
      image:
        "https://thiepcuoionline.huythanhjewelry.vn/storage/H8aLV4B85W.webp",
    },
    {
      title: "08/01/2025 và sau nữa",
      description:
        'Ngày chung đôi. Câu chuyện khởi đầu vào mùa xuân, nên chúng mình muốn viết nên một cái kết hạnh phúc vào mùa đông. Để mùa xuân tiếp theo, chúng mình sẽ cùng nhau viết nên một câu chuyện khác, nhưng giờ với một vai trò mới, là "Vợ", là "Chồng". Vào ngày 08/01/2025 tới này, mong bạn đến chung vui và cùng chứng kiến cái kết hạnh phúc cho câu chuyện chúng mình, và cùng nhau mở ra một hành trình mới nhé :))',
      image:
        "https://thiepcuoionline.huythanhjewelry.vn/storage/1EGooIyBS2.webp",
    },
  ];

  return (
    <section className="bg-wedding-light py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {stages.map((stage, index) => (
          <div
            key={index}
            className={`love-stage flex flex-col md:flex-row gap-8 items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {/* Text Content */}
            <div>
              <h2 className="text-wedding-deep text-3xl md:text-4xl font-bold">
                {stage.title}
              </h2>
              <p className="text-wedding-purple text-lg mt-4 leading-relaxed">
                {stage.description}
              </p>
            </div>

            {/* Image */}
            <div className="mx-auto w-full max-w-md sm:max-w-lg md:max-w-xl flex-shrink-0">
              <img
                src={stage.image}
                alt={stage.title}
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsSection;

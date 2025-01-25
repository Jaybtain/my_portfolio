import Image from "next/image";
import memojiAvatar1 from "@/components/assets/memoji-avatar-1.png";
import memojiAvatar2 from "@/components/assets/memoji-avatar-2.png";
import memojiAvatar3 from "@/components/assets/memoji-avatar-3.png";
import memojiAvatar4 from "@/components/assets/memoji-avatar-4.png";
import memojiAvatar5 from "@/components/assets/memoji-avatar-5.png";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We&#39;re thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex&#39;s ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn&#39;t be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We&#39;re already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex&#39;s work on our website has been nothing short of exceptional. He&#39;s a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div>
      <p>Happy Clients</p>
      <h2>What Clients Say About Me</h2>
      <p>Don&#39;t just take my word for it. See what my clients have to say about my work.</p>
      <div>
        {testimonials.map((testimonial) => (
          <div key={testimonial.name}>
            <Image src={testimonial.avatar} alt={testimonial.name} />
            <div>{testimonial.name}</div>
            <div>{testimonial.position}</div>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

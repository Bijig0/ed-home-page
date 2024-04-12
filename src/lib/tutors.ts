type Tutor = {
  name: string;
  description: string;
  image: string;
};

const tutors = [
  {
    name: "Miranda Fox",
    description: "Lorem ipsum dolor sit amet consectetur elit sed do.",
    image:
      "https://www.austockphoto.com.au/imgcache/uploads/photos/compressed/asian-university-student-austockphoto-000111941.jpg?v=1.4.2",
  },
  {
    name: "James Maxwell",
    description: "Lorem ipsum dolor sit amet consectetur elit sed do.",
    image: "assets/images/people/2.jpg",
  },
  {
    name: "John Woo",
    description: "Lorem ipsum dolor sit amet consectetur elit sed do.",
    image:
      "https://alchemytuition.com.au/wp-content/uploads/2022/08/Des-600x600-1.jpg",
  },
  {
    name: "Emily Thompson",
    description: "Lorem ipsum dolor sit amet consectetur elit sed do.",
    image: "assets/images/people/4.jpg",
  },
  {
    name: "Robert Fox",
    description: "Lorem ipsum dolor sit amet consectetur elit sed do.",
    image: "assets/images/people/5.jpg",
  },
  {
    name: "Ava Taylor",
    description: "Lorem ipsum dolor sit amet consectetur elit sed do.",
    image: "assets/images/people/6.jpg",
  },
] satisfies Tutor[];

export default tutors;

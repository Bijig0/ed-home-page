type Tutor = {
  name: string;
  description: string;
  image: string;
};

const tutors = [
  {
    name: "Miranda Fox",
    description: "Syd, QLD. VCE Study Score 48/50. Loves bowling and boba tea",
    image:
      "https://www.austockphoto.com.au/imgcache/uploads/photos/compressed/asian-university-student-austockphoto-000111941.jpg?v=1.4.2",
  },
  {
    name: "Emily Mckinee",
    description:
      "Syd, QLD: Bachelor of Arts (Hons) in English. Loves reading and writing",
    image: "assets/images/people/2.jpg",
  },
  {
    name: "Johnathan D",
    description: "Melbourne, VIC: Melbourne High 2021 Dux. Belieber",
    image:
      "https://alchemytuition.com.au/wp-content/uploads/2022/08/Des-600x600-1.jpg",
  },
  {
    name: "Mickey L.L",
    description:
      "Melbourne, VIC: Bachelor of Science Unimelb #1 Taylor Swift Fan",
    image: "assets/images/people/4.jpg",
  },
  {
    name: "Robert Fox",
    description: "Melbourne, VIC: Master of I.T. Thinks AI is the future",
    image: "assets/images/people/5.jpg",
  },
  {
    name: "Tom Zhu",
    description:
      "Melbourne, VIC: Bachelor of Science Unimelb. Loves reading and writing",
    image: "assets/images/people/6.jpg",
  },
] satisfies Tutor[];

export default tutors;

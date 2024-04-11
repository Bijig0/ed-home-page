type Subject = {
  name: string;
  src: string;
};

const subjects = [
  {
    name: "Math",
    src: "https://img.icons8.com/bubbles/50/calculator--v1.png",
  },
  {
    name: "English",
    src: "https://img.icons8.com/bubbles/50/literature.png",
  },
  {
    name: "Chemistry",
    src: "https://img.icons8.com/bubbles/50/test-tube.png",
  },
  {
    name: "Physics",
    src: "https://img.icons8.com/bubbles/50/bouncing-ball.png",
  },
  {
    name: "Biology",
    src: "https://img.icons8.com/bubbles/50/biotech.png",
  },
  {
    name: "Economics",
    src: "https://img.icons8.com/bubbles/50/economic-improvement.png",
  },
  {
    name: "Business Studies",
    src: "https://img.icons8.com/bubbles/50/business.png",
  },
  {
    name: "IT Studies",
    src: "https://img.icons8.com/bubbles/50/circuit.png",
  },
  {
    name: "History",
    src: "https://img.icons8.com/bubbles/50/hourglass.png",
  },
  {
    name: "...More",
    src: "https://img.icons8.com/ios-filled/50/more.png",
  },
] satisfies Subject[];

export default subjects;

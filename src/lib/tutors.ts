type Tutor = {
    name: string;
    description: string;
    image; string;
}

const tutors = [
    {
        name: "Miranda Fox",
        description: "Lorem ipsum dolor sit amet consectetur elit sed do.",
        image: "assets/images/people/1.jpg",
    },
    {
        name: "James Maxwell",
        description: "Lorem ipsum dolor sit amet consectetur elit sed do.",
        image: "assets/images/people/2.jpg",
    },
    {
        name: "John Woo",
        description: "Lorem ipsum dolor sit amet consectetur elit sed do.",
        image: "assets/images/people/3.jpg",
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
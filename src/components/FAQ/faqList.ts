type FAQ = {
  title: string;
  text: string;
};

const faqList = [
  {
    title: "What makes Hi-Up different?",
    text: "At Hi-Up, we recognise that a strong rapport and good chemistry between tutor and student is essential to the effectiveness of one-on-one tutoring. Our tutors are highly motivating, personable, well-rounded and skilled to create an environment which encourages students to achieve academic success. Tutors strive to excite their students about the learning process; instilling in them a sense of confidence, which in turn makes them much more productive in the classroom or workplace.",
  },
  {
    title: "How does tutoring work at Hi-Up?",
    text: "Start a booking by clicking the 'Book Now' button at the navigation bar and we'll connect you with a tutor in under 72 hours. Afterwards, we'll send you a confirmation message with your tutor's details, and you can commence you or your child's tutoring immediately!",
  },
  {
    title: "Does Hi-Up do both online and in-person lessons?",
    text: "Yes, we have multiple tutors with a wide range of time availability for online tutoring alongside multiple tutors located around the entire Victoria and QLD area. Simply reach out and we'll let you know about in-person availability",
  },
  {
    title: "How do payments work?",
    text: "Once you've had your first lesson, we'll ask for your session feedback. If all goes well, we'll ask once for payment info and that's it! We'll charge you automatically 24 hours after every lesson henceforth.",
  },
  {
    title: "Who will be tutoring my child (or me)?",
    text: "Our tutors are hand-selected prior academic high school graduates who are all triple screened with valid Working With Children Checks (WWCC)",
  },
] satisfies FAQ[];

export default faqList;

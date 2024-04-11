type FAQ = {
  title: string;
  text: string;
};

const faqList = [
  {
    title: "What makes EduLine different?",
    text: "At EduLine, we recognise that a strong rapport and good chemistry between tutor and student is essential to the effectiveness of one-on-one tutoring. Our tutors are highly motivating, personable, well-rounded and skilled to create an environment which encourages students to achieve academic success. Tutors strive to excite their students about the learning process; instilling in them a sense of confidence, which in turn makes them much more productive in the classroom or workplace.",
  },
  {
    title: "How does tutoring work?",
    text: "Some shit here",
  },
  {
    title: "How can I start tutoring for my child (or me)?",
    text: "No, you don’t need personal insurance coverage to book a car with Gifleet. When booking a car in Australia, you’ll choose between the Premier (if available), Standard, and Minimum protection plans. Each plan includes varying limits on financial responsibility for damage to a host’s vehicle. All trips include $20,000,000 in legal liability protection for damage to other people’s property. All protection is provided by Gifleet's insurance policy.*",
  },
  {
    title: "Do you do both online and in-person lessons?",
    text: "Yes, multiple guests can drive the car you booked with Gifleet, as long as they are all approved to drive. The primary driver (whoever booked the car) can add additional drivers with no fees or additional charges. Only the primary driver can request to add drivers; Turo hosts cannot do it for you. We encourage you to request to add additional drivers before your trip starts, though you can request to add a driver while a trip is in progress. To speed up the process, have your additional driver create a Turo account and get approved to drive before you request to add them. All drivers must have a valid driver’s licence and meet the age requirements for the car you’ve booked. Please let a representative know of any further enquiries.",
  },
  {
    title: "How do payments work?",
    text: "You can cancel and get a full refund up to  24 hours before your trip starts. If you book a trip with less than  24 hours’ notice, you have one hour after booking to cancel free of charge. If you cancel after the free cancellation period ends, you will be charged a small cancellation fee. In the rare event a host cancels, you’ll be notified immediately so you can book another car, or we’ll help you find one. Your refund can be temporarily held to expedite rebooking, or the funds can be returned to your bank account — your choice.",
  },
  {
    title: "Who will be my child (or me)?",
    text: "If there’s an emergency or an issue with the car, call our emergency roadside assistance provider, available  24/7. We’ll make sure you’re safe, then help you get back on your way.",
  },
] satisfies FAQ[];

export default faqList;

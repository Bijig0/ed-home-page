type WhyUs = {
  title: string;
  description: string;
  image: string;
};

const whyUs = [
  {
    title: "Safety First",
    description:
      "Our tutors are all personally vetted by the EduLine staff and all have valid WWC (Working With Children) checks. Your child's safety is of utmost importance and is taken into account with deep respect",
    image: "https://img.icons8.com/bubbles/50/shield.png",
  },
  {
    title: "Teaching With A Passion",
    description:
      "Our teachers are passionate about teaching and are committed to providing high-quality education to our students. We believe in the power of education and we are dedicated to helping our students achieve their full potential.",
    image: "https://img.icons8.com/bubbles/50/training.png",
  },
  {
    title: "Stay In The Loop",
    description:
      "We email session updates 24 hours after every lesson with a full report of your child's current progress. We believe in the power of feedback and communication.",
    image: "https://img.icons8.com/bubbles/50/link.png",
  },
  {
    title: "Don't fret about payments",
    description:
      "No prepayments or terms upfront. We simply charge your debit or credit card 24 hours after each lesson. No penalty for missed lessons. Cancel anytime.",
    image: "https://img.icons8.com/bubbles/50/receive-cash.png",
  },
  {
    title: "Oh-So Easy Booking",
    description:
      "Book now in a few simple clicks and less than 5 minutes and have a tutor ready within 72 hours!",
    image: "https://img.icons8.com/bubbles/50/chat.png",
  },
  {
    title: "First Lesson On Us",
    description:
      "Your first lesson is covered by our 100% Happiness Guarantee, so if you don’t think the tutor we have selected is the right one for you there’s no charge.",
    image: "https://img.icons8.com/bubbles/50/filled-like.png",
  },
] satisfies WhyUs[];

export default whyUs;

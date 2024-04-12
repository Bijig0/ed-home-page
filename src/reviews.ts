type Review = {
  text: string;
  author: string;
};

export const reviewOne = {
  text: "I approached Alchemy two years in a row for my child's VCE subjects and found every tutor appointed for different subjects were professionals and passionate about teaching. It's been easy to communicate directly with the tutors.",
  author: "Horace L",
};

export const reviewTwo = {
  text: "My daughter needed a tutor for maths in her HSC and we were assigned Taylor, who was outstanding and also went above and beyond to ensure additional lessons in the lead up to exams!! He gave her such a sense of confidence going into write her final exam today! Highly recommend both EduLine and Taylor!!",
  author: "Sarah J",
};

export const reviewThree = {
  text: "My son's english skills have improved immensely since commencing tutoring. His tutor is friendly, reliable and skilled. I would highly recommend Alchemy Tuition.",
  author: "John L",
};

export const reviewFour = {
  text: "Alchemy is the first tutoring service my daughter has enjoyed and looked forward to each week. It doesn't waste time with work my child already understands and provides different concepts each week. The tutor we have been matched with is wonderful and is the perfect match to my child. ,",
  author: "Ming W",
};

export const reviewFive = {
  text: "Alchemy tuition has turned the comprehension of math, for both my teenagers, into meaningful language & skills that they're adopting rapidly and using more in many unexpected areas of their learning journey.",
  author: "Lemony S",
};

export const reviewSix = {
  text: "Best choice I chose Alchemy. Previously had tutors and both my daughter's found it challenging and learnt nothing. Since choosing Alchemy both my daughter's received B's on the report card and they love learning. They're tutor is patient and has identified their learning style of kinesthetic. She teaches accordingly to their learning style and is supportive and positive. Confidence booster, love for studying increased and they have set goals for there self to get better results.",
  author: "Ratna K",
};

const reviews = [reviewOne, reviewTwo, reviewThree] satisfies Review[];

export default reviews;

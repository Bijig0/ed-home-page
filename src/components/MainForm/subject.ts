type Subject = string & {};

type Grade = {
  name: string;
  subjects: Subject[];
};

const gradePreK = {
  name: "PreK",
  subjects: [
    "Primary School General Support",
    "Primary School English",
    "Primary School Maths",
    "OC Exam Preparation",
    "NAPLAN Preparation",
    "Selective School Preparation",
  ],
} satisfies Grade;

const gradeK = {
  name: "K",
  subjects: [
    "Primary School General Support",
    "Primary School English",
    "Primary School Maths",
    "OC Exam Preparation",
    "NAPLAN Preparation",
    "Selective School Preparation",
  ],
} satisfies Grade;

const grade1 = {
  name: "1",
  subjects: [
    "Primary School General Support",
    "Primary School English",
    "Primary School Maths",
    "OC Exam Preparation",
    "NAPLAN Preparation",
    "Selective School Preparation",
  ],
} satisfies Grade;

const grade2 = {
  name: "2",
  subjects: [
    "Primary School General Support",
    "Primary School English",
    "Primary School Maths",
    "OC Exam Preparation",
    "NAPLAN Preparation",
    "Selective School Preparation",
  ],
} satisfies Grade;

const grade3 = {
  name: "3",
  subjects: [
    "Primary School General Support",
    "Primary School English",
    "Primary School Maths",
    "OC Exam Preparation",
    "NAPLAN Preparation",
    "Selective School Preparation",
  ],
} satisfies Grade;

const grade4 = {
  name: "4",
  subjects: [
    "Primary School General Support",
    "Primary School English",
    "Primary School Maths",
    "OC Exam Preparation",
    "NAPLAN Preparation",
    "Selective School Preparation",
  ],
} satisfies Grade;

const grade5 = {
  name: "5",
  subjects: [
    "Primary School General Support",
    "Primary School English",
    "Primary School Maths",
    "OC Exam Preparation",
    "NAPLAN Preparation",
    "Selective School Preparation",
  ],
} satisfies Grade;

const grade6 = {
  name: "6",
  subjects: [
    "Primary School General Support",
    "Primary School English",
    "Primary School Maths",
    "OC Exam Preparation",
    "NAPLAN Preparation",
    "Selective School Preparation",
  ],
} satisfies Grade;

const grade7 = {
  name: "7",
  subjects: [
    "Year 7-10 General Support",
    "Year 7-10 School English",
    "Year 7-10 School Maths",
    "Year 7-10 School Science",
    "NAPLAN Preparation",
    "Selective School Preparation",
  ],
} satisfies Grade;

const grade8 = {
  name: "8",
  subjects: [
    "Year 7-10 General Support",
    "Year 7-10 School English",
    "Year 7-10 School Maths",
    "Year 7-10 School Science",
    "NAPLAN Preparation",
    "Selective School Preparation",
  ],
} satisfies Grade;

const grade9 = {
  name: "9",
  subjects: [
    "Year 7-10 General Support",
    "Year 7-10 School English",
    "Year 7-10 School Maths",
    "Year 7-10 School Science",
    "NAPLAN Preparation",
    "Selective School Preparation",
  ],
} satisfies Grade;

const grade10 = {
  name: "10",
  subjects: [
    "Year 7-10 General Support",
    "Year 7-10 School English",
    "Year 7-10 School Maths",
    "Year 7-10 School Science",
    "NAPLAN Preparation",
    "Selective School Preparation",
  ],
} satisfies Grade;

const grade11 = {
  name: "11",
  subjects: [
    "IB English Literature",
    "IB English Language And Literature",
    "IB Business Studies",
    "IB Mathematics Analaysis And Approaches",
    "IB Mathematics Applications And Interpretation",
    "IB Economics",
    "IB Geography",
    "IB Psychology",
    "IB Philosophy",
    "IB History",
    "IB Physics",
    "IB Chemistry",
    "IB Biology",
    "IB Computer Science",
    "IB Sports Science",
    "IB Design Technology",
    "IB Dance",
    "IB Film",
    "IB Music",
    "IB Theatre",
    "IB Visual Arts",
    "VCE Foundation Mathematics",
    "VCE Further Mathematics",
    "VCE General Mathematics",
    "VCE Mathematical Methods",
    "VCE Specialist Mathematics",
    "VCE English Language",
    "VCE Foundation English",
    "VCE Literature",
    "VCE Physics",
    "VCE Biology",
    "VCE Chemistry",
    "VCE Psychology",
    "VCE General Support",
  ],
} satisfies Grade;

const grade12 = {
  name: "11",
  subjects: [
    "IB English Literature",
    "IB English Language And Literature",
    "IB Business Studies",
    "IB Mathematics Analaysis And Approaches",
    "IB Mathematics Applications And Interpretation",
    "IB Economics",
    "IB Geography",
    "IB Psychology",
    "IB Philosophy",
    "IB History",
    "IB Physics",
    "IB Chemistry",
    "IB Biology",
    "IB Computer Science",
    "IB Sports Science",
    "IB Design Technology",
    "IB Dance",
    "IB Film",
    "IB Music",
    "IB Theatre",
    "IB Visual Arts",
    "VCE Foundation Mathematics",
    "VCE Further Mathematics",
    "VCE General Mathematics",
    "VCE Mathematical Methods",
    "VCE Specialist Mathematics",
    "VCE English Language",
    "VCE Foundation English",
    "VCE Literature",
    "VCE Physics",
    "VCE Biology",
    "VCE Chemistry",
    "VCE Psychology",
    "VCE General Support",
  ],
} satisfies Grade;

const grades = [
  gradePreK,
  gradeK,
  grade1,
  grade2,
  grade3,
  grade4,
  grade5,
  grade6,
  grade7,
  grade8,
  grade9,
  grade10,
  grade11,
  grade12,
] satisfies Grade[];

export default grades;

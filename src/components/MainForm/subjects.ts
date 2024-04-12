type Subject = string & {};

const years = [
  "PreK/K",
  "Year 1 to 6",
  "Year 7 to 10",
  "Year 11 or 12",
] as const;

type YearDetails = {
  name: (typeof years)[number];
  subjects: Subject[];
};

const yearPreKOrK = {
  name: "PreK/K" as const,
  subjects: [
    "Primary School General Support",
    "Primary School English",
    "Primary School Maths",
    "OC Exam Preparation",
    "NAPLAN Preparation",
    "Selective School Preparation",
  ],
} satisfies YearDetails;

const year1to6 = {
  name: "Year 1 to 6" as const,
  subjects: [
    "Primary School General Support",
    "Primary School English",
    "Primary School Maths",
    "OC Exam Preparation",
    "NAPLAN Preparation",
    "Selective School Preparation",
  ],
};

const year7to10 = {
  name: "Year 7 to 10" as const,
  subjects: [
    "Year 7-10 General Support",
    "Year 7-10 School English",
    "Year 7-10 School Maths",
    "Year 7-10 School Science",
    "NAPLAN Preparation",
    "Selective School Preparation",
  ],
};

const year11or12 = {
  name: "Year 11 or 12" as const,
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
};

const yearByYearDetails = {
  "PreK/K": yearPreKOrK,
  "Year 1 to 6": year1to6,
  "Year 7 to 10": year7to10,
  "Year 11 or 12": year11or12,
} satisfies Record<(typeof years)[number], YearDetails>;

export default yearByYearDetails;

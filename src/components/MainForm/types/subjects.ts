import type { years } from "./types";

type GenericSubject = string & {};

type GenericYearDetails = {
  name: (typeof years)[number];
  subjects: readonly GenericSubject[];
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
} as const satisfies GenericYearDetails;

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
} as const;

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
} as const;

const year11or12 = {
  name: "Year 11 or 12" as const,
  subjects: [
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
} as const;

type UnionOfValues<T> = T[keyof T];

type TransformYearDetails<T extends GenericYearDetails> = T extends T
  ? {
      name: T["name"];
      subject: T["subjects"][number];
    }
  : never;

export const yearByYearDetails = {
  "PreK/K": yearPreKOrK,
  "Year 1 to 6": year1to6,
  "Year 7 to 10": year7to10,
  "Year 11 or 12": year11or12,
} satisfies Record<(typeof years)[number], GenericYearDetails>;

export type YearDetails = TransformYearDetails<
  UnionOfValues<typeof yearByYearDetails>
> & {};

type ExtractSubject<T extends YearDetails> = T extends T ? T["subject"] : never;

export type Subject = ExtractSubject<YearDetails>;

export default yearByYearDetails;

const x = {
  context: {},
  id: "(machine)",
  initial: "choosingYear",
  states: {
    choosingYear: {
      on: {
        BACK: {
          target: "choosingYear",
        },
        CHOOSE_YEAR: {
          target: "yearChosen",
        },
      },
    },
    yearChosen: {
      on: {
        CHOOSE_SUBJECT: {
          target: "subjectChosen",
        },
      },
    },
    subjectChosen: {},
  },
};

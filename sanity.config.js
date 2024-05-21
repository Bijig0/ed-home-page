import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

export default defineConfig({
  name: "project-name", // Can be whatever
  title: "Project Name", // Can be whatever
  projectId: "1jj5gu3c",
  dataset: "production",
  plugins: [deskTool()],
  schema: {
    types: [],
  },
});

import { defineStore } from "pinia";
import { Project } from "~/types/project";

type StateProps = {
  list: Project[];
  record: Project;
};

export const useProjectsStore = defineStore("projects", {
  state: (): StateProps => ({
    list: [
      {
        id: 1,
        name: "test project 1",
        balance: 0,
        description: "",
      },
    ],
    record: {
      id: 0,
      name: "",
      balance: 0,
      description: "",
    },
  }),
  actions: {
    addRecord(name: String, balance: Number = 0, description?: String) {
      const id = Math.floor(1000 + Math.random() * 9000);
      this.list.push({ id, name, balance, description });
    },
    selectRecord(record: Project) {
      this.record = record;
    },
  },
});

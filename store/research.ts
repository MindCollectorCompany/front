import { defineStore } from "pinia";
import { StatusKind } from "~/types/generic";
import { Research } from "~/types/research";

type StateProps = {
  list: Research[];
  record: Research;
};

export const useResearchStore = defineStore("research", {
  state: (): StateProps => ({
    list: [
      {
        id: 1,
        name: "test research 1",
        keywords: [],
        status: StatusKind.PENDING,
        description: "",
      },
    ],
    record: {
      id: 0,
      name: "",
      keywords: [],
      status: StatusKind.PENDING,
      description: "",
    },
  }),
  actions: {
    addRecord(
      name: String,
      keywords: String[] = [],
      status: StatusKind = StatusKind.PENDING,
      description?: String
    ) {
      const id = Math.floor(1000 + Math.random() * 9000);
      this.list.push({ id, name, keywords, status, description });
    },
    selectRecord(record: Research) {
      this.record = record;
    },
  },
});

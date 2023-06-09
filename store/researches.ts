import { defineStore } from "pinia";
import { StatusKind } from "~/types/generic";
import { Research } from "~/types/research";

type StateProps = {
  list: Research[];
  record: Research;
};

export const useResearchesStore = defineStore("projects", {
  state: (): StateProps => ({
    list: [],
    record: {
      id: 0,
      name: "",
      keywords: [],
      status: StatusKind.PENDING,
    },
  }),
  actions: {
    addRecord(name: String, keywords: String[], status?: StatusKind) {
      const id = Math.floor(1000 + Math.random() * 9000);
      this.record.id = id;
      this.record.name = name;
      this.record.keywords = keywords;
      this.record.status = status || StatusKind.PENDING;

      this.list.push({ id, name, keywords, status });
    },
  },
});

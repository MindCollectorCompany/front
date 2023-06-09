import { defineStore } from "pinia";

type Record = {
  id: Number;
  name: String;
  balance?: Number;
};

export const useProjectsStore = defineStore("projects", {
  state: () => ({
    list: [
      // { id: 1, name: "research 1", balance: 7 },
      // { id: 2, name: "research 2", balance: 30 },
      // { id: 3, name: "research 3", balance: 2 },
    ] as Record[],
    record: {
      id: 0,
      name: "",
      balance: 0,
    } as Record,
  }),
  actions: {
    addRecord(name: String, balance?: Number) {
      const id = Math.floor(1000 + Math.random() * 9000);
      this.record.id = id;
      this.record.name = name;
      this.record.balance = balance || 0;

      this.list.push({ id, name, balance });
    },
  },
});

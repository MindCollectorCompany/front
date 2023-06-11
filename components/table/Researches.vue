<template>
  <div>
    <Table :bordered="false" :single-line="false">
      <template #thead>
        <tr>
          <th v-for="col in cols">
            {{ col }}
          </th>
        </tr>
      </template>
      <template #tbody>
        <tr v-for="row in rows" @click="() => selectPesearch(row)">
          <td>
            <NavItem
              :page="`${RESEARCHES}/${row.id}`"
              :text="row.name"
              class="hover:text-blue-600"
            />
          </td>
          <td>
            {{ row.keywords }}
          </td>
          <td>
            <span
              :class="`inline-block min-w-[100px] font-semibold ${
                (row.status === StatusKind.ACCEPTED && 'text-green-600') ||
                (row.status === StatusKind.DECLINED && 'text-red-600') ||
                (row.status === StatusKind.PENDING && 'text-yellow-600')
              }`"
            >
              {{ row.status }}
            </span>
          </td>
        </tr>
      </template>
    </Table>
  </div>
</template>

<script lang="ts" setup>
import { RESEARCHES } from "~/utils/path";
import { StatusKind } from "~/types/generic";
import { Research } from "~/types/research";
import { useResearchStore } from "~/store/research";
const store = useResearchStore();

function selectPesearch(record: Research) {
  store.selectRecord(record);
}
</script>

<script lang="ts">
export default {
  props: {
    rows: {
      type: Array<Research>,
      required: false,
    },
  },
  data() {
    return {
      cols: ["Name", "Keywords", "Status"],
    };
  },
};
</script>

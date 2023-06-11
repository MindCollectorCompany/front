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
        <tr v-for="row in rows" @click="() => selectProject(row)">
          <td>
            <NavItem
              :page="`${PROJECTS}/${row.id}`"
              :text="row.name"
              class="hover:text-blue-600"
            />
          </td>
          <td>
            <span class="inline-block min-w-[100px] font-semibold">
              ${{ row.balance }}
            </span>
            <Button type="primary">Recharge</Button>
          </td>
          <td>
            <Button type="info" @click="() => onEdit(row.id)"> Edit </Button>
          </td>
        </tr>
      </template>
    </Table>
  </div>
</template>

<script lang="ts" setup>
import { PROJECTS } from "~/utils/path";
import type { Project } from "~/types/project";
import { useProjectsStore } from "~/store/projects";
const store = useProjectsStore();

function selectProject(record: Project) {
  store.selectRecord(record);
}
</script>

<script lang="ts">
export default {
  props: {
    cols: {
      type: Array<String>,
      required: false,
      default: ["Name", "Balance", "Options"],
    },
    rows: {
      type: Array<Project>,
      required: false,
    },
  },
  methods: {
    onEdit(projectId: Number) {
      navigateTo(`${PROJECTS}/${projectId}/edit`);
    },
  },
};
</script>

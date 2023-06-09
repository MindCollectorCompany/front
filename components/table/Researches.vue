<template>
  <div>
    <NTable :bordered="false" :single-line="false">
      <thead>
        <tr>
          <th v-for="col in cols">
            {{ col }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows">
          <td>
            {{ row.id }}
          </td>
          <td>
            {{ row.name }}
          </td>
          <td>
            <NavItem
              :page="`${api}/${row.id}`"
              :text="row.keywords"
              class="hover:text-blue-600"
            />
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
      </tbody>
    </NTable>
  </div>
</template>

<script lang="ts" setup>
import { NTable } from "naive-ui";
</script>

<script lang="ts">
import { Research } from "~/types/research";
import { StatusKind } from "~/types/generic";

export default {
  props: {
    rows: {
      type: Array<Research>,
      required: false,
    },
  },
  data() {
    return {
      api: "/researches", // TODO: move to const
      cols: ["#", "name", "keywords", "status"],
    };
  },
};
</script>

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
            <NavItem
              :page="`/researches/${row.id}`"
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
            <Button type="info" @click="$router.push(`/projects/${row.id}`)">
              Edit
            </Button>
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
export default {
  props: {
    cols: {
      type: Array<String>,
      required: false,
    },
    rows: {
      type: Array<{
        id: Number;
        name: String;
        balance: Number;
      }>,
      required: false,
    },
  },
};
</script>

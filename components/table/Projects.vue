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
        <tr v-for="row in rows">
          <td>
            <NavItem
              :page="`${RESEARCHES}`"
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
            <Button type="info" @click="$router.push(`${PROJECTS}/${row.id}`)">
              Edit
            </Button>
          </td>
        </tr>
      </template>
    </Table>
  </div>
</template>

<script lang="ts" setup>
import { RESEARCHES, PROJECTS } from "~/utils/path";
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

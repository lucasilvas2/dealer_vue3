<script setup lang="ts">

definePageMeta({
  layout: 'layout-vertical'
});

class Card {
  id!: number;
  title!: string;
  info!: string;
  text!: string;
  color!: string;

  constructor(
    id: number,
    title: string,
    info: string,
    text: string,
    color: string
  ) {
    this.id = id;
    this.title = title;
    this.info = info;
    this.text = text;
    this.color = color;
  }
}

const cards = [
  new Card(1, "Clientes", "222", "Informações sobre clientes", "#ffedd5"),
  new Card(2, "Vendas", "1000", "Detalhes sobre vendas", "#fefce8"),
  new Card(3, "Produtos", "500", "Informações sobre produtos", "#f7fee7"),
];
</script>

<template>
    <div class="p-4 border-2 rounded-lg">
      <div class="grid grid-cols-3 gap-4 mb-4">
        <div
          class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"
          v-for="card in cards"
          :key="card.id"
        >
          <CardInfo
            :title="card.title"
            :info="card.info"
            :text="card.text"
            :color="card.color"
          ></CardInfo>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div
          class="flex items-center justify-center h-50 mb-4 rounded bg-gray-50 dark:bg-gray-800 col-span-2"
        >
          <BarChart />
        </div>
        <div
          class="flex flex-col justity-center h-50 mb-4 p-4 font-semibold rounded bg-gray-50 dark:bg-gray-800"
        >
          <h3 class="mb-2">Ranking Vendas</h3>
          <div>
            <dl>
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                Produto 1
              </dt>
              <dd class="flex items-center mb-3">
                <div
                  class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2"
                >
                  <div
                    class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                    style="width: 88%"
                  ></div>
                </div>
                <span
                  class="text-sm font-medium text-gray-500 dark:text-gray-400"
                  >8.8</span
                >
              </dd>
            </dl>
            <dl>
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                Produto 2
              </dt>
              <dd class="flex items-center mb-3">
                <div
                  class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2"
                >
                  <div
                    class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                    style="width: 89%"
                  ></div>
                </div>
                <span
                  class="text-sm font-medium text-gray-500 dark:text-gray-400"
                  >8.9</span
                >
              </dd>
            </dl>
            <dl>
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                Produto 3
              </dt>
              <dd class="flex items-center mb-3">
                <div
                  class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2"
                >
                  <div
                    class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                    style="width: 88%"
                  ></div>
                </div>
                <span
                  class="text-sm font-medium text-gray-500 dark:text-gray-400"
                  >8.8</span
                >
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import BarChart from "~/components/Charts/BarChart.vue";

export default {
  name: "Dashboard",
  components: { BarChart },
};
</script>

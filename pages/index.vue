<script setup lang="ts">
class Card {
  id!: number;
  title!: string;
  info!: string;
  text!: string;
  color!: string

  constructor(id: number, title: string, info: string, text: string, color: string) {
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
 new Card(3, "Produtos", "500", "Informações sobre produtos", "#f7fee7")
];
</script>

<template>
  <div class="grow m-8">
    <div id="container-cards" class="flex flex-row justify-center w-full">
      <div class="grid grid-cols-3 gap-2 w-full">
        <div class="flex justify-center" v-for="card in cards" :key="card.id">
          <CardInfo
            :title="card.title"
            :info="card.info"
            :text="card.text"
            :color="card.color"
          ></CardInfo>
        </div>
      </div>
    </div>
    <div id="container-charts" class="flex flex-row justify-center w-full">
      <BarChart />
    </div>
  </div>
</template>

<script lang="ts">
import BarChart from '~/components/Charts/BarChart.vue';

export default {
  name: 'App',
  components: { BarChart }
}
</script>
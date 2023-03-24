<template>
  <div>
    <layout-app>
      <div class="row">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <h5 class="card-title mb-5">Clientes</h5>
            <div class="w-auto">
              <a class="btn btn-info" href="/customers/create"
                ><i class="fa-solid fa-user-plus"></i> Criar cliente</a
              >
            </div>
          </div>
          <div>
            <table id="table" class="table table-striped" style="width: 100%">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Número</th>
                  <th>Email</th>
                  <th>Endereço</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="customer in customers" :key="customer.id">
                  <td>{{ customer.name }}</td>
                  <td>{{ customer.phone }}</td>
                  <td>{{ customer.email }}</td>
                  <td>{{ customer.address }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </layout-app>
  </div>
</template>

<script>
import LayoutApp from "~~/components/LayoutApp.vue";
import IconMaterial from "~~/components/IconMaterial.vue";
export default {
  components: { LayoutApp, IconMaterial },
  created() {
    this.getCustomers();
  },
  mounted() {},
  data() {
    return {
      customers: Object,
    };
  },
  methods: {
    async getCustomers() {
      this.customers = await $.ajax({
        url: "http://localhost:8443/clientes/buscarTodos",
        success: function (res) {
          this.loadDataTable();
        },
      });
    },
    loadDataTable() {
      $(document).ready(function () {
        $("#table").DataTable();
      });
    },
  },
  watch: {},
};
</script>

<template>
  <div>
    <layout-app>
      <div class="row">
        <div class="card-body shadow p-3 mb-5 bg-body rounded">
          <div class="d-flex justify-content-between">
            <h5 class="card-title mb-5">Clientes</h5>
            <div class="w-auto">
              <a class="btn btn-info" href="/customers/create"
                ><svg-icon
                  type="mdi"
                  :path="icon_btnAddCustomer"
                  class="mx-2"
                ></svg-icon>
                Criar cliente</a
              >
            </div>
          </div>
          <div>
            <table id="table" class="table table-striped" style="width: 100%">
              <thead>
                <tr>
                  <th colspan="1">#</th>
                  <th>Nome</th>
                  <th>Número</th>
                  <th>Email</th>
                  <th>Endereço</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="customer in customers" :key="customer.id">
                  <td>{{ customer.id }}</td>
                  <td>{{ customer.name }}</td>
                  <td>{{ customer.phone }}</td>
                  <td>{{ customer.email }}</td>
                  <td>
                    {{
                      customer.address != null
                        ? customer.address.street +
                          ", " +
                          customer.address.number
                        : null
                    }}
                  </td>
                  <td>
                    <nuxt-link
                      class="btn btn-success btn-sm"
                      :to="`/customers/edit/${customer.id}`"
                    >
                      <svg-icon
                        type="mdi"
                        :path="icon_btnEdit"
                        class="mx-2"
                      ></svg-icon
                      >Editar
                    </nuxt-link>
                  </td>
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
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAccountPlus, mdiPen } from "@mdi/js";
import LayoutApp from "~~/components/LayoutApp.vue";
import IconMaterial from "~~/components/IconMaterial.vue";
export default {
  components: { LayoutApp, IconMaterial, SvgIcon },
  created() {
    this.getCustomers();
  },
  mounted() {},
  data() {
    return {
      customers: Object,
      icon_btnAddCustomer: mdiAccountPlus,
      icon_btnEdit: mdiPen,
    };
  },
  methods: {
    async getCustomers() {
      this.customers = await $.ajax({
        url: "http://localhost:8443/customers/findAll",
        success: function (res) {
          $(document).ready(function () {
            $("#table").DataTable();
          });
        },
      });
    },
    loadDataTable() {
      $(document).ready(function () {
        $("#table").DataTable();
      });
    },
    edit(customer_id) {
      console.log(customer_id.target.value);
      let result = this.customers.filter(
        (customer) => customer_id.target.value == customer.id
      );
      console.log("result", result[0]);
    },
  },
  watch: {},
};
</script>

<template>
  <div>
    <layout-app>
      <div class="row">
        <div class="card-body shadow p-3 mb-5 bg-body rounded">
          <div class="d-flex justify-content-between">
            <h5 class="card-title mb-5">Fornecedores</h5>
            <div class="w-auto">
              <a class="btn btn-info" href="/companies/create"
                ><svg-icon
                  type="mdi"
                  :path="icon_btnAdd"
                  class="mx-2"
                ></svg-icon>
                Adicionar fornecedor</a
              >
            </div>
          </div>
          <div>
            <table id="table" class="table table-striped" style="width: 100%">
              <thead>
                <tr>
                  <th colspan="1">#</th>
                  <th>Nome</th>
                  <th>Telefone</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="company in companies" :key="company.id">
                  <td>{{ company.id }}</td>
                  <td>{{ company.name }}</td>
                  <td>{{ company.phone }}</td>
                  <td>
                    <nuxt-link
                      class="btn btn-success btn-sm"
                      :to="`/companies/edit/${company.id}`"
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
import { mdiAccountPlus, mdiPen, mdiOfficeBuildingPlus } from "@mdi/js";
import LayoutApp from "~~/components/LayoutApp.vue";
import IconMaterial from "~~/components/IconMaterial.vue";
export default {
  components: { LayoutApp, IconMaterial, SvgIcon },
  created() {
    this.getCompanies();
  },
  mounted() {},
  data() {
    return {
      companies: Object,
      icon_btnAdd: mdiOfficeBuildingPlus,
      icon_btnEdit: mdiPen,
    };
  },
  methods: {
    async getCompanies() {
      this.companies = await $.ajax({
        url: "http://localhost:8443/companies/findAll",
        success: function (res) {
          $(document).ready(function () {
            $("#table").DataTable({
              processing: true,
            });
          });
        },
      });
    },
    loadDataTable() {
      $(document).ready(function () {
        $("#table").DataTable({
          processing: true,
          ajax: {
            url: "http://localhost:8443/companies/findAll",
            dataSrc: "",
          },
          columns: [
            { data: "id" },
            { data: "name" },
            { data: "phone" },
            { data: "address" },
            {
              data: "",
              render: function (data, type, row) {
                console.log(data, type, row);
                return `<a class='btn btn-success btn-sm' href="/companies/edit/${row.id}"><svg-icon
                        type="mdi"
                        :path="icon_btnEdit"
                        class="mx-2"
                      ></svg-icon
                      >Edit</a>`;
              },
            },
          ],
        });
      });
    },
  },
  watch: {},
};
</script>

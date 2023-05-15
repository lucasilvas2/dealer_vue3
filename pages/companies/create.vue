<template>
  <div>
    <layout-app>
      <div class="row">
        <div class="card-body p-4 shadow p-3 mb-5 bg-body rounded">
          <div>
            <div class="d-flex justify-content-between">
              <h5 class="card-title mb-5">Cadastrando Fornecedor</h5>
            </div>
            <form @submit.prevent="submitCompany" method="post">
              <h6 class="my-4 d-flex">
                <svg-icon
                  type="mdi"
                  :path="icon_building"
                  class="mx-2"
                ></svg-icon>
                Informações do Fornecedor
              </h6>
              <div class="input-group mb-3">
                <span class="input-group-text">Nome</span>
                <input
                  id="name"
                  name="name"
                  type="text"
                  class="form-control"
                  placeholder="Nome do Fornecedor"
                  aria-label="name"
                  aria-describedby="basic-addon1"
                  v-model="form.name"
                  required
                />
              </div>
              <div class="row">
                <div class="col-6 mb-4">
                  <div class="input-group">
                    <span class="input-group-text" id="email"
                      ><svg-icon type="mdi" :path="icon_email"></svg-icon
                      >Email</span
                    >
                    <input
                      name="email"
                      type="email"
                      class="form-control"
                      placeholder="email@email.com"
                      aria-label="email"
                      aria-describedby="basic-addon1"
                      v-model="form.email"
                      required
                    />
                  </div>
                </div>
                <div class="col-6 mb-4">
                  <div class="input-group">
                    <span class="input-group-text" id="phone"
                      ><svg-icon type="mdi" :path="icon_phone"></svg-icon
                      >Telefone</span
                    >
                    <input
                      name="phone"
                      type="phone"
                      class="form-control"
                      placeholder="(00) 00000-0000"
                      aria-label="phone"
                      aria-describedby="basic-addon1"
                      v-model="form.phone"
                      required
                    />
                  </div>
                </div>
              </div>

              <hr />

              <div class="col-12">
                <button
                  type="submit"
                  class="btn btn-primary"
                  style="margin-right: 4px"
                >
                  Cadastrar
                </button>
                <nuxt-link :to="`/customers`" class="btn btn-secondary"
                  >Cancelar</nuxt-link
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </layout-app>
  </div>
</template>

<script>
import { faMask } from "@fortawesome/free-solid-svg-icons";
import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiMailboxUp,
  mdiRoadVariant,
  mdiCity,
  mdiEmail,
  mdiPhone,
  mdiCardAccountDetails,
  mdiMapMarker,
  mdiOfficeBuilding,
} from "@mdi/js";
import LayoutApp from "~~/components/LayoutApp.vue";
export default {
  components: { LayoutApp, SvgIcon },
  mounted() {},
  data() {
    return {
      icon_building: mdiOfficeBuilding,
      icon_email: mdiEmail,
      icon_phone: mdiPhone,
      form: {
        email: "",
        name: "",
        phone: "",
      },
      result: "",
    };
  },
  methods: {
    async onSubmit() {
      this.submitAddress();
    },
    async submitCompany() {
      $fetch(`http://localhost:8443/companies/create`, {
        method: "post",
        body: {
          email: this.form.email,
          name: this.form.name,
          phone: this.form.phone,
        },
      })
        .then((res) => {
          console.log("Fornecedor cadastrado", res);
          navigateTo("/companies");
        })
        .catch((res) => console.log(res));
    },
  },
};
</script>

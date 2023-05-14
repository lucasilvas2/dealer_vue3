<template>
  <div>
    <layout-app>
      <div class="row">
        <div class="card-body">
          <div class="card p-4 shadow p-3 mb-5 bg-body rounded">
            <div class="d-flex justify-content-between">
              <h5 class="card-title mb-5">Cadastrando Cliente</h5>
            </div>
            <form @submit.prevent="submitCustomersAndAddress" method="post">
              <h6 class="my-4 d-flex">
                <svg-icon
                  type="mdi"
                  :path="icon_customerDetails"
                  class="mx-2"
                ></svg-icon>
                Informações do Cliente
              </h6>
              <div class="input-group mb-3">
                <span class="input-group-text"> Nome</span>
                <input
                  id="name"
                  name="name"
                  type="text"
                  class="form-control"
                  placeholder="Nome do cliente"
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
              <h6 class="my-3 d-flex">
                <svg-icon
                  type="mdi"
                  :path="icon_location"
                  class="mx-2"
                ></svg-icon>
                Informações do Endereço
              </h6>
              <div class="row">
                <div class="col-4 mb-4">
                  <div class="input-group">
                    <span class="input-group-text"> Cep</span>
                    <input
                      type="text"
                      class="form-control"
                      id="postalCode"
                      placeholder="00000-000"
                      v-model="form.postalCode"
                      @change="getViaCep()"
                      required
                    />
                  </div>
                </div>

                <div class="col-8 mb-4">
                  <div class="input-group">
                    <span class="input-group-text"> Logradouro</span>
                    <input
                      name="street"
                      type="text"
                      class="form-control"
                      id="street"
                      placeholder="Rua Brasil"
                      v-model="form.street"
                      required
                    />
                  </div>
                </div>
                <div class="col-2 mb-4">
                  <div class="input-group">
                    <span class="input-group-text"> Número</span>
                    <input
                      type="text"
                      class="form-control"
                      id="number"
                      placeholder="00"
                      v-model="form.number"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-5 mb-4">
                  <div class="input-group">
                    <span class="input-group-text"> Complemento</span>
                    <input
                      type="text"
                      class="form-control"
                      id="complement"
                      name="complement"
                      placeholder="Casa, Apartamento... "
                    />
                  </div>
                </div>
                <div class="col-md-5 mb-4">
                  <div class="input-group">
                    <span class="input-group-text"> Bairro</span>
                    <input
                      type="text"
                      class="form-control"
                      id="district"
                      name="district"
                      placeholder="Centro"
                      v-model="form.district"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-4 mb-4">
                  <div class="input-group">
                    <span class="input-group-text"> Cidade</span>
                    <input
                      type="text"
                      class="form-control"
                      id="city"
                      name="city"
                      placeholder="Brasilandia"
                      v-model="form.city"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-4 mb-4">
                  <div class="input-group">
                    <span class="input-group-text"> Estado</span>
                    <input
                      type="text"
                      class="form-control"
                      id="state"
                      name="state"
                      placeholder="Brasilandia"
                      v-model="form.state"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-4 mb-4">
                  <div class="input-group">
                    <span class="input-group-text"> País</span>
                    <input
                      type="text"
                      class="form-control"
                      id="country"
                      name="country"
                      placeholder="Brasilia"
                      v-model="form.country"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="col-12">
                <button
                  type="submit"
                  class="btn btn-primary"
                  style="margin-right: 4px"
                >
                  Atualizar
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
import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiMailboxUp,
  mdiRoadVariant,
  mdiCity,
  mdiEmail,
  mdiPhone,
  mdiCardAccountDetails,
  mdiMapMarker,
} from "@mdi/js";
import LayoutApp from "~~/components/LayoutApp.vue";
export default {
  path: "/customers/edit/:customerId",
  component: "~/pages/customers/edit.vue",
  components: { LayoutApp, SvgIcon },
  mounted() {
    this.mask();
  },
  created() {
    this.getCustomers();
  },
  data() {
    return {
      icon_postalCode: mdiMailboxUp,
      icon_street: mdiRoadVariant,
      icon_city: mdiCity,
      icon_email: mdiEmail,
      icon_phone: mdiPhone,
      icon_customerDetails: mdiCardAccountDetails,
      icon_location: mdiMapMarker,
      form: {
        city: "",
        country: "",
        district: "",
        email: "",
        name: "",
        number: "",
        phone: "",
        postalCode: "",
        state: "",
        street: "",
      },
      id_address: "",
      result: "",
      id_customer: this.$route.params.id,
    };
  },
  methods: {
    mask() {
      $("#postalCode").mask("00000-000");
    },
    async onSubmit() {
      this.submitAddress();
    },
    async submitAddress() {
      $fetch("http://localhost:8443/address", {
        method: "post",
        body: {
          city: this.form.city,
          country: this.form.country,
          district: this.form.district,
          number: this.form.number,
          postalCode: this.form.postalCode,
          state: this.form.state,
          street: this.form.street,
        },
      })
        .then((res) => {
          this.id_address = res.id;
          console.log(res, this.id_address);
          this.submitCustomers(res.id);
        })
        .catch((res) => console.log(res));
    },
    async submitCustomers(id_address) {
      $fetch(
        `http://localhost:8443/customers/updateWithAddress/${this.id_customer}/${this.id_address}/1/`,
        {
          method: "post",
          body: {
            email: this.form.email,
            name: this.form.name,
            phone: this.form.phone,
          },
        }
      )
        .then((res) => console.log("Cliente cadastrado", res))
        .catch((res) => console.log(res));
    },
    async getViaCep() {
      let cep = this.form.postalCode.match(/\d/g).join("");
      await useFetch(`https://viacep.com.br/ws/${cep}/json/`).then((res) => {
        console.log(res.data.value.logradouro);
        this.form.city = res.data.value.localidade;
        this.form.country = "Brasil";
        this.form.district = res.data.value.bairro;
        this.form.state = res.data.value.uf;
        this.form.street = res.data.value.logradouro;
      });
    },
    async submitCustomersAndAddress() {
      $fetch(
        `http://localhost:8443/customers/updateWithAddress/${this.id_customer}/${this.id_address}/1`,
        {
          method: "post",
          body: {
            email: this.form.email,
            name: this.form.name,
            phone: this.form.phone,
            city: this.form.city,
            country: this.form.country,
            district: this.form.district,
            number: this.form.number,
            postalCode: this.form.postalCode,
            state: this.form.state,
            street: this.form.street,
          },
        }
      )
        .then((res) => {
          console.log("Cliente cadastrado", res);
          navigateTo("/customers");
        })
        .catch((res) => console.log(res));
    },
    async getCustomers() {
      await useFetch(
        `http://localhost:8443/customers/findById/${this.id_customer}`
      ).then((res) => {
        this.id_address = res.data.value.address.id;
        this.form.city = res.data.value.address.city;
        this.form.country = "Brasil";
        this.form.district = res.data.value.address.district;
        this.form.state = res.data.value.address.state;
        this.form.postalCode = res.data.value.address.postalCode;
        this.form.number = res.data.value.address.number;
        this.form.street = res.data.value.address.street;
        this.form.name = res.data.value.name;
        this.form.email = res.data.value.email;
        this.form.phone = res.data.value.phone;
      });
    },
  },
};
</script>

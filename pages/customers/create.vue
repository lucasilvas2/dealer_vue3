<template>
  <div>
    <layout-app>
      <div class="row">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <h5 class="card-title mb-5">Cadastrando Cliente</h5>
          </div>
          <form
            class="card p-4"
            @submit.prevent="onSubmit"
            action="http://localhost:8443/customers/createWithAddress/1"
            method="post"
          >
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
                  />
                </div>
              </div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">Cadastrar</button>
            </div>
          </form>
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
  components: { LayoutApp, SvgIcon },
  mounted() {},
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
    };
  },
  methods: {
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
      $fetch(`http://localhost:8443/customers/create/1/${id_address}`, {
        method: "post",
        body: {
          email: this.form.email,
          name: this.form.name,
          phone: this.form.phone,
        },
      })
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
  },
};
</script>

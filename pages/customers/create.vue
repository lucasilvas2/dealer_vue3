<template>
  <div>
    <layout-app>
      <div class="row">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <h5 class="card-title mb-5">Cadastrando Cliente</h5>
          </div>
          <form class="card p-4" action="" method="post">
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
                  />
                </div>
              </div>
              <div class="col-md-5 mb-4">
                <div class="input-group">
                  <span class="input-group-text"> Complemento</span>
                  <input
                    type="text"
                    class="form-control"
                    id="district"
                    name="district"
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
                  />
                </div>
              </div>
              <div class="col-md-4 mb-4">
                <div class="input-group">
                  <span class="input-group-text"> Estado</span>
                  <select id="state" class="form-select">
                    <option selected disabled>Escolha um estado...</option>
                    <option>...</option>
                  </select>
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
                    placeholder="Brasil"
                  />
                </div>
              </div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">Sign in</button>
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
    };
  },
};
</script>

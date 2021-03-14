<template>
  <footer v-show="authentication" class="plue-footer-bg">
    <b-container class="py-5">
      <b-row>
        <b-col>
          <h4>Menu</h4>
          <ul class="list-unstyled">
            <li class="plue-li-space-footer">
              <a class="plue-link-color-footer" href="#">Meus Cartões</a>
            </li>
            <li class="plue-li-space-footer">
              <a class="plue-link-color-footer" href="#">Comprar Créditos</a>
            </li>
          </ul>
        </b-col>
        <b-col>
          <h4></h4>
          <ul class="list-unstyled">
            <li class="plue-li-space-footer">
              <a class="plue-link-color-footer" href="#">Configurações</a>
            </li>
            <li class="plue-li-space-footer">
              <a class="plue-link-color-footer" href="#">Dúvidas</a>
            </li>
          </ul>
        </b-col>
        <b-col>
          <h4>Contatos</h4>
          <ul class="list-unstyled">
            <li class="plue-li-space-footer">contato@pluecard.com.br</li>
          </ul>
        </b-col>
        <b-col>
          <p>Siga nas redes sociais</p>
          <a class="plue-social-icons-link-footer" href="#"
            ><b-icon-instagram class="plue-social-icons-footer" font-scale="2"
          /></a>
          <a class="plue-social-icons-link-footer" href="#"
            ><b-icon-twitter class="plue-social-icons-footer" font-scale="2"
          /></a>
          <a class="plue-social-icons-link-footer" href="#"
            ><b-icon-facebook class="plue-social-icons-footer" font-scale="2"
          /></a>
        </b-col>
      </b-row>

      <b-row class="text-center" style="margin-top: 26px">
        <b-col></b-col>
        <b-col cols="5">Copyright Tech Card© 2020 All rights reserved.</b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<style lang="scss" scope>
.plue-social-icons-link-footer {
  color: #ffffff;
}
.plue-social-icons-footer {
  margin-left: 15px;
}

.plue-li-space-footer {
  margin-top: 20px;
}
.plue-link-color-footer {
  color: #ffffff;
}
.plue-footer-bg {
  background-color: $blue;
  color: $white;
}
</style>
<script>
export default {
  data() {
    return {
      authentication: false,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.getters.isAuth;
    },
  },
  watch: {
    loggedIn(newCount) {
      this.authentication = newCount;
    },
  },
  created() {
    this.authentication = this.loggedIn;
  },
};
</script>
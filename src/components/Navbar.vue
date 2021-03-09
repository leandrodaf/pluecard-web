<template>
  <b-navbar toggleable="lg" type="dark" variant="primary" style="padding: 20px">
    <b-container>
      <b-navbar-brand href="#"> 
        <img src="../assets/logo.png"/>
        plue 
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">
            <b-icon-card-heading class="icon-margin-nav" />
            Meus Cartões
          </b-nav-item>
          <b-nav-item href="#">
            <b-icon-cart3 class="icon-margin-nav" />
            Créditos
          </b-nav-item>
          <b-nav-item href="#">
            <b-icon-gear class="icon-margin-nav" />
            Configurações
          </b-nav-item>
          <b-nav-item href="#">
            <b-icon-question class="icon-margin-nav" />
            Dúvidas
          </b-nav-item>
          <b-nav-item href="#">
            <b-icon-download class="icon-margin-nav" rotate="270" />
            Sair
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<style>
.icon-margin-nav {
  margin-right: 3px;
}
</style>

<script>
export default {

};
</script>
<template>
  <div class="noSelect">
    <b-navbar toggleable="md" type="dark" class="navbar-dark sticky-top bg-dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand class="navbar-brand" v-b-toggle.TheFinalSkill-Sidebar>
        <img src="../assets/images/logo.png" id="navbar-logo">
        Hitman Guide
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/home"><icon name="plane" scale="1.2" class="symbol"></icon> Home </b-nav-item>
          <b-nav-item-dropdown text="Hitman I" right>
            <b-dropdown-item href="/hitman/Paris"> Paris </b-dropdown-item>
            <b-dropdown-item href="/hitman/Sapienza"> Sapienza </b-dropdown-item>
            <b-dropdown-item href="/hitman/Marrakesh"> Marrakesh </b-dropdown-item>
            <b-dropdown-item href="/hitman/Bangkok"> Bangkok </b-dropdown-item>
            <b-dropdown-item href="/hitman/Colorado"> Colorado </b-dropdown-item>
            <b-dropdown-item href="/hitman/Hokkaido"> Hokkaido </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Hitman II" right>
            <b-dropdown-item href="/hitman2/HawkesBay"> Hawke's Bay </b-dropdown-item>
            <b-dropdown-item href="/hitman2/Miami"> Miami </b-dropdown-item>
            <b-dropdown-item href="/hitman2/SantaFortuna"> Santa Fortuna </b-dropdown-item>
            <b-dropdown-item href="/hitman2/Mumbai"> Mumbai </b-dropdown-item>
            <b-dropdown-item href="/hitman2/WhittletonCreek"> Whittleton Creek </b-dropdown-item>
            <b-dropdown-item href="/hitman2/IsleOfSgail"> Isle of Sgàil </b-dropdown-item>
            <b-dropdown-item href="/hitman2/NewYork"> New York </b-dropdown-item>
            <b-dropdown-item href="/hitman2/HavenIsland"> Haven Island </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Hitman III" right>
            <b-dropdown-item href="/hitman3/Dubai"> Dubai </b-dropdown-item>
            <b-dropdown-item href="/hitman3/Dartmoor"> Dartmoor </b-dropdown-item>
            <b-dropdown-item href="/hitman3/Berlin"> Berlin </b-dropdown-item>
            <b-dropdown-item href="/hitman3/Chongqing"> Chongqing </b-dropdown-item>
            <b-dropdown-item href="/hitman3/Mendoza"> Mendoza </b-dropdown-item>
            <b-dropdown-item href="/hitman3/CarpathianMountains"> Carpathian Mountains </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped>
  @import '../style/bootstrap-component-include';

  .symbol {
    margin-top: -5px;
    vertical-align: middle;
  }

  .noSelect {
    -ms-user-select: None;
    -moz-user-select: None;
    -webkit-user-select: None;
    user-select: None;
  }

  .sticky-top {
    z-index: 100;
  }

  .wrapper {
    position: sticky;
    top: 0;
  }

  #navbar-logo {
    $navbar-logo-height: 40px;
    $navbar-logo-mb: -5px;

    margin-top: 25px - $navbar-logo-mb - $navbar-logo-height;
    height: $navbar-logo-height;
    margin-bottom: $navbar-logo-mb;
  }
</style>

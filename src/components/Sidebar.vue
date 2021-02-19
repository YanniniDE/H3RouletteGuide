<template>
  <div>
    <b-sidebar id="AmongUsChallenges-Sidebar" class="noSelect" title="Work In Progress" bg-variant="dark" text-variant="light" shadow="lg">
      <b-row>
        <b-col></b-col>
        <b-col>Siege</b-col>
        <b-col>Niederlagen</b-col>
        <div class="w-100"></div>
        <b-col>Crewmate</b-col>
        <b-col> <b-form-spinbutton id="sb-inline" v-model="crewmateWins" vertical size=sm></b-form-spinbutton> </b-col>
        <b-col> <b-form-spinbutton id="sb-inline" v-model="crewmateLoses" vertical size=sm></b-form-spinbutton> </b-col>
        <div class="w-100"></div>
        <b-col>Impostor</b-col>
        <b-col>Siege</b-col>
        <b-col>Niederlagen</b-col>
      </b-row>
      <b-button
          id="vorschlag-button"
          variant="success"
          v-b-modal.vorschlagModal
          v-b-tooltip.hover
          title="Klicke hier um neue Vorschläge einzureichen."
        >
          Vorschlag einreichen
        </b-button>
        <b-button
          id="feedback-button"
          variant="success"
          v-b-modal.feedbackModal
          v-b-tooltip.hover
          title="Klicke hier um uns Feedback zu geben."
        >
          Feedback geben
        </b-button>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => {
    return {
      crewmateWins: 0,
      crewmateLoses: 0,
      impostorWins: 0,
      impostorLoses: 0
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../style/bootstrap-component-include';

  .noSelect {
    -ms-user-select: None;
    -moz-user-select: None;
    -webkit-user-select: None;
    user-select: None;
  }

#feedback-button {
  position: fixed;
  left: 20px;
  bottom: 20px;
  width: 200px;
}

#vorschlag-button {
  position: fixed;
  left: 20px;
  bottom: 70px;
  width: 200px;
}
</style>

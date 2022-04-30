<template>
  <div>
    <h1>{{ title }}</h1>
    <!-- Spezielle vue Syntax: erkennt ein data- Attribut -->
    <h1>{{ uppercase }}</h1>
    <!-- Funktion benutzen wie Daten -->

    <!-- Es gibt Vue-spezifische Attribute, die man auf html Tags schreiben kann, Bei Rendering erkennt vue diese und verarbeitet diese auf seine Weise -->
    <!-- Ändert sich title hier wird das überall übernommen, vue kriegt das mit und aktuallisiert. Wo wird "title" im template bzw in einer computed property genutzt -->
    <input v-model="title" />

    <!-- Buttons lösen Events aus, v-on: Welchem Event höre ich zu? -> Dem Klickevent -->
    <!-- Dem Eventlistener eine Funktion in Methods zuweisen-->
    <button v-on:click="reset">Zurücksetzen</button>

    <div>
      <small>{{ counter }} Änderungen</small>

      <br />

      <!-- Bedingungen mit v-if stellen -->
      <small style="color: red" v-if="counter > 10">
        Achtung!! Limit nahe
      </small>
    </div>
  </div>
</template>

<script>
export default {
  //definiere Funktion die Objekt mit Data zurückgibt, Jetzt Zugriff in Template auf diese Daten möglich
  data() {
    return {
      title: "Willkommen",
      counter: 0,
    };
  },

  //Bearbeitung der Daten mit Attribut "computed", Hier werden Funktionen definiert die etwas an das Template zurückliefern, Mit this.* haben wir Zugriff auf das was in data definiert wurde
  computed: {
    uppercase() {
      return this.title.toUpperCase();
    },
  },

  methods: {
    reset() {
      this.title = "";
    },
  },

  //watch Attribut kann Datenattribut beobachten, braucht Funktion mit Namen der Daten
  watch: {
    //Bei jeder Änderung des Datenattributes Methode ausfrufen
    title() {
      this.counter++;
    },
  },
};
</script>

<style></style>

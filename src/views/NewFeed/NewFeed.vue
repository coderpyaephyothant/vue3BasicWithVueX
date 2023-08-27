<template>
  <div>
    <h3 class="text-danger">{{ getStoredVxName }}</h3>
    <!-- <h3 class="text-danger">{{ getNameByMethod() }}</h3> -->
    {{ getMapStateName }}
    <br />
    {{ myName }}
    <!-- changeName -->
    <h3 class="success">Profile Name * {{ userName }}</h3>
    <div class="row">
      <div class="input-group mb-3 col mx-5">
        <input
          type="text"
          class="form-control"
          placeholder="Update Profile Name"
          aria-describedby="basic-addon2"
          v-model="changedProfileName"
          v-on:keyup.enter="changeProfileNameByMutations()"
        />
        <div class="input-group-append">
          <button
            class="btn btn-warning"
            type="button"
            @click="changeProfileNameByMutations()"
          >
            Update
          </button>
        </div>
      </div>
    </div>

    <ul class="list-group mx-5">
      <li class="list-group-item active">Chicken with Fried noodle</li>
      <li class="list-group-item">Pork Noodle</li>
      <li class="list-group-item">Pork Rice</li>
      <li class="list-group-item">Prawn with spicy hot</li>
      <li class="list-group-item">Fish Burmese Curry Tomato Spicy</li>
    </ul>
    <ul class="list-unstyled">
      <li v-for="(item, index) in storeVxName" :key="index" class="text-danger">
        {{ item }}
      </li>
    </ul>
    <h3 class="text-danger">Our Customers also live in</h3>
    <ul class="list-unstyled">
      <li v-for="(country, index) in internationalServices" :key="index">
        {{ country }}
      </li>
    </ul>
    <h3 class="text-info">
      {{ getSingaporeData.country }} takes {{ getSingaporeData.takeTime }}
    </h3>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "NewFeed",
  data() {
    return {
      storeVxName: this.$store.state.services,
      changedProfileName: undefined,
    };
  },
  computed: {
    getStoredVxName() {
      return this.$store.state.name;
    },
    ...mapState({ getMapStateName: (state) => state.name }),
    ...mapState({ myName: "name" }),
    ...mapState(["internationalServices", "userName"]),
    ...mapGetters(["getSingaporeData"]),
  },
  methods: {
    getNameByMethod() {
      return this.$store.state.name;
    },
    // calling actions ** dispatch
    changeProfileNameDataByActions() {
      this.$store.dispatch("setNameProfileName", this.changedProfileName);
    },
    // calling mutation ** commit
    changeProfileNameByMutations() {
      this.$store.commit(
        "changeProfileNameByMutation",
        this.changedProfileName
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>

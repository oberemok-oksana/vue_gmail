<template>
  <nav class="h-16 w-full flex items-center justify-between border-b lg:pl-60">
    <button class="focus:outline-none p-4 lg:hidden">
      <i class="bx bx-menu"></i>
    </button>
    <div class="flex w-full items-center px-4 py-2">
      <input
        type="text"
        placeholder="Search email"
        class="w-full transition duration-300 focus: text-xs p-4 rounded-lg focus:outline-none bg-gray-50"
        v-model="search"
      />
    </div>
    <div class="pl-10 pr-5 lg:flex mf:flex hidden">
      <Avatar><i class="bx bx-info-circle"></i></Avatar>
      <Avatar><i class="bx bx-cog"></i></Avatar>
      <Avatar
        ><i class="bx bx-transfer-alt" @click="showModalTheme"></i
      ></Avatar>
      <Avatar class="ml-2">
        <img
          class="w-full h-full object-cover"
          src="https://scontent.fiev10-1.fna.fbcdn.net/v/t1.6435-9/127269861_3544452962276282_4837568543955920231_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=1MJgOfB9FWAAX9VDRm3&tn=X6-c2iYhgSCRrbC8&_nc_ht=scontent.fiev10-1.fna&oh=185200464d3c2c7b30d15ef1147533e9&oe=60E32228"
          alt=""
        />
      </Avatar>
    </div>

    <Modal v-show="showModal" @close="showModal = false">
      <div>
        Theme Switcher
        <div class="mt-7 flex justify-between">
          <div
            @click="selected = 'indigo'"
            class="h-12 w-12 border-2 hover:border-indigo-600 border-white bg-indigo-400 rounded-full cursor-pointer"
            :class="{ 'border-indigo-600': selected == 'indigo' }"
          ></div>
          <div
            @click="selected = 'red'"
            class="h-12 w-12 border-2 hover:border-red-600 border-white bg-red-400 rounded-full cursor-pointer"
            :class="{ 'border-red-600': selected == 'red' }"
          ></div>
          <div
            @click="selected = 'yellow'"
            class="h-12 w-12 border-2 hover:border-yellow-600 border-white bg-yellow-400 rounded-full cursor-pointer"
            :class="{ 'border-yellow-600': selected == 'yellow' }"
          ></div>
          <div
            @click="selected = 'green'"
            class="h-12 w-12 border-2 hover:border-green-600 border-white bg-green-400 rounded-full cursor-pointer"
            :class="{ 'border-green-600': selected == 'green' }"
          ></div>
        </div>
      </div>
      <template #actions>
        <div class="flex justify-end">
          <ButtonApp @click="changeTheme(selected)">Save</ButtonApp>
        </div>
      </template>
    </Modal>
  </nav>
</template>

<script>
import Avatar from "@/components/Avatar";
import Modal from "@/components/Modal.vue";
import ButtonApp from "@/components/ButtonApp.vue";
import { mapGetters, mapState } from "vuex";

export default {
  name: "Navbar",
  components: {
    Avatar,
    Modal,
    ButtonApp,
  },
  data() {
    return {
      showModal: false,
      selected: "indigo",
    };
  },
  computed: {
    ...mapState(["theme"]),
    ...mapGetters(["readLetters"]),
    search: {
      get() {
        return this.$store.state.search;
      },
      set(value) {
        this.$store.dispatch("updateSearch", value);
      },
    },
  },
  methods: {
    showModalTheme() {
      this.showModal = true;
    },
    changeTheme(color) {
      this.$store.dispatch("changeCurrentTheme", color);
      this.showModal = false;
    },
  },
};
</script>
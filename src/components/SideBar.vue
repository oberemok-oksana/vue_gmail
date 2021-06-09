<template>
  <div class="h-full w-60 hidden lg:flex mf:flex">
    <div class="flex-auto">
      <div class="header p-4">
        <router-link :to="{ name: 'NewLetter' }"
          ><ButtonApp class="w-full"
            ><i class="bx bx-plus mr-4"></i>Compose</ButtonApp
          ></router-link
        >
      </div>
      <div class="mt-3 flex-auto">
        <router-link :to="{ name: 'Home' }">
          <ItemSidebar
            :quantity="inbox.length + social.length + promotions.length"
            active
            icon="inbox"
            >Inbox</ItemSidebar
          ></router-link
        >
        <router-link :to="{ name: 'Starred' }"
          ><ItemSidebar :quantity="starredLetters.length" icon="star"
            >Starred</ItemSidebar
          ></router-link
        >
        <!-- <ItemSidebar icon="time-five">Snoozed</ItemSidebar> -->
        <router-link :to="{ name: 'Saved' }">
          <ItemSidebar :quantity="savedLetters.length" icon="bookmark-alt"
            >Important</ItemSidebar
          ></router-link
        >
        <ItemSidebar :active="$router.path === '/starred'" icon="navigation"
          >Sent</ItemSidebar
        >
        <router-link :to="{ name: 'Trash' }">
          <ItemSidebar icon="book" :quantity="trash.length">Trash</ItemSidebar>
        </router-link>
        <ItemSidebar icon="book">Drafts</ItemSidebar>
        <ItemSidebar icon="x-circle">Spam</ItemSidebar>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonApp from "@/components/ButtonApp.vue";
import ItemSidebar from "@/components/ItemSidebar.vue";
import { mapState, mapGetters } from "vuex";

export default {
  name: "SideBar",
  components: {
    ButtonApp,
    ItemSidebar,
  },
  computed: {
    ...mapState(["inbox", "social", "promotions", "trash"]),
    ...mapGetters(["starredLetters", "savedLetters"]),
  },
  mounted() {
    /* console.log(this.$router.currentRoute.fullPath) */
  },
};
</script>
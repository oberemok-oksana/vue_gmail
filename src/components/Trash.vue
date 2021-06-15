<template>
  <div class="parent relative h-full">
    <div class="flex actions items-center p-2 border-b">
      <div
        @click="selectAll"
        class="h-5 w-5 duration-300 transition mr-1 bg-primary-50 rounded-md cursor-pointer flex items-center justify-center"
        :class="[{ 'bg-primary-500': selectedAll }]"
      >
        <div v-if="selectedAll" class="h-2 w-2 bg-white rounded-full"></div>
      </div>
      <div
        class="h-8 w-8 duration-300 transition ml-2 text-gray-400 hover:bg-gray-100 items-center justify-center flex rounded-full cursor-pointer"
      >
        <i class="bx bx-rotate-left"></i>
      </div>
      <div
        class="h-8 w-8 duration-300 transition ml-2 text-gray-400 hover:bg-gray-100 items-center justify-center flex rounded-full cursor-pointer"
      >
        <i class="bx bx-dots-horizontal-rounded"></i>
      </div>
      <div
        class="delete h-8 w-8 duration-300 transition ml-2 text-gray-400 hover:bg-gray-100 items-center justify-center items-center flex rounded-full cursor-pointer"
      >
        <svg
          @click="deleteLetters"
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="-5 0 26 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </div>
    </div>

    <div class="">
      <div class="grid grid-cols-3 text-sm">
        <div
          @click="(active = 1), clear()"
          class="transition duration-300 flex items-center mx-1 border-b-2 p-3 cursor-pointer text-gray-400"
          :class="[{ 'text-primary-500 border-primary-500': active == 1 }]"
        >
          <i class="bx bxs-inbox mr-2"></i>Inbox
        </div>
        <div
          @click="(active = 2), clear()"
          class="transition duration-300 flex items-center mx-1 p-3 cursor-pointer border-b-2 text-gray-400"
          :class="[{ 'text-primary-500 border-primary-500': active == 2 }]"
        >
          <i class="bx bxs-face-mask mr-2"></i>Social
        </div>
        <div
          @click="(active = 3), clear()"
          class="transition duration-300 flex items-center mx-1 p-3 cursor-pointer border-b-2 text-gray-400"
          :class="[{ 'text-primary-500 border-primary-500': active == 3 }]"
        >
          <i class="bx bx-tag mr-2"></i>Promotions
        </div>
      </div>
    </div>
    <Table>
      <div class="px-5 py-10" v-if="trash.length == 0">
        You do not have deleted letters.
      </div>
      <div v-if="active == 1">
        <ItemTable
          @select="message.selected = !message.selected"
          @star="message.starred = !message.starred"
          @save="message.saved = !message.saved"
          :selected="message.selected"
          :saved="message.saved"
          :starred="message.starred"
          :read="message.read"
          :user="message.user"
          :message="message.message"
          v-for="(message, i) in trash"
          :key="i"
          :deleted="message.deleted"
        />
      </div>
      <div v-if="active == 2">
        <ItemTable
          @select="message.selected = !message.selected"
          @star="message.starred = !message.starred"
          @save="message.saved = !message.saved"
          :selected="message.selected"
          :saved="message.saved"
          :starred="message.starred"
          :read="message.read"
          :user="message.user"
          :message="message.message"
          v-for="(message, i) in trash"
          :key="i"
          :deleted="message.deleted"
        />
      </div>
      <div v-if="active == 3">
        <ItemTable
          @select="message.selected = !message.selected"
          @star="message.starred = !message.starred"
          @save="message.saved = !message.saved"
          :selected="message.selected"
          :saved="message.saved"
          :starred="message.starred"
          :read="message.read"
          :user="message.user"
          :message="message.message"
          v-for="(message, i) in trash"
          :key="i"
          :deleted="message.deleted"
        />
      </div>
    </Table>
  </div>
</template>

<script>
import Table from "@/components/Table/Table.vue";
import ItemTable from "@/components/Table/ItemTable.vue";

import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Table,
    ItemTable,
  },
  data() {
    return {
      showModal: true,
      selectedAll: false,
      active: 1,
    };
  },
  computed: {
    ...mapState(["inbox", "social", "promotions", "trash"]),
    ...mapGetters(["readLetters", "starredLetters"]),
  },
  methods: {
    ...mapActions(["deleteLetters"]),
    clear() {
      this.selectedAll = false;
      this.inbox.forEach((el) => {
        el.selected = false;
      });
      this.social.forEach((el) => {
        el.selected = false;
      });
      this.promotions.forEach((el) => {
        el.selected = false;
      });
    },
    selectAll() {
      this.selectedAll = !this.selectedAll;
      if (this.active == 1) {
        this.inbox.forEach((el) => {
          this.selectedAll ? (el.selected = true) : (el.selected = false);
        });
      } else {
        if (this.active == 2) {
          this.social.forEach((el) => {
            this.selectedAll ? (el.selected = true) : (el.selected = false);
          });
        } else {
          this.promotions.forEach((el) => {
            this.selectedAll ? (el.selected = true) : (el.selected = false);
          });
        }
      }
    },
    deleteLetter(letter) {
      this.$store.dispatch("deleteLetter", letter);
    },
  },
};
</script>

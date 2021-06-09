<template>
  <div class="h-full flex flex-col">
    <div
      id="wrapper_for_header"
      class="bg-gray-600 w-full h-10 flex flex-row justify-between px-10 items-center text-white rounded"
    >
      <div>Новое сообщение</div>
      <svg
        @click="backOnHomePage"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
    <input
      v-model="user"
      class="w-full h-10 flex justify-start px-10 items-center rounded border-b-2 border-gray-100 outline-none"
      placeholder="Получатели"
    />
    <input
      v-model="topic"
      class="w-full h-10 flex justify-start px-10 items-center rounded border-b-2 border-gray-100"
      placeholder="Тема"
    />

    <textarea
      v-model="message"
      class="w-full flex-grow border-0 outline-none px-10 py-5"
      placeholder="Введите текст..."
    >
--</textarea
    >
    <div
      id="wrapper_for_footer"
      class="w-full h-15 flex justify-between px-10 rounded items-center pb-8"
    >
      <button class="bg-indigo-300 w-40 h-8 rounded text-white" @click="send">
        Отправить
      </button>
      <svg
        @click="clearLetter"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
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
</template>

<script>
export default {
  name: "NewLetter",
  data() {
    return {
      message: "",
      topic: "",
      user: "",
    };
  },
  methods: {
    send() {
      const letter = {
        message: this.message,
        topic: this.topic,
        user: this.user,
        id: 4,
        selected: false,
        starred: false,
        read: false,
        saved: false,
        deleted: false,
      };
      this.$store.dispatch("sentLetters", letter);
      this.clearLetter();
    },
    clearLetter() {
      this.message = "";
      this.topic = "";
      this.user = "";
    },
    backOnHomePage() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
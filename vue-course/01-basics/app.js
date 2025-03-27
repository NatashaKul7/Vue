const App = {
  data() {
    return {
      placeholderString: "add note",
      title: "List of notes",
      inputValue: "",
      notes: ["note 1", "note 2"],
    };
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value;
    },
    addNewNote() {
      this.notes.push(this.inputValue);
      this.inputValue = "";
    },
    // inputKeyPress(event) {
    //   if (event.key === "Enter") {
    //     this.addNewNote();
    //   }
    // },
    removeNote(index) {
      this.notes.splice(index, 1);
    },
  },
};

const app = Vue.createApp(App);

app.mount("#app");

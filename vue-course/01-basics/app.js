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
    // inputChangeHandler(event) {
    //   this.inputValue = event.target.value;
    // },
    addNewNote() {
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    toUpperCase(item) {
      return item.toUpperCase(item);
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
  computed: {
    doubleCountComputed() {
      return this.notes.length * 2;
    },
  },
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = "";
      }
    },
  },
};

const app = Vue.createApp(App);

app.mount("#app");

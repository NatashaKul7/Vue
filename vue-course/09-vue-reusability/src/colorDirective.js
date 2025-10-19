let interval;

let defaultColor;

const mousover = (e) => {
  e.target.style.color = "red";
};

const mousout = (e) => {
  e.target.style.color = defaultColor;
};

export default {
  mounted(el, binding) {
    // el.style.color = binding.value;

    defaultColor = binding.value;
    el.style[binding.arg] = binding.value;

    if (binding.modifiers.blink) {
      let flag;
      interval = setInterval(() => {
        el.style.color = flag ? "#fff" : binding.value;
        flag = !flag;
      }, 1000);
    }

    if (binding.modifiers.hover) {
      el.addEventListener("mouseover", mousover);
      el.addEventListener("mouseout", mousout);
    }
  },
  updated(el, binding) {
    // el.style.color = binding.value;
    el.style[binding.arg] = binding.value;
  },
  unmounted(el) {
    if (interval) {
      clearInterval(interval);
    }

    el.removeEventListener("mouseover", mousover);
    el.removeEventListener("mouseout", mousout);
  },
};

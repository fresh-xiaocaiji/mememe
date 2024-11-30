// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classlist.add("active");
//     } else {
//       entry.target.classList.remove("active");
//     }
//   });
// });

// const hiddenElements = document.querySelectorAll(".flag");
// hiddenElements.forEach((el) => observer.observe(el));
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // When the element comes into view, add the 'visible' class
        entry.target.classList.add("visible");
        // Optionally stop observing the element after it appears
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
); // Trigger when 50% of the element is in the viewport

// Observe the elements with the class 'hidden'
document.querySelectorAll(".hidden").forEach((element) => {
  observer.observe(element);
});

const observer2 = new IntersectionObserver(
  (entries, observer2) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // When the element comes into view, add the 'visible' class
        entry.target.classList.add("visible2");
        // Optionally stop observing the element after it appears
        observer2.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
); // Trigger when 50% of the element is in the viewport

// Observe the elements with the class 'hidden'
document.querySelectorAll(".hidden2").forEach((element) => {
  observer2.observe(element);
});

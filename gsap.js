gsap.from(".main .name span", {
  position: "relative",
  top: 100,
  stagger: 0.1,
  duration: 0.05,
  // scrollTrigger:""
  opacity: 0,
});

gsap.to(".main", {
  position: "relative",
  top: "90vh",
  opacity: 0,
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    start: "top 5%",
    // markers: true,
    scrub: 1,
  },
});

gsap.from(".selectedWork h2 span", {
  position: "relative",
  top: 100,
  stagger: 0.1,
  duration: 0.01,
  scrollTrigger: {
    end: "top 70%",
    trigger: ".selectedWork h2",
    scroller: "body",
    scrub: 1,
  },
  opacity: 0,
});

gsap.from(".DDC h2 span", {
  position: "relative",
  top: 100,
  stagger: 0.1,
  duration: 0.01,
  scrollTrigger: {
    end: "top 40%",
    trigger: ".skill .DDC",
    scroller: "body",
    scrub: 1,
  },
  opacity: 0,
});

gsap.from(".aboutHeading h2", {
  position: "relative",
  opacity: 0,
  top: 100,
  duration: 0.01,
  scrollTrigger: {
    end: "top 40%",
    trigger: ".aboutHeading h2",
    scroller: "body",
    scrub: 1,
  },
});

gsap.from(".descriptionContaainer", {
  position: "relative",
  opacity: 0,
  top: 100,
  duration: 0.01,
  scrollTrigger: {
    end: "top 40%",
    trigger: ".descriptionContaainer",
    scroller: "body",
    scrub: 1,
  },
});

gsap.from(".form h2 span", {
  position: "relative",
  top: 100,
  stagger: 0.1,
  duration: 0.01,
  scrollTrigger: {
    end: "top 90%",
    trigger: ".form h2",
    scroller: "body",
    scrub: 1,
  },
  opacity: 0,
});

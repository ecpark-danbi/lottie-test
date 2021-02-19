// import danbiLoader from "./danbiLoader";

const svgContainer = document.getElementById("loader");

fetch("./js/danbiLoader.json")
  .then((response) => response.json())
  .then((danbiLoader) => {
    bodymovin.loadAnimation({
      wrapper: svgContainer,
      animType: "svg",
      loop: true,
      animationData: danbiLoader,
    });
  });

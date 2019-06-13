import React from "react";
import "./desktop.css";

const Desktop = () => {
  const Animate = () => {
    ".step-wrapper".toggleClass("move-line");
  };

  return (
    <div class="container">
      <button
        type="button"
        class="btn-start"
        onClick={() => {
          Animate();
        }}
      >
        Start movement (by adding class)
      </button>
      <div class="step-wrapper move-line">
        <article
          class="linestep linestep1"
          style={{ left: "56%", top: " -2% " }}
        >
          <span class="num"> 1</span>
          <p class="bottom">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            non voluptatem quia,
          </p>
        </article>

        <article
          class="linestep linestep2"
          style={{ right: "-0.5%", top: "20%" }}
        >
          <span class="num"> 2</span>
          <p class="left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            non voluptatem quia,
          </p>
        </article>

        <article class="linestep linestep3" style={{ left: "68%", top: "44%" }}>
          <span class="num"> 3</span>
          <p class="bottom">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            non voluptatem quia,
          </p>
        </article>

        <article
          class="linestep linestep4"
          style={{ left: "32%", top: "44.5%" }}
        >
          <span class="num">4</span>
          <p class="top">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            non voluptatem quia,
          </p>
        </article>

        <article
          class="linestep linestep5"
          style={{ left: "-1.5%", top: "68%" }}
        >
          <span class="num"> 5</span>
          <p class="right">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            non voluptatem quia,
          </p>
        </article>

        <article class="linestep linestep6" style={{ left: "21%", top: "93%" }}>
          <span class="num"> 6</span>
          <p class="bottom">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            non voluptatem quia,
          </p>
        </article>

        <article
          class="linestep linestep7"
          style={{ left: "53%", top: "93% " }}
        >
          <span class="num"> 7</span>
          <p class="top">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            non voluptatem quia,
          </p>
        </article>

        <article class="linestep linestep8" style={{ left: "86%", top: "93%" }}>
          <span class="num"> 8</span>
          <p class="bottom">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            non voluptatem quia,
          </p>
        </article>

        <svg
          width="100%"
          viewBox="0 0 1156 608"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="path"
            d="m560.30957,10.588011c0,0 438.0947,1.90476 439.04708,1.90476c0.95238,0 144.57857,-1.02912 143.80934,137.14269c-0.76923,138.17181 -116.81095,142.30859 -131.61967,143.8923c-14.80873,1.58372 -840.41472,-0.71429 -860.5941,0.71429c-20.17938,1.42858 -148.4991,6.80903 -146.83244,147.05973c1.66666,140.2507 129.52365,152.14266 129.33243,151.27321c0.19122,0.86945 815.268425,2.687632 951.42748,0"
            opacity="0.5"
            stroke-width="7"
            stroke="#2567d1"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default Desktop;

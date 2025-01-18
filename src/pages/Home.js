import heroImg from "../assets/images/hero-img.png";

export function loadHomepage() {
  const content = document.getElementById("content");
  content.innerHTML = `<div class="flex items-center w-5/6">
        <div class="flex-1 flex flex-col gap-4">
          <div>
            <h1 class="font-bold text-6xl">Hello!</h1>
            <div class="flex flex-col gap-4">
              <p>
                My name is Christian Ortiz, a junior web developer from the
                Philippines. I am passionate about building things and
                technology in general.
              </p>
              <p>
                I have worked on various projects, from order applications to
                management systems, utilizing tools including frameworks and
                no-code platforms such as WordPress and Bricks Builder.
              </p>
            </div>
          </div>
          <div class="flex gap-4">
            <button class="border px-6 border-2 border-black">
              Contact me!
            </button>
            <div class="flex gap-2">
              <svg
                id="Layer_1"
                viewBox="0 0 56.693 56.693"
                width="32px"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z"
                  />
                  <path
                    d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12   c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z    M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88   C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078   c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179   c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z"
                  />
                </g>
              </svg>
              <svg
                height="32px"
                id="Layer_1"
                viewBox="0 0 512 512"
                width="32px"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    class="st0"
                    d="M256,32C132.3,32,32,134.8,32,261.7c0,101.5,64.2,187.5,153.2,217.9c11.2,2.1,15.3-5,15.3-11.1   c0-5.5-0.2-19.9-0.3-39.1c-62.3,13.9-75.5-30.8-75.5-30.8c-10.2-26.5-24.9-33.6-24.9-33.6c-20.3-14.3,1.5-14,1.5-14   c22.5,1.6,34.3,23.7,34.3,23.7c20,35.1,52.4,25,65.2,19.1c2-14.8,7.8-25,14.2-30.7c-49.7-5.8-102-25.5-102-113.5   c0-25.1,8.7-45.6,23-61.6c-2.3-5.8-10-29.2,2.2-60.8c0,0,18.8-6.2,61.6,23.5c17.9-5.1,37-7.6,56.1-7.7c19,0.1,38.2,2.6,56.1,7.7   c42.8-29.7,61.5-23.5,61.5-23.5c12.2,31.6,4.5,55,2.2,60.8c14.3,16.1,23,36.6,23,61.6c0,88.2-52.4,107.6-102.3,113.3   c8,7.1,15.2,21.1,15.2,42.5c0,30.7-0.3,55.5-0.3,63c0,6.1,4,13.3,15.4,11C415.9,449.1,480,363.1,480,261.7   C480,134.8,379.7,32,256,32z"
                  />
                </g>
              </svg>
              <svg
                id="Layer_1"
                viewBox="0 0 56.7 56.7"
                width="32px"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M53.1719,14.5953l0.0011-0.0011l-0.0011,0.0008v-1.184c0-2.2468-1.8384-4.0852-4.0853-4.0852l-0.0012,0.0011l-0.0024,0.0018  l0.0036-0.0029H7.3962l0.0161,0.0131l-0.0161-0.012c-2.2468,0-4.0853,1.8384-4.0853,4.0853v27.9073  c0,2.2468,1.8384,4.0851,4.0853,4.0851h1.4543h38.6578v-0.001c4.2856-0.0498,5.5728-1.1102,5.6702-4.0809L53.1719,14.5953z   M46.0429,10.3258L28.1753,23.487L10.4239,10.3258H46.0429z M9.8608,20.5521l16.5508,11.4004l0.0166,0.0115L9.8513,43.4907  L9.8608,20.5521z M10.2886,44.4046l17.0151-11.8314l0.2985,0.2077c0.1716,0.1194,0.3714,0.1792,0.5712,0.1792  c0.1982,0,0.8773-0.39,0.8773-0.39l17.0197,11.8345H10.2886z M46.4973,43.4836L29.9305,31.9641l9.2394-6.3642l7.3274-5.0472V43.4836  z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="flex-1 flex justify-center">
          <img src=${heroImg} alt="" class="w-96" />
        </div>
      </div>`;
}

const text = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices ex ut ultrices porta. Vivamus a nunc vel mauris mattis euismod. Vestibulum feugiat nisl nec sem tincidunt consequat. Fusce sit amet enim sit amet ante dictum convallis a in lectus. Fusce odio massa, congue in libero sed, aliquet sollicitudin mi. Aliquam vestibulum, arcu eu fringilla egestas, urna ligula ultricies metus, ac interdum felis enim maximus tortor. Nam convallis nibh eu elit fringilla hendrerit. Maecenas eros dui, imperdiet et risus ac, tempor viverra augue. Praesent sollicitudin turpis massa.",

  "Nullam molestie dolor nulla. Maecenas commodo arcu eu sollicitudin viverra. Quisque ultrices erat a congue mollis. Praesent id tempor libero. Curabitur accumsan vulputate lorem sed ultrices. Donec malesuada vitae ipsum at vestibulum. Duis commodo cursus luctus. Etiam ullamcorper eget dolor sit amet posuere. In volutpat a lorem sed ullamcorper. Cras ligula diam, sodales vel varius nec, ullamcorper sit amet leo. Vestibulum accumsan, ligula quis venenatis lacinia, nunc massa tincidunt nunc, at lacinia metus mi id metus. Nullam ultrices risus ut mi pretium interdum.",

  "Pellentesque tortor eros, egestas et purus ut, varius condimentum velit. Nullam viverra, tellus ullamcorper hendrerit porta, ante ante aliquam dui, vel viverra ex libero et elit. Vestibulum eu rhoncus mauris. Integer eu erat tincidunt, luctus nibh a, ultricies purus. Aenean sodales commodo odio ut laoreet. Phasellus at enim dignissim, tempor risus non, scelerisque felis. Nam at purus ultricies, malesuada risus vel, fringilla nunc. Duis eleifend risus lorem, quis vestibulum nibh sodales et.",

  "Integer molestie dui in velit volutpat scelerisque. Sed eleifend nulla purus, quis ultricies dolor rhoncus nec. Quisque massa dui, iaculis quis scelerisque sed, varius ut tortor. Phasellus eu risus feugiat, egestas metus quis, posuere libero. Suspendisse sodales felis sit amet vulputate commodo. Ut ante quam, malesuada ut ultrices in, porta a mi. Integer vel vulputate leo. Sed tempus, neque at bibendum gravida, purus ante accumsan metus, nec egestas arcu ex at nisi.",

  "Quisque congue ut ligula a bibendum. Maecenas consectetur vel orci eu pharetra. In condimentum faucibus finibus. Praesent vel maximus augue. Integer auctor lectus at laoreet facilisis. Etiam cursus, leo at pharetra consectetur, massa tortor aliquet lectus, id sagittis nunc erat sit amet est. Morbi pharetra eros at lobortis pharetra. Phasellus cursus augue posuere finibus iaculis. Quisque nec condimentum sem.",

  "Integer scelerisque condimentum ligula, at tincidunt justo condimentum ac. Etiam sit amet nisl augue. Aenean eu mauris metus. Morbi finibus interdum orci vitae pellentesque. Sed ligula quam, commodo eget aliquet non, pulvinar in dui. In ornare diam libero, in mattis sapien euismod vitae. Pellentesque aliquam imperdiet urna, commodo malesuada purus ultricies sed. Nulla sed tincidunt purus. Nulla vel nunc libero. Nunc finibus magna urna, quis scelerisque magna suscipit eu. Sed porttitor convallis metus, non sollicitudin diam vehicula vitae. Aenean porta suscipit sem, vitae luctus quam.",

  "Proin eleifend augue non egestas posuere. Etiam eu quam eros. Ut non est id est interdum pulvinar at vel velit. Etiam nec venenatis nisi, vitae laoreet mauris. Mauris molestie eu elit vitae commodo. Sed aliquam, sem in porttitor tincidunt, nibh lorem finibus magna, egestas accumsan nisi justo sit amet ipsum. Sed consectetur nisl eget dolor hendrerit fermentum. Praesent faucibus eros eu sem mattis congue. Pellentesque id porttitor diam. Sed vel consequat justo, ac feugiat lacus. Phasellus vel velit vel libero elementum viverra eget sed sem. Pellentesque nec quam orci. Quisque posuere ex fringilla sapien vestibulum porta.",

  "Praesent suscipit justo at libero sollicitudin varius. Nulla facilisi. Nulla faucibus dolor neque, non tempor leo pretium sed. Cras varius euismod imperdiet. Aliquam sollicitudin neque et purus venenatis consequat. Aliquam erat volutpat. Quisque finibus, est quis volutpat consectetur, urna odio tincidunt tortor, nec tempor erat nisi non diam. Curabitur eu eros posuere, rutrum libero rutrum, hendrerit diam. Phasellus aliquam, elit quis efficitur malesuada, sapien sapien molestie nunc, sed vulputate augue felis et lorem. Morbi eu consequat velit, sed posuere arcu. Praesent sagittis erat eget arcu viverra sodales. Ut sodales urna hendrerit feugiat interdum. Sed posuere, ex quis commodo dictum, nunc elit laoreet risus, in ornare felis leo in velit. Nullam vel cursus lacus, ac laoreet orci. Quisque non auctor justo.",

  "Curabitur ligula enim, finibus non malesuada ullamcorper, blandit ac nisi. Vestibulum tortor est, tempus eget libero quis, pulvinar sollicitudin nisi. Donec euismod urna dictum elit sagittis dignissim. Proin varius est nec risus varius pretium quis vitae lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut lobortis risus nunc, at efficitur purus aliquet et. Praesent sit amet tincidunt ex, eu rutrum massa. Curabitur mattis elit eget blandit aliquet. In hac habitasse platea dictumst. Etiam varius urna purus, ac pretium nisl convallis eu. Ut eu felis efficitur, convallis tellus sed, tincidunt justo. Aliquam erat volutpat.",
];

const form = document.querySelector(".form");
const inputForm = document.querySelector(".form-input");
const textContainer = document.querySelector(".text-container");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let value = parseInt(inputForm.value);
  if (value < 0 || value > 9 || isNaN(value)) {
    value = Math.floor(Math.random() * text.length);
  }
  let tempText = text
    .slice(0, value)
    .map((item) => {
      return `<p class='text'>${item}</p>`;
    })
    .join("");
  console.log(textContainer);
  textContainer.innerHTML = tempText;
});

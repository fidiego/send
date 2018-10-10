const html = require('choo/html');

module.exports = function(a, b) {
  return html`
    <div class="split">
      ${a}
      ${b}
    </div>
  `;
};

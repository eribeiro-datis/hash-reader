(function () {
  function printToScreen(text) {
    var newDiv = document.createElement('div');
    var newContent = document.createTextNode(text);
    newDiv.appendChild(newContent);

    var currentDiv = document.getElementById('bottom');
    document.body.insertBefore(newDiv, currentDiv);
  }

  window.addEventListener('hashchange', function (e) {
    console.log(e);
  })
})();

let html = "<ul>";
for (let i = 1; i <= 10; i++)
  html += '<li>5 x ' + i + ' = ' + (5 * i) + '</li>';
html += "</ul>";
document.getElementById('tablaMultiplicar').innerHTML = html;
/* eslint-disable no-unused-vars */
'use strict';
function showGame() {
  document.getElementById('stats').style.display = 'none';
  document.getElementById('options').style.display = 'none';
  document.getElementById('game').style.display = 'block';
}

function showOptions() {
  document.getElementById('game').style.display = 'none';
  document.getElementById('stats').style.display = 'none';
  document.getElementById('options').style.display = 'block';
}

function showStats() {
  document.getElementById('game').style.display = 'none';
  document.getElementById('options').style.display = 'none';
  document.getElementById('stats').style.display = 'block';
}

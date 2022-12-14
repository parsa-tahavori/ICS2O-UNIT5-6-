// Copyright (c) 2022 Parsa Tahavori All rights reserved
//
// Created by: Parsa Tahavori
// Created on: Dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT5-6-/sw.js", {
    scope: "/ICS2O-UNIT5-6-/",
  })
}

/**
 * this function
 */
function myButtonClicked() {
  const num1 = parseFloat(document.getElementById("num1").value)
  const num2 = parseFloat(document.getElementById("num2").value)

  let count = 0
  let sum = 0

  while (count < num2) {
    sum += num1
    count++
  }

  document.getElementById("answer").innerHTML = "your answer is: " + sum + "."
}

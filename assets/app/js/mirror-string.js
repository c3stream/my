"use strict";
var C3STREAM_APP = C3STREAM_APP || {};
C3STREAM_APP.MIRROR_STRING = {};
(function(_) {
  const inputTextID = "input-string";
  const resultTextID = "result-string";
  const mirrorButtonID = "mirror-button";

  const mirrorString = async () => {
    var input = document.getElementById(inputTextID).value;
    var result = document.getElementById(resultTextID);
    initResulitString();
    await (() =>
      (result.value = Array.prototype.reverse
        .call(Array.from(input))
        .join("")))(input, result);
  };

  const clickMirrorString = event => {
    mirrorString();
  };

  const initResulitString = object => {
    if (
      typeof object === "undefined" ||
      typeof object === "Object" ||
      object.getElementById !== resultTextID
    ) {
      var result = document.getElementById(resultTextID);
      result.value = "";
    } else {
      object.value = "";
    }
  };

  _.setMirrorStringButton = event => {
    initResulitString();
    var mirrorButton = document.getElementById(mirrorButtonID);
    mirrorButton.removeEventListener("click", clickMirrorString);
    mirrorButton.addEventListener("click", clickMirrorString);
  };
})(C3STREAM_APP.MIRROR_STRING);
window.addEventListener(
  "DOMContentLoaded",
  C3STREAM_APP.MIRROR_STRING.setMirrorStringButton
);

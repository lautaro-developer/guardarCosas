// new QRCode(document.getElementById('qrcode'), 'youtube.com');
const btn = document.getElementById("generatorQr").onclick = qrCodeGenerator;
const forma = document.getElementById("form");
const divcode = document.getElementById('qrcode');

function qrCodeGenerator() {
  // var qrcode = new QRCode(document.getElementById("qrcode"), {
  //     text: forma.inputqr.value,
  //     width: 128,
  //     height: 128,
  //     colorDark : "#000000",
  //     colorLight : "#ffffff",
  //     correctLevel : QRCode.CorrectLevel.H
  // });

  new QRCode(divcode, forma.inputqr.value);
}

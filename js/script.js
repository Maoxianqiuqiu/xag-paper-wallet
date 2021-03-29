
var qrcodeAddress = new QRCode(document.getElementById("qrcodeAddress"),{width: 120,height: 120});
var qrcodeSecret = new QRCode(document.getElementById("qrcodeSecret"),{width: 120, height: 120});

newAccount();

function newAccount() {
  var api = new ripple.RippleAPI();
  var keypair = api.generateAddress();
  var address = keypair.address;
  var seed = keypair.secret;
  var addrurl = "https://scan.xrpgen.com/#!/account?data="+address;
  document.getElementById("address").innerHTML = address;
  document.getElementById("secret").innerHTML = seed;
  document.getElementById("addr").href = addrurl;
  qrcodeAddress.makeCode(address);
  qrcodeSecret.makeCode(seed);
}

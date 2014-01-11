Tinytest.add('ripemd160', function(testTiny){
	//http://www.md5calc.com/ripemd160
    var hash = CryptoJS.RIPEMD160("Message");
    testTiny.equal(hash.toString(), '85eab2fe4383a869da13d51f4b91506924b1f821', "ripemd160 generator fail");
    hash = CryptoJS.RIPEMD160("hello");
    testTiny.equal(hash.toString(), '108f07b8382412612c048d07d13f814118445acd', "ripemd160 generator fail");
    hash = CryptoJS.RIPEMD160("");
    testTiny.equal(hash.toString(), '9c1185a5c5e9fc54612808977ee8f548b2258d31', "ripemd160 generator fail");
});

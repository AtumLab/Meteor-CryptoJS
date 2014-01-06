Tinytest.add('md5', function(testTiny){
    var hash = CryptoJS.MD5("Message");
    testTiny.equal(hash.toString(), '4c2a8fe7eaf24721cc7a9f0175115bd4', "md5 generator fail");
    hash = CryptoJS.MD5("hello");
    testTiny.equal(hash.toString(), '5d41402abc4b2a76b9719d911017c592', "md5 generator fail");
    hash = CryptoJS.MD5("");
    testTiny.equal(hash.toString(), 'd41d8cd98f00b204e9800998ecf8427e', "md5 generator fail");
});
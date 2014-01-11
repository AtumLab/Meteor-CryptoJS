Tinytest.add('sha256', function(testTiny){
    //http://www.sha1-online.com/
    var hash = CryptoJS.SHA256("Message");
    testTiny.equal(hash.toString(), '2f77668a9dfbf8d5848b9eeb4a7145ca94c6ed9236e4a773f6dcafa5132b2f91', "sha256 generator fail");
    hash = CryptoJS.SHA256("hello");
    testTiny.equal(hash.toString(), '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824', "sha256 generator fail");
    hash = CryptoJS.SHA256("");
    testTiny.equal(hash.toString(), 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', "sha256 generator fail");
});
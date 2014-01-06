Tinytest.add('sha1', function(testTiny){
	//http://www.sha1-online.com/
    var hash = CryptoJS.SHA1("Message");
    testTiny.equal(hash.toString(), '68f4145fee7dde76afceb910165924ad14cf0d00', "md5 generator fail");
    hash = CryptoJS.SHA1("hello");
    testTiny.equal(hash.toString(), 'aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d', "md5 generator fail");
    hash = CryptoJS.SHA1("");
    testTiny.equal(hash.toString(), 'da39a3ee5e6b4b0d3255bfef95601890afd80709', "md5 generator fail");
});
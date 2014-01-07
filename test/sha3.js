Tinytest.add('sha3', function(testTiny){
    //http://code.drostie.org/sha3/
    //SHA-3 is the winner of a five-year competition to select a new cryptographic hash algorithm where 64 competing designs were evaluated.
    //SHA-3 can be configured to output hash lengths of one of 224, 256, 384, or 512 bits. The default is 512 bits.
    var hash = CryptoJS.SHA3("Message", { outputLength: 512 });
    testTiny.equal(hash.toString(), '0664441aca014fb2482fb6d412d506391c15e0a10645d1a4ec25869c234de7fb39eb056211a86037663d4440d22455e638394cb4f56a9694a7b89e7577ede2a5', "md5 generator fail");
    hash = CryptoJS.SHA3("Message", { outputLength: 384 });
    testTiny.equal(hash.toString(), '0c8d6ff6e6a1cf18a0d55b20f0bca160d0d1c914a5e842f3707a25eeb20a279f6b4e83eda8e43a67697832c7f69f53ca', "md5 generator fail");
    hash = CryptoJS.SHA3("Message", { outputLength: 256 });
    testTiny.equal(hash.toString(), '9a59efbc471b53491c8038fd5d5fe3be0a229873302bafba90c19fbe7d7c7f35', "md5 generator fail");
    hash = CryptoJS.SHA3("Message", { outputLength: 224 });
    testTiny.equal(hash.toString(), '41a67a17f83673c511a8c0f6b55c6ee7e0faa8de66dd9c026fcc3dec', "md5 generator fail");
    hash = CryptoJS.SHA3("Message");
    testTiny.equal(hash.toString(), '0664441aca014fb2482fb6d412d506391c15e0a10645d1a4ec25869c234de7fb39eb056211a86037663d4440d22455e638394cb4f56a9694a7b89e7577ede2a5', "md5 generator fail");
});
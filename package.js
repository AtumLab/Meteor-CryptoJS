/**
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */
// cd /var/www/js/my_project/packages/CryptoJS
// meteor test-packages ./
Package.describe({
    summary: "crypto-js for meteor",
    author: "Jeff Mott",
    home: "https://code.google.com/p/crypto-js/#Quick-start_Guide",
    version: "3.1.2"
});

var both = ["client", "server"],
client = "client",
server = "server";

Package.on_use(function (api) {

    // depend packages
    // api.use(["underscore"], both);
    
    // both
    api.add_files([
        'lib/_boot.js',
        'lib/md5.js',
        'lib/sha1.js',

        'lib/exports.js'
    ], both);

    // client
    api.add_files([
        
    ], client);

    // server
    api.add_files([

    ], server);

    if (typeof api.export !== 'undefined') {
        api.export('CryptoJS', both);
    }
});

Package.on_test(function (api) {
    api.use(['CryptoJS', 'tinytest', 'test-helpers'], both);
    api.add_files('test/md5.js', both);
    api.add_files('test/sha1.js', both);
});
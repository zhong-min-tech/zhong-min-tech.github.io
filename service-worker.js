/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ee97e0ffe8dbcc561f2e51b958b73d59"
  },
  {
    "url": "assets/css/0.styles.31b588f1.css",
    "revision": "a528c4139af3c57ce47997606d82c667"
  },
  {
    "url": "assets/img/1.730e38d9.png",
    "revision": "730e38d9c604047632ff4e281dfb1145"
  },
  {
    "url": "assets/img/2.4e71a8ea.png",
    "revision": "4e71a8ea98f7d847eedd7a21c1ad4cdc"
  },
  {
    "url": "assets/img/3.b6b9093c.png",
    "revision": "b6b9093c6dd5c89afb13f4af0c8e6a7d"
  },
  {
    "url": "assets/img/4.0b1e266a.png",
    "revision": "0b1e266abccf10aea5560d2f51c6d8bb"
  },
  {
    "url": "assets/img/5.fbe41c9c.png",
    "revision": "fbe41c9c4263a93e41b1b3ebb60b1655"
  },
  {
    "url": "assets/img/car.1de71009.png",
    "revision": "1de71009bf1733bc349b6f06c4a0f993"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/lifecycle.496d84dc.png",
    "revision": "496d84dc3c1645b4ca3a8989af9c0a66"
  },
  {
    "url": "assets/img/vue3_1.0c23c4f8.png",
    "revision": "0c23c4f8e19ba165ff850b73e22d90a8"
  },
  {
    "url": "assets/js/1.9ea8ecf4.js",
    "revision": "270ec038b4e8856a3713be5768cb6d5d"
  },
  {
    "url": "assets/js/10.aa908b6e.js",
    "revision": "a1699ee4656aaa82c3a3e93ee4ba45e2"
  },
  {
    "url": "assets/js/11.dc3db45b.js",
    "revision": "bae5ba5c450a13d90b6d2e0e7bebed79"
  },
  {
    "url": "assets/js/12.ebf9f6c0.js",
    "revision": "45213f845280f0d11229868c899efabf"
  },
  {
    "url": "assets/js/13.2b5bf40d.js",
    "revision": "17484d13dc2a6a595e95198e287b5032"
  },
  {
    "url": "assets/js/14.fb33df69.js",
    "revision": "d8d2f0d012f534a17eee3b6a3f607b5a"
  },
  {
    "url": "assets/js/15.6b4ca613.js",
    "revision": "f6ea01190ce5ae8a9790a24c66102d2b"
  },
  {
    "url": "assets/js/16.ea68fbad.js",
    "revision": "f95e933f0c1083f6a1198faa476c8c4a"
  },
  {
    "url": "assets/js/17.83e321ae.js",
    "revision": "e8b4d9aaae3d728b12204dd796cd4f77"
  },
  {
    "url": "assets/js/18.f1043388.js",
    "revision": "f62241de312f6d69af7537ab21289000"
  },
  {
    "url": "assets/js/19.ac696d7c.js",
    "revision": "11a3c08552f72a263be5aaf519be8cb8"
  },
  {
    "url": "assets/js/20.c21cd463.js",
    "revision": "1b324fb44b58d53e6319251f67aba098"
  },
  {
    "url": "assets/js/21.a308cf6c.js",
    "revision": "d8e7929a4bf09ef699a747ba3d495f31"
  },
  {
    "url": "assets/js/22.6a9cc765.js",
    "revision": "ebff8a28a1afc5d8abfb8b03aadc5d1d"
  },
  {
    "url": "assets/js/23.cf0f85c8.js",
    "revision": "3c2024fe344bc77bf5c45d0fdafd001b"
  },
  {
    "url": "assets/js/24.88936f59.js",
    "revision": "60491157c6dcfdc11b904ecaf6dd4b26"
  },
  {
    "url": "assets/js/25.e09aed59.js",
    "revision": "74967dad8ce828de439c7c8a6907490f"
  },
  {
    "url": "assets/js/26.3b479570.js",
    "revision": "dcda5049a2bb6bb5ac5e0296ac947b96"
  },
  {
    "url": "assets/js/27.d95f51a6.js",
    "revision": "e4393464f1efce41b3194ceed758a196"
  },
  {
    "url": "assets/js/28.e520edd2.js",
    "revision": "1d9f43c0db446d851c466104b91e5a3d"
  },
  {
    "url": "assets/js/29.e295e91b.js",
    "revision": "a95a282e884edccfa5827f1242ee2194"
  },
  {
    "url": "assets/js/30.3dbf50b2.js",
    "revision": "1fc44be663ab7ad4c39a444aed65afaf"
  },
  {
    "url": "assets/js/31.c81e12f7.js",
    "revision": "a737d0aacb58f042dce17bb4503ae6b6"
  },
  {
    "url": "assets/js/32.a4c1fd15.js",
    "revision": "fe8e558c243bbc7a5e834677c13ced40"
  },
  {
    "url": "assets/js/4.4cc306a1.js",
    "revision": "0f49d1c1b703e927a0726c59926ad4b1"
  },
  {
    "url": "assets/js/5.9bf1ef11.js",
    "revision": "ddc0cb428724254620f1a97c7e789f45"
  },
  {
    "url": "assets/js/6.7917ba30.js",
    "revision": "c9549e670a9d4d8829cbbabb47a1aced"
  },
  {
    "url": "assets/js/7.4bf62a14.js",
    "revision": "93d03c72d681d35fb1b438ff45ae521e"
  },
  {
    "url": "assets/js/8.3fec3cc6.js",
    "revision": "c89fcaeedd6d8e823ea8b5cd9d4a33ff"
  },
  {
    "url": "assets/js/9.824907ac.js",
    "revision": "0e185095fa3457ffe0a71a2046a24d21"
  },
  {
    "url": "assets/js/app.abedcc8d.js",
    "revision": "9fa5e05faee3993cefd0eb2057650637"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.481a257a.js",
    "revision": "861d2be40c9b03d468090f79e98d0932"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/https/index.html",
    "revision": "ffd4aebbcab8762066003c4cfbab6c61"
  },
  {
    "url": "categories/index.html",
    "revision": "e8dc5f7bed4e40d3277ded816db0da69"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "f68ffacdf80b159c5009caf48f75acf0"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "b04748be9a9f81b317ae460724243f98"
  },
  {
    "url": "categories/Mysql/index.html",
    "revision": "fccc1a269abd0a9b1e9db70803a757e7"
  },
  {
    "url": "categories/Nginx/index.html",
    "revision": "86bcae0748ded9b8064a5f055d880cda"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "03ed51622a2d80bdc49e77ecddcc5a69"
  },
  {
    "url": "categories/深度学习/index.html",
    "revision": "e76f82dbeead5d639eb38d40428e214e"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "22df4a30edfb9f1d3a4a90ef91766c43"
  },
  {
    "url": "categories/英语/index.html",
    "revision": "08cd5cf3cc812daba30ceed23182c9b7"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "ff48d33fb976eeec23d823cba6a9d577"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "fc4c357a704aa1b6af5b4d3d6f5a399c"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "368f88f4c71ec4e49068c16491e0843d"
  },
  {
    "url": "js/custom.js",
    "revision": "7b48c4ecf5ca2106ac8f1306de920f20"
  },
  {
    "url": "logo.png",
    "revision": "fc4c357a704aa1b6af5b4d3d6f5a399c"
  },
  {
    "url": "tag/index.html",
    "revision": "03479a7e5aa8851be31a87e6edfd3dad"
  },
  {
    "url": "tags/cars/index.html",
    "revision": "b34c2b1baf66f63e06017175dc13415e"
  },
  {
    "url": "tags/grass/index.html",
    "revision": "78b36482b74ef4498b66ad61d60d2942"
  },
  {
    "url": "tags/hog_face_detector/index.html",
    "revision": "c22d3ea0977d3376a05be3a858151664"
  },
  {
    "url": "tags/html/index.html",
    "revision": "2c632831eadae02c256e2557002fd6d6"
  },
  {
    "url": "tags/https/index.html",
    "revision": "1873f9042622dbbabbbf48d8c7e2b6fd"
  },
  {
    "url": "tags/Linux/index.html",
    "revision": "2312aed7ad4cb580417bc56f31e03835"
  },
  {
    "url": "tags/mask_detector/index.html",
    "revision": "89a0c6a4329b43138ee7292f8bf85239"
  },
  {
    "url": "tags/metal_hole/index.html",
    "revision": "4be06a160d6d8520e336643afac92824"
  },
  {
    "url": "tags/Mysql/index.html",
    "revision": "67cc36b9ed25cd83601c6508301b98ce"
  },
  {
    "url": "tags/Nginx/index.html",
    "revision": "38b0e42e7bf3535ca9cddb5a9302dfd2"
  },
  {
    "url": "tags/printer/index.html",
    "revision": "9e23235c608817ad950579a1e5af3c17"
  },
  {
    "url": "tags/react/index.html",
    "revision": "408cbc1e38907826f6533ee2b93851c6"
  },
  {
    "url": "tags/spring/index.html",
    "revision": "9a35462bc1ca35999af62b65b5a1840e"
  },
  {
    "url": "tags/vue3/index.html",
    "revision": "1682a204b87175774864bde6a570d0c6"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "5b291ed8d45c47bec167a57499aaf887"
  },
  {
    "url": "tags/英语/index.html",
    "revision": "27248b5af3f1aa098a44e16d757a36ea"
  },
  {
    "url": "timeline/index.html",
    "revision": "02e2cfc4c294353a5f57c973f48b96a6"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/java/spring.html",
    "revision": "690a4798a3be9d5d13e5679082579f95"
  },
  {
    "url": "技术文章/java/thread.html",
    "revision": "f6bcb98e5d0137edfa3a1a32da22cd4e"
  },
  {
    "url": "技术文章/Linux/Linux.html",
    "revision": "ad5ca094a5ca06cffaf8b5d0edd58d63"
  },
  {
    "url": "技术文章/Mysql/Mysql.html",
    "revision": "50d34cac6f8674f1e09dd6c8208131f1"
  },
  {
    "url": "技术文章/Nginx/Nginx.html",
    "revision": "778ba6f4089ca5ccbbeae74a843b1174"
  },
  {
    "url": "技术文章/Nginx/Nginx与https.html",
    "revision": "b982c3929cd3b1c87d070ae86fcad265"
  },
  {
    "url": "技术文章/前端/html.html",
    "revision": "cb2e331f761f30a47470195be82968c9"
  },
  {
    "url": "技术文章/前端/react.html",
    "revision": "648e91fc1870dbefa437b5dd497f3c3a"
  },
  {
    "url": "技术文章/前端/vue3.html",
    "revision": "2020db42c80ecd74dee9e867170912dd"
  },
  {
    "url": "深度学习/3D打印机裹头/printer.html",
    "revision": "083ac7f042b21919889c709a6a60b18c"
  },
  {
    "url": "深度学习/index.html",
    "revision": "c5fb49958dce1a00434efdf0c8687bac"
  },
  {
    "url": "深度学习/UNet医学图片分割/unet.html",
    "revision": "6632cd2f30cc6165877e3a85259d214f"
  },
  {
    "url": "深度学习/人脸口罩检测与规范佩戴识别/mask.html",
    "revision": "ceb49e82159702b00e4c6836579a8d93"
  },
  {
    "url": "深度学习/人脸考勤机/face.html",
    "revision": "21ba80e2b9e37781982124562a8b8d93"
  },
  {
    "url": "深度学习/草地分割/grass.html",
    "revision": "094be0a26ac3354ecc0c2a8f76b1c0c9"
  },
  {
    "url": "深度学习/车辆统计/cars.html",
    "revision": "289b1fe10a04d1706f33d8b851ffa24b"
  },
  {
    "url": "深度学习/金属孔洞缺陷检测/hole.html",
    "revision": "295a313832bb8e49a14ea9916274a531"
  },
  {
    "url": "算法/algorithm.html",
    "revision": "abfa8e0adb995f171f6ea809cfb390fb"
  },
  {
    "url": "英语/English.html",
    "revision": "c6d2c0ba315c667f2b78635c75a60039"
  },
  {
    "url": "英语/ielts.html",
    "revision": "2e07b959d9ff9f05f1a7dc2c01ffa37a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

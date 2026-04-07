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
    "revision": "9ebe0930cae38239318c18e8d67dfbb4"
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
    "url": "assets/js/10.7d1ea9c4.js",
    "revision": "6ed071847588e8aca3ddee0fda5041de"
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
    "url": "assets/js/14.5a14bb6e.js",
    "revision": "8744c4ad5792f78bec5e2373c99ab29c"
  },
  {
    "url": "assets/js/15.1c2dff78.js",
    "revision": "c72253e1740eff1b729b91b6dcf3e9c8"
  },
  {
    "url": "assets/js/16.b6bed031.js",
    "revision": "c712aea8c87ee06357866e9430f2e2cc"
  },
  {
    "url": "assets/js/17.cee37c80.js",
    "revision": "157fcc1b24bd6e16f6fc65f134806df2"
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
    "url": "assets/js/20.52472f84.js",
    "revision": "883043cdfe2e1ef7e88cf07ae4c75d89"
  },
  {
    "url": "assets/js/21.b4748920.js",
    "revision": "cac48ced69d2284d338d155ba6fa6be8"
  },
  {
    "url": "assets/js/22.b0304137.js",
    "revision": "f7b86c3031fc25f97ff8b2cbab90e882"
  },
  {
    "url": "assets/js/23.881d767c.js",
    "revision": "61c97628ab22143c1e94049edc53d582"
  },
  {
    "url": "assets/js/24.b876d1a7.js",
    "revision": "42442af004da71e8f226b45cfd8ee657"
  },
  {
    "url": "assets/js/25.3d87597e.js",
    "revision": "016b6682702fb1405d24278f1760a7c8"
  },
  {
    "url": "assets/js/26.88d61251.js",
    "revision": "5fe1aac64d9b69a6acf2ca987a9bc76b"
  },
  {
    "url": "assets/js/27.cd555bc9.js",
    "revision": "ff22ff4e38f50ae45d6ad8ef6c881da1"
  },
  {
    "url": "assets/js/28.e520edd2.js",
    "revision": "1d9f43c0db446d851c466104b91e5a3d"
  },
  {
    "url": "assets/js/29.973ac70f.js",
    "revision": "e10d3db27cd9031016eb1cd8d56a0687"
  },
  {
    "url": "assets/js/30.b0f922a4.js",
    "revision": "d9fbe3873141a79b351a589ffaf330dd"
  },
  {
    "url": "assets/js/31.d5e9b587.js",
    "revision": "613d8782611c6f6b566a178f3b100dc0"
  },
  {
    "url": "assets/js/32.ad87eda3.js",
    "revision": "b2b725c3f9c9d006e21d7c6706a6423e"
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
    "url": "assets/js/app.5f6f0107.js",
    "revision": "cce536a9a59bbcd486332d6a444c0204"
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
    "revision": "64cf865d6df68c553113d515425f12a8"
  },
  {
    "url": "categories/index.html",
    "revision": "32ae9be35f67b22e70bde6692a6cda5a"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "59a8039bbecc50830d47eebbf8c59e3e"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "46a9d40ebb57112f671bdc82c9bd34ec"
  },
  {
    "url": "categories/Mysql/index.html",
    "revision": "fb39dcbc781e71cb15866b3fb61affe8"
  },
  {
    "url": "categories/Nginx/index.html",
    "revision": "07d8acd4914a7a6f066f500df9c2b2db"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "4af5ca59453c1794eeefed4077d30b9b"
  },
  {
    "url": "categories/深度学习/index.html",
    "revision": "4e1246326ec9ea846c089ab42267bd74"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "4f4c4deef1fe04b2724a6a0289f0a44d"
  },
  {
    "url": "categories/英语/index.html",
    "revision": "c6a5600c736521f645d44a356191ef7a"
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
    "revision": "5a29dbb78d64806ea87c51dfec31b7f2"
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
    "revision": "6f5cd6201cf74112cfae750b14cd932d"
  },
  {
    "url": "tags/cars/index.html",
    "revision": "86b96d31db9a98e1d2b4ad5f80d37e18"
  },
  {
    "url": "tags/grass/index.html",
    "revision": "c0af1becb2bee663eec753ab937cc598"
  },
  {
    "url": "tags/hog_face_detector/index.html",
    "revision": "045a473f72160a361291b9a928590525"
  },
  {
    "url": "tags/html/index.html",
    "revision": "e0cd81ef241c778f7249e00beb7dd5f1"
  },
  {
    "url": "tags/https/index.html",
    "revision": "99437dc15f61928c4247ab4535f05c1d"
  },
  {
    "url": "tags/Linux/index.html",
    "revision": "06fc341dcf6cb69ccf83f54b933d0105"
  },
  {
    "url": "tags/mask_detector/index.html",
    "revision": "b789fc05a8667b6d8646e4d18b86ebae"
  },
  {
    "url": "tags/metal_hole/index.html",
    "revision": "92615a4129e7f27d1663680e9a4d6a94"
  },
  {
    "url": "tags/Mysql/index.html",
    "revision": "5b0c3a6217e7b42c8dde97e9f62340df"
  },
  {
    "url": "tags/Nginx/index.html",
    "revision": "6b35fa10e4342a4b9ac6f471c5d5151e"
  },
  {
    "url": "tags/printer/index.html",
    "revision": "86115890be02bf2f107fef9c89b17775"
  },
  {
    "url": "tags/react/index.html",
    "revision": "e94ea1eb0a233544644024108170c74f"
  },
  {
    "url": "tags/spring/index.html",
    "revision": "b15aafacbc009fc9c21804dfad7f794f"
  },
  {
    "url": "tags/vue3/index.html",
    "revision": "b6d0d3bf7004699949e7f318613b0602"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "c5b1c2b9d4b57dc90a5eb04d43e841dd"
  },
  {
    "url": "tags/英语/index.html",
    "revision": "891e3d2f41f69ad277046a5cc766f93e"
  },
  {
    "url": "timeline/index.html",
    "revision": "8525de3bf0c632ed0dcfd0625336d8a2"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/java/spring.html",
    "revision": "3718676fda82d603b91bd8fbbba1fa42"
  },
  {
    "url": "技术文章/java/thread.html",
    "revision": "edf781199fba80ed9be0291c4946c86f"
  },
  {
    "url": "技术文章/Linux/Linux.html",
    "revision": "b2b2bd731e74caa83b02ccaf7749840a"
  },
  {
    "url": "技术文章/Mysql/Mysql.html",
    "revision": "af6505fec1bf4274c2460ae51f025630"
  },
  {
    "url": "技术文章/Nginx/Nginx.html",
    "revision": "c67f108521ad09685af1751cf16f1f91"
  },
  {
    "url": "技术文章/Nginx/Nginx与https.html",
    "revision": "c0422d333afde3f9fbc3b4ee485cd6e0"
  },
  {
    "url": "技术文章/前端/html.html",
    "revision": "78234bd3b21a816f9b9417e95753904d"
  },
  {
    "url": "技术文章/前端/react.html",
    "revision": "da3eba44fd614c8c2cb644d9ba3639e4"
  },
  {
    "url": "技术文章/前端/vue3.html",
    "revision": "aca0302aa18d65db5672598282cd5e0a"
  },
  {
    "url": "深度学习/3D打印机裹头/printer.html",
    "revision": "8ccd433332bf4932e23f3060d3e5525d"
  },
  {
    "url": "深度学习/index.html",
    "revision": "44ede5b8ceca3b2c23183e5bd0d7d515"
  },
  {
    "url": "深度学习/UNet医学图片分割/unet.html",
    "revision": "e76ff1841f3e8510bf1be8fdd6d98800"
  },
  {
    "url": "深度学习/人脸口罩检测与规范佩戴识别/mask.html",
    "revision": "fc3e315515ab68d57bb22e411125a497"
  },
  {
    "url": "深度学习/人脸考勤机/face.html",
    "revision": "f0a00714d20d691c23d79363a5f2ce05"
  },
  {
    "url": "深度学习/草地分割/grass.html",
    "revision": "ece4204bb75211905b48988d990c9440"
  },
  {
    "url": "深度学习/车辆统计/cars.html",
    "revision": "03081e6a92dda21fd522631251ac6c89"
  },
  {
    "url": "深度学习/金属孔洞缺陷检测/hole.html",
    "revision": "6aaca56aa5607a80688b9efd52c62cd7"
  },
  {
    "url": "算法/algorithm.html",
    "revision": "dbca1620f957e71a174ab07085c19939"
  },
  {
    "url": "英语/English.html",
    "revision": "256cbbd7cc516140869edb57036c9d0f"
  },
  {
    "url": "英语/ielts.html",
    "revision": "b09dd1ecea1601a6ab8bea127f20e3e0"
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

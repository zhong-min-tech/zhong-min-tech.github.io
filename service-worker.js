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
    "revision": "f4be58293761632753fdd9a7a8791074"
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
    "url": "assets/img/agent.979d6fd7.png",
    "revision": "979d6fd77429fefb7fa57e7d0d0a97aa"
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
    "url": "assets/img/prompt.e36fe7c6.png",
    "revision": "e36fe7c6dd530894499ff0e4e4603bbd"
  },
  {
    "url": "assets/img/rag.49981d44.png",
    "revision": "49981d441c69897a22e74c966b49ea99"
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
    "url": "assets/js/10.cf1c7e16.js",
    "revision": "b57d66766ec4f72915b16e1e283ae617"
  },
  {
    "url": "assets/js/11.c6130769.js",
    "revision": "a196ca098b88e4f4d04df48a5c663970"
  },
  {
    "url": "assets/js/12.715a81e2.js",
    "revision": "33c501ea3f4ba4a9212b6210cf0c15ba"
  },
  {
    "url": "assets/js/13.16d54092.js",
    "revision": "e52024ab0bff5a5a8be6489f57127ede"
  },
  {
    "url": "assets/js/14.dd91163d.js",
    "revision": "476eca691f2972821bcacd61e92d404a"
  },
  {
    "url": "assets/js/15.6201c1a6.js",
    "revision": "2a166d6a75a53748c3df488099976130"
  },
  {
    "url": "assets/js/16.ba4feadd.js",
    "revision": "168c6c1ddd0b8c416c8504caff414b6e"
  },
  {
    "url": "assets/js/17.4ad98c47.js",
    "revision": "1d0f57fa8983f33b119de77d4add70db"
  },
  {
    "url": "assets/js/18.a7c99f90.js",
    "revision": "b2dba138c384b394185dd052655afb54"
  },
  {
    "url": "assets/js/19.ad391863.js",
    "revision": "8e854ad7ce0a43250cb5687a9e06f9e4"
  },
  {
    "url": "assets/js/20.901160db.js",
    "revision": "f15cb205ad9c88a5b0988a01a5e3b648"
  },
  {
    "url": "assets/js/21.633791da.js",
    "revision": "a9c666d8bf9dd21b143b60a847da8856"
  },
  {
    "url": "assets/js/22.efdc1559.js",
    "revision": "55cc45aa6a9904f9b896104f9293a8f7"
  },
  {
    "url": "assets/js/23.c544daef.js",
    "revision": "866bea6defe80e1104cddc6e24efe05c"
  },
  {
    "url": "assets/js/24.906e6cbb.js",
    "revision": "4bfa56c6669db6e2a4afa6eea8677b48"
  },
  {
    "url": "assets/js/25.bff16dff.js",
    "revision": "7bbd706fa3256804f2809a21d0a0693d"
  },
  {
    "url": "assets/js/26.ca272308.js",
    "revision": "a670c79fd118de58e3b7656d0cfac0b8"
  },
  {
    "url": "assets/js/27.7180c784.js",
    "revision": "bd2edfb6d860bbcf43de7a459f6bc018"
  },
  {
    "url": "assets/js/28.ef106863.js",
    "revision": "05e3a1e035442c3ec5c738bd2e9b3642"
  },
  {
    "url": "assets/js/29.0f9d0e0a.js",
    "revision": "5ecc9bf92101cf87bd11dad4533d7884"
  },
  {
    "url": "assets/js/30.c85ea97e.js",
    "revision": "c5edd18b6b612663aaad27fc9875201e"
  },
  {
    "url": "assets/js/31.6584a364.js",
    "revision": "547b3a038e422793214e781fd0c1bc1b"
  },
  {
    "url": "assets/js/32.34ab8819.js",
    "revision": "1c9591f077d60ca3c93bb5f46d3cba09"
  },
  {
    "url": "assets/js/33.0750860e.js",
    "revision": "d54dd5d1c32453774b9b7334888b91f5"
  },
  {
    "url": "assets/js/4.9d120ded.js",
    "revision": "bbbf68f3433f969990c52aedcb660c93"
  },
  {
    "url": "assets/js/5.52d6a857.js",
    "revision": "f62851a14aa5218a0960caa4d361dd92"
  },
  {
    "url": "assets/js/6.287e32ef.js",
    "revision": "2a76311190ff0f659484676bb54e1930"
  },
  {
    "url": "assets/js/7.87d8cf6d.js",
    "revision": "f2fd62408bce4e96aa72ad731f70992f"
  },
  {
    "url": "assets/js/8.bf9dda1e.js",
    "revision": "c75ec11f1a7feef6b62730e5d791791f"
  },
  {
    "url": "assets/js/9.a452f9d4.js",
    "revision": "da81072c6d36067e9bbee4d701d922be"
  },
  {
    "url": "assets/js/app.6d5a4445.js",
    "revision": "7173367651a53c5afe152c59279e18a7"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.2b306b85.js",
    "revision": "585cd89214c9edeb7507e06b61f27395"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/https/index.html",
    "revision": "73e30891cc7ca96e90237b50bbae117d"
  },
  {
    "url": "categories/index.html",
    "revision": "3eba0a1c42eb8554997f84dbcb6e0d84"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "d7e4a00443e478b2ed9e0b60f10f8bbf"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "4c3eeb0d6c45452c7e363f13151dc5b9"
  },
  {
    "url": "categories/Mysql/index.html",
    "revision": "b6a6a1294652c5da28b3fc7038074063"
  },
  {
    "url": "categories/Nginx/index.html",
    "revision": "750dbb69d1967f951ca029083eb49140"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "64e7d4c7dde31bcb3b20ee97154f5f33"
  },
  {
    "url": "categories/深度学习/index.html",
    "revision": "f6986a77ba67a0d2644e302e4aabea90"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "edc478ebc10f6902751f26563f585d7e"
  },
  {
    "url": "categories/英语/index.html",
    "revision": "763299d36be1f8316fecde049699894a"
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
    "revision": "ec36148972e16858ce54d82e9967a8e1"
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
    "revision": "5d68a5a0c9b0ad1582e3fc8215fdfe20"
  },
  {
    "url": "tags/cars/index.html",
    "revision": "3881f6adcaf007afcf853d8e36b3c6c8"
  },
  {
    "url": "tags/grass/index.html",
    "revision": "82662acf2177f560b3a024a2fccdf63d"
  },
  {
    "url": "tags/hog_face_detector/index.html",
    "revision": "66103936fb3cdc1f7a6125a69a4d6cd7"
  },
  {
    "url": "tags/html/index.html",
    "revision": "0c365335c9b09f24ffc80acc027df709"
  },
  {
    "url": "tags/https/index.html",
    "revision": "422b52accaf43b975d58cff4aebf47fa"
  },
  {
    "url": "tags/Linux/index.html",
    "revision": "ce8e3240c2207a919bebbb612a9fceab"
  },
  {
    "url": "tags/mask_detector/index.html",
    "revision": "3da581b0e94a962e7b12c54ac9631043"
  },
  {
    "url": "tags/metal_hole/index.html",
    "revision": "be32748e880c1e0435311334fb671f6e"
  },
  {
    "url": "tags/Mysql/index.html",
    "revision": "ffa0b783e58d961823bbece3ccb7f720"
  },
  {
    "url": "tags/Nginx/index.html",
    "revision": "e832ca07b069764f0b1f49474d7f4526"
  },
  {
    "url": "tags/printer/index.html",
    "revision": "8f83de43f238bc4075f53f119fab6488"
  },
  {
    "url": "tags/react/index.html",
    "revision": "5b148da8b01ae8ff796cc452462b72ae"
  },
  {
    "url": "tags/spring/index.html",
    "revision": "2ae1fe205023aaa06d9992d9f4b3aad8"
  },
  {
    "url": "tags/vue3/index.html",
    "revision": "0971e1e33e8d0f53c1c0a94b358ae221"
  },
  {
    "url": "tags/大模型/index.html",
    "revision": "5fe72e0d7132ec63878fc4291df2fc1e"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "8c0eac9a0cd1b64660f2195e3b013e01"
  },
  {
    "url": "tags/英语/index.html",
    "revision": "004a71e8815e0df227c7b1400e4fc861"
  },
  {
    "url": "timeline/index.html",
    "revision": "132e9d59704f0fcbb966612e111dd22b"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/java/spring.html",
    "revision": "41c1411241c7cf7b5f99dda7291ca243"
  },
  {
    "url": "技术文章/java/thread.html",
    "revision": "772c8d7cd6096dfeb77e4eb305584d20"
  },
  {
    "url": "技术文章/Linux/Linux.html",
    "revision": "ca509c642d7c2af4a363845ae2efc3e9"
  },
  {
    "url": "技术文章/Mysql/Mysql.html",
    "revision": "c2eb9e13997c5af2e458a6e68a528bfc"
  },
  {
    "url": "技术文章/Nginx/Nginx.html",
    "revision": "55a39625666d394bf1e416d28ba3537e"
  },
  {
    "url": "技术文章/Nginx/Nginx与https.html",
    "revision": "bc5c73def6e51e2be16a8dd393ddd9e2"
  },
  {
    "url": "技术文章/前端/html.html",
    "revision": "a211d1e5a39033e41e7ebe2e4a16418b"
  },
  {
    "url": "技术文章/前端/react.html",
    "revision": "eb237322c194d4323a4c294ba83dd1e2"
  },
  {
    "url": "技术文章/前端/vue3.html",
    "revision": "809e97acaba9350f5e9a8fae6c572694"
  },
  {
    "url": "深度学习/3D打印机裹头/printer.html",
    "revision": "6053b3874e49bbb21add80d38814bb76"
  },
  {
    "url": "深度学习/index.html",
    "revision": "8a973d56a8b9452b525cf99e84216b55"
  },
  {
    "url": "深度学习/UNet医学图片分割/unet.html",
    "revision": "8a8da537115f99d78711b7b82dded530"
  },
  {
    "url": "深度学习/人脸口罩检测与规范佩戴识别/mask.html",
    "revision": "c7bb514a1062808b8f4cf67a98dc004e"
  },
  {
    "url": "深度学习/人脸考勤机/face.html",
    "revision": "a57b4a56bf149f7106e8abed475683ac"
  },
  {
    "url": "深度学习/大模型/rag.html",
    "revision": "c8c37dceb47e99a6966af7cd271c9465"
  },
  {
    "url": "深度学习/草地分割/grass.html",
    "revision": "0989abae43a00c68a755999222f90ca5"
  },
  {
    "url": "深度学习/车辆统计/cars.html",
    "revision": "19ff277e7ff968fa943a1bf4acf56fd0"
  },
  {
    "url": "深度学习/金属孔洞缺陷检测/hole.html",
    "revision": "97c8d8cf40e4e2eb84c17ad1e9dc8a58"
  },
  {
    "url": "算法/algorithm.html",
    "revision": "d9366de94dc9eb33c454ae0974c9b0b4"
  },
  {
    "url": "英语/English.html",
    "revision": "81e41bbd3dc9e910cb6f0a3c0f35d87a"
  },
  {
    "url": "英语/ielts.html",
    "revision": "d525c407b7a505bc509e41d7bba638f8"
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

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
    "revision": "4221c012da33dddcc474db12edd8b583"
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
    "url": "assets/img/chunk.3afa5587.png",
    "revision": "3afa55870d684eb30ced24aedf297886"
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
    "url": "assets/img/memory.c0863d97.png",
    "revision": "c0863d976151c4eb8317b1da9f5f8fa8"
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
    "url": "assets/js/10.c6bc9ef4.js",
    "revision": "6c0860b11edb485bd2c8fdcd09cdee97"
  },
  {
    "url": "assets/js/11.d5b8ae8c.js",
    "revision": "7b4ecb6c305be12df587b1bcf39d0c3b"
  },
  {
    "url": "assets/js/12.dade8e0f.js",
    "revision": "63433a79b4e82efb979c0e2d5644760e"
  },
  {
    "url": "assets/js/13.982cd56e.js",
    "revision": "5d4c1d112080def14a4aeb097f9bda78"
  },
  {
    "url": "assets/js/14.91f7c0e4.js",
    "revision": "153e2215564e169bcbe71d0fb1dcb6e5"
  },
  {
    "url": "assets/js/15.b255ed63.js",
    "revision": "f9534293705cee43ef83ea164ebb82e2"
  },
  {
    "url": "assets/js/16.dbdfcdf2.js",
    "revision": "a218bae9f6eed15cebc080a8f6a75264"
  },
  {
    "url": "assets/js/17.7961d958.js",
    "revision": "0c9a07d25bba18ccf1d809da84e6ba54"
  },
  {
    "url": "assets/js/18.add197de.js",
    "revision": "47093dd89639feb92d614ad32559a6b0"
  },
  {
    "url": "assets/js/19.cd76b32b.js",
    "revision": "58dbf9a34e868e5e36c70c26746209f8"
  },
  {
    "url": "assets/js/20.003ad203.js",
    "revision": "7a7476afccfca0c42ef0f0c8d6dc9160"
  },
  {
    "url": "assets/js/21.59d69af9.js",
    "revision": "a5e897e8f61c577fbecd52e2a3def8a6"
  },
  {
    "url": "assets/js/22.497da01e.js",
    "revision": "21aca23c6d2e3ebdea778fc391f88bab"
  },
  {
    "url": "assets/js/23.e3d45070.js",
    "revision": "266c66ac9022e8022a8e381d80460ee6"
  },
  {
    "url": "assets/js/24.e8bae2e7.js",
    "revision": "82000533a9f2e0305682b57c4c75d6ba"
  },
  {
    "url": "assets/js/25.03ce9163.js",
    "revision": "db3713a39a5a0a55e58cc108b9db31a1"
  },
  {
    "url": "assets/js/26.b5b758c1.js",
    "revision": "26e8b02a0652e3fb20034a1d86c4e359"
  },
  {
    "url": "assets/js/27.7180c784.js",
    "revision": "bd2edfb6d860bbcf43de7a459f6bc018"
  },
  {
    "url": "assets/js/28.931fa833.js",
    "revision": "979f3edea945ebdf8dce36e9efb1d2a5"
  },
  {
    "url": "assets/js/29.b3066624.js",
    "revision": "95c56d9aa56e0674f4047c2703ca5447"
  },
  {
    "url": "assets/js/30.207612f0.js",
    "revision": "d43a2c6e00dec6b402bd0cd5430d7e67"
  },
  {
    "url": "assets/js/31.213d8053.js",
    "revision": "9b6c703d76b7fc70299310875f69ab8c"
  },
  {
    "url": "assets/js/32.f8b342ba.js",
    "revision": "93ca3864b623d29911237bd8be2ead8c"
  },
  {
    "url": "assets/js/33.0750860e.js",
    "revision": "d54dd5d1c32453774b9b7334888b91f5"
  },
  {
    "url": "assets/js/4.5891cf4b.js",
    "revision": "6d63c0bf0ec5d9dd25cd2819f5d5ccdf"
  },
  {
    "url": "assets/js/5.32588274.js",
    "revision": "d0fcf23f3fb750cba36e1a1b7b6fae83"
  },
  {
    "url": "assets/js/6.53dee200.js",
    "revision": "1f6bf59a7070b221369aa942c397402a"
  },
  {
    "url": "assets/js/7.e26bee65.js",
    "revision": "9c00ce563cb2b41138bdd53170a28977"
  },
  {
    "url": "assets/js/8.1d4b3451.js",
    "revision": "fefed77175f34db3d4f706f6acd3e1fc"
  },
  {
    "url": "assets/js/9.068e6a57.js",
    "revision": "9476f1732f86e70254aea825b45bfc52"
  },
  {
    "url": "assets/js/app.34b6ca61.js",
    "revision": "96dcd36088c2a292cd160142ee13dac3"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.9805bf0e.js",
    "revision": "1eb7c9dd2002aef81e94a30f5e2d0df2"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/https/index.html",
    "revision": "bca7f9fa608e95571ce271f5a21455ef"
  },
  {
    "url": "categories/index.html",
    "revision": "952f678609be0571669dcefa1197a22f"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "249d7387730039783b203809cc380e05"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "4d46ddc80779a0007e6ccf78825790b0"
  },
  {
    "url": "categories/Mysql/index.html",
    "revision": "d0d66344dc937ef3b7f15570da8055a7"
  },
  {
    "url": "categories/Nginx/index.html",
    "revision": "487dd63b7132e36228e6d6d17f261230"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "48b1d055a57b0fce58396f608c97de59"
  },
  {
    "url": "categories/深度学习/index.html",
    "revision": "74b5f590487ff8641b32c457adcf7c5c"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "713d392156b3c3bbb5f3bc7a8b967665"
  },
  {
    "url": "categories/英语/index.html",
    "revision": "2244ae520a1148cb12d3d8aff6d65729"
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
    "revision": "2d9e585b4650c41cab8465cc89122c84"
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
    "revision": "961f32a8f4d30b9f13831f3c93db404c"
  },
  {
    "url": "tags/cars/index.html",
    "revision": "e5b3f22d3892d8613b55302892688e69"
  },
  {
    "url": "tags/grass/index.html",
    "revision": "35555ff9b15c4155ed518b1cc70089e9"
  },
  {
    "url": "tags/hog_face_detector/index.html",
    "revision": "b73c1996c377227a16ff6633ce077656"
  },
  {
    "url": "tags/html/index.html",
    "revision": "0be7270704324a30ce562f31f8dee6bd"
  },
  {
    "url": "tags/https/index.html",
    "revision": "a299b2050bdfc2ab3d78a911a4cf2297"
  },
  {
    "url": "tags/Linux/index.html",
    "revision": "9f20650fd0656ffefa14eafb26ebf0c5"
  },
  {
    "url": "tags/mask_detector/index.html",
    "revision": "980b7830f252d0de8bbd4aaac2cb08b0"
  },
  {
    "url": "tags/metal_hole/index.html",
    "revision": "de8665ad1bb2c281c72156c6dc01b954"
  },
  {
    "url": "tags/Mysql/index.html",
    "revision": "eeca64e75f65308ddaa50855e60b9b41"
  },
  {
    "url": "tags/Nginx/index.html",
    "revision": "59dae13c4552d251145dd2f49ef12cce"
  },
  {
    "url": "tags/printer/index.html",
    "revision": "c6f249c7effedc80393226a50f12c259"
  },
  {
    "url": "tags/react/index.html",
    "revision": "8ef33ac98010ebeb241eacc07e2aefef"
  },
  {
    "url": "tags/spring/index.html",
    "revision": "f39b8dcdc04c516c643dfbd352f297f8"
  },
  {
    "url": "tags/vue3/index.html",
    "revision": "ce69e89081e767a5673f48b2f64cfd75"
  },
  {
    "url": "tags/大模型/index.html",
    "revision": "c7d975593f7fa99263117f7990f373f3"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "76d8a9658f6bc82b07f5aa7fef3c7607"
  },
  {
    "url": "tags/英语/index.html",
    "revision": "cb36ca05124372d2ea8a06d55f84fe6e"
  },
  {
    "url": "timeline/index.html",
    "revision": "48e75b079981144c18f0f310292056cd"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/java/spring.html",
    "revision": "681bc9626157b834de66d43ec3f2e55d"
  },
  {
    "url": "技术文章/java/thread.html",
    "revision": "c695ec921ef808ad59b73df123fd232b"
  },
  {
    "url": "技术文章/Linux/Linux.html",
    "revision": "1c6d33eb29bd28ac93c9d0ca888fe989"
  },
  {
    "url": "技术文章/Mysql/Mysql.html",
    "revision": "2f9a1007140a3651050d484b52cf40b0"
  },
  {
    "url": "技术文章/Nginx/Nginx.html",
    "revision": "c541abfb5f04eca6334890aba4fa60dc"
  },
  {
    "url": "技术文章/Nginx/Nginx与https.html",
    "revision": "1793e3c0f7c7544e75b6f83fecc0b1e8"
  },
  {
    "url": "技术文章/前端/html.html",
    "revision": "261a4a9b4ceffe27cf7f0d00ad5353b6"
  },
  {
    "url": "技术文章/前端/react.html",
    "revision": "5cad30c00e0455af207e425c0713a388"
  },
  {
    "url": "技术文章/前端/vue3.html",
    "revision": "1814ad1fab17147af6949464e74d224e"
  },
  {
    "url": "深度学习/3D打印机裹头/printer.html",
    "revision": "955b570526a1d2b714de1b5fec3fea5a"
  },
  {
    "url": "深度学习/index.html",
    "revision": "886805699b497d4342469c34f263e64f"
  },
  {
    "url": "深度学习/UNet医学图片分割/unet.html",
    "revision": "d6f8e13b2cc0277d991c6fedc012517e"
  },
  {
    "url": "深度学习/人脸口罩检测与规范佩戴识别/mask.html",
    "revision": "51a0d4bdf8ecdb82d4efeea811bdada2"
  },
  {
    "url": "深度学习/人脸考勤机/face.html",
    "revision": "be9fbb34c828fde053061792617ea9c0"
  },
  {
    "url": "深度学习/大模型/rag.html",
    "revision": "4a11378f2b1d51b283bc4f7b763fd175"
  },
  {
    "url": "深度学习/草地分割/grass.html",
    "revision": "cf356cb34ad223c5100c974ad9d3dbde"
  },
  {
    "url": "深度学习/车辆统计/cars.html",
    "revision": "9cd81c0c75be9b52e187074b37ff63aa"
  },
  {
    "url": "深度学习/金属孔洞缺陷检测/hole.html",
    "revision": "1f4dce01f86cd03ca5f5ead644ab3a2d"
  },
  {
    "url": "算法/algorithm.html",
    "revision": "ebc48a2cf9d758bc248fd9b8c03b5407"
  },
  {
    "url": "英语/English.html",
    "revision": "5fb4055e8dc5d9c76eb4fc096296659d"
  },
  {
    "url": "英语/ielts.html",
    "revision": "7258cd7454760cc581b755c33eadd627"
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

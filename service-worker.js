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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2018/blog-setup/index.html",
    "revision": "cc8a0b596c2aade6b350086575f42829"
  },
  {
    "url": "404.html",
    "revision": "6d04360db85439034d76f1f9a9b858f3"
  },
  {
    "url": "about/index.html",
    "revision": "da23114d1e63c0f0172d1626cdf4bec7"
  },
  {
    "url": "assets/css/0.styles.3e6bfe29.css",
    "revision": "f5a3e671ab00171911b3599acb9dfb8c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.5ea3b1e9.js",
    "revision": "fae469df0726361fe833026fbdd8f9e6"
  },
  {
    "url": "assets/js/10.1979f4d2.js",
    "revision": "683881b2860476958822a760eb4703f3"
  },
  {
    "url": "assets/js/11.75266b31.js",
    "revision": "68b34d21d83f1157567dc4c6f8f61198"
  },
  {
    "url": "assets/js/12.27f5f33d.js",
    "revision": "f1ccaf0a3d15ae0bce2ff984df0cdaa3"
  },
  {
    "url": "assets/js/13.8f2c8bbe.js",
    "revision": "37d775331a2899d58e8cd15a6688c014"
  },
  {
    "url": "assets/js/14.e5780dd9.js",
    "revision": "569c07775823fa0344ead64b2bb774be"
  },
  {
    "url": "assets/js/15.eaa2020c.js",
    "revision": "adea04ddbff8f6ae6eeee2a5f4962fc1"
  },
  {
    "url": "assets/js/16.2a608f08.js",
    "revision": "f43141c3665559533fa75360f64f46e3"
  },
  {
    "url": "assets/js/17.83419287.js",
    "revision": "d1df3938e72968a411ad1a4434727124"
  },
  {
    "url": "assets/js/18.34bbb35f.js",
    "revision": "d2ca8547f59fd6f1edfd14e90d96e650"
  },
  {
    "url": "assets/js/19.7efcd96d.js",
    "revision": "480eb1dc619f13d1234c3d16eb6142a8"
  },
  {
    "url": "assets/js/2.b2a107e4.js",
    "revision": "3d18c5f4f2faa8f9a069df25b481b0d3"
  },
  {
    "url": "assets/js/20.264f3b4a.js",
    "revision": "f832d3b0f466d2f61665b4e5796cc680"
  },
  {
    "url": "assets/js/21.4b554ce7.js",
    "revision": "e319864f91ec76ef044e62c603bf6e49"
  },
  {
    "url": "assets/js/22.cc3fc4f6.js",
    "revision": "c23f7a1849c690a1b518f94897508c69"
  },
  {
    "url": "assets/js/23.351efcb0.js",
    "revision": "53b48dc6d95bf1991b09dc58b0b76d1b"
  },
  {
    "url": "assets/js/24.43d8a1d4.js",
    "revision": "41d21f73ea873ec355e0e5d5c461c7aa"
  },
  {
    "url": "assets/js/25.f16e6d84.js",
    "revision": "fa0302eff224cd17ed625baf84d1408c"
  },
  {
    "url": "assets/js/26.18f64f62.js",
    "revision": "de67aae4c33fa3ad83c2b397a86442f0"
  },
  {
    "url": "assets/js/27.54adfc4a.js",
    "revision": "8a47651e2a2fe23bff330614946a9c85"
  },
  {
    "url": "assets/js/28.7c2ae1c6.js",
    "revision": "70f4309fb2a20e6e9cace1ae23730bce"
  },
  {
    "url": "assets/js/29.67f71ca4.js",
    "revision": "af862544fce7a7817cfa4dc53d5524ee"
  },
  {
    "url": "assets/js/3.7491e633.js",
    "revision": "4cb714f01e245cf5274355319e9aa337"
  },
  {
    "url": "assets/js/30.0ce4649b.js",
    "revision": "eed7b90bc2da292203317f10e65de675"
  },
  {
    "url": "assets/js/31.aa9eebbe.js",
    "revision": "a0ef5ef4170ee8bfa7f1f55d4b03c8f5"
  },
  {
    "url": "assets/js/32.c5bf4e6a.js",
    "revision": "549c0ce2e769b19b0ab83dd58f28ab85"
  },
  {
    "url": "assets/js/33.0bc11ab4.js",
    "revision": "19eb111b1f26b079fbc291114885d516"
  },
  {
    "url": "assets/js/34.538c6300.js",
    "revision": "89e18b0a6d66edebf9e2e5e441754407"
  },
  {
    "url": "assets/js/35.6d174556.js",
    "revision": "5b057f4f7b8bc2a52e7461034d889106"
  },
  {
    "url": "assets/js/36.e4b89350.js",
    "revision": "0ed03f98888756abe10d4effda412658"
  },
  {
    "url": "assets/js/5.d5b5135a.js",
    "revision": "fc3c23d953c61e208d31b049a915c4f7"
  },
  {
    "url": "assets/js/6.b006b8e4.js",
    "revision": "226e231fa54301d88b9b65b9f417ff96"
  },
  {
    "url": "assets/js/7.e79c4ce7.js",
    "revision": "7e5a1f0e1d4670e470e38aa61c2d37bf"
  },
  {
    "url": "assets/js/8.4e820555.js",
    "revision": "69c63a712ea34a836aa3168404b89ca7"
  },
  {
    "url": "assets/js/9.2767388a.js",
    "revision": "9b848b3b456186bb3f972a8fe0bf811c"
  },
  {
    "url": "assets/js/app.83e8a0cf.js",
    "revision": "f6ae837e3ee895a8beba0af8a32d9b0d"
  },
  {
    "url": "blog-setup/diagram-2.svg",
    "revision": "c40377e68cfdc6917befed903974a1b0"
  },
  {
    "url": "blog-setup/diagram-mobile.svg",
    "revision": "7391b4503450c565b071419fbf16bc6d"
  },
  {
    "url": "blog-setup/diagram.svg",
    "revision": "aa1134a88e5f8aac468b136cab518046"
  },
  {
    "url": "books/index.html",
    "revision": "87ec9496be0c42633856a5491c02bf15"
  },
  {
    "url": "category/index.html",
    "revision": "dcd8cf3b70425408263938d1095ad81e"
  },
  {
    "url": "drafts/xor-toy-problem.html",
    "revision": "28a89816acb9f915ea0479a378687ccf"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "a7b144d72e3fc8c533e44a8c21566e9d"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "f1d2a4e41b3bf855e10f6c1d3a0a8544"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "b145c054059e7d011a12ad8d111aa248"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "61aaae90316a095481198eef53cbed19"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "3419d1d0d66f3e9898eaae5f5f2a8f95"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "bab59c468c7810dafb7c5d5f4f16ba9c"
  },
  {
    "url": "index.html",
    "revision": "4f948101a494a1797f808e751778971f"
  },
  {
    "url": "tag/index.html",
    "revision": "03efd798a5ea7467f8c7a4d3103dc2a6"
  },
  {
    "url": "tag/meta.html",
    "revision": "c32432d4a5feb8a91b4cc81563cdbeac"
  },
  {
    "url": "tag/vue.html",
    "revision": "1db0ddc9adff00a5382e1612719edbef"
  },
  {
    "url": "zh/about/index.html",
    "revision": "3e7269ec3c3a0bae1f1f34f7861e20af"
  },
  {
    "url": "zh/books/index.html",
    "revision": "8e6d256effde4e8b45d534c7b7ea8486"
  },
  {
    "url": "zh/index.html",
    "revision": "e3f94999aa8f881c67c97e2c47a85319"
  },
  {
    "url": "zh/post/blog-setup.html",
    "revision": "2323c732ce2c8376828695fd556d1827"
  },
  {
    "url": "zh/post/index.html",
    "revision": "d8ee58e7529003d60845f5cd43c27ff1"
  },
  {
    "url": "zh/post/xor-toy-problem.html",
    "revision": "f522298cb1fbca592c2d147374fd2cb9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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

"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[75100],{666910:(A,e,n)=>{n.r(e),n.d(e,{data:()=>a});const a=JSON.parse('{"key":"v-2c7cd923","path":"/guide/getting-started/","title":"Getting started","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebarDepth":1,"next":"../usage/"},"excerpt":"","headers":[{"level":2,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[{"level":3,"title":"1.) Find the Zigbee-Adapter","slug":"_1-find-the-zigbee-adapter","link":"#_1-find-the-zigbee-adapter","children":[]},{"level":3,"title":"2.) Setup and start Zigbee2MQTT","slug":"_2-setup-and-start-zigbee2mqtt","link":"#_2-setup-and-start-zigbee2mqtt","children":[]}]},{"level":2,"title":"Connect a device","slug":"connect-a-device","link":"#connect-a-device","children":[]}],"git":{"updatedTime":1707076149000},"filePathRelative":"guide/getting-started/README.md"}')},924838:(A,e,n)=>{n.r(e),n.d(e,{default:()=>Z});var a=n(166252),s=n(110777);const t=(0,a._)("h1",{id:"getting-started",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#getting-started","aria-hidden":"true"},"#"),(0,a.Uk)(" Getting started")],-1),o=(0,a._)("h2",{id:"prerequisites",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#prerequisites","aria-hidden":"true"},"#"),(0,a.Uk)(" Prerequisites")],-1),i=(0,a._)("p",null,"In order to use Zigbee2MQTT we need the following hardware:",-1),l=(0,a._)("img",{src:s,title:"ZZH",class:"float-left"},null,-1),r=(0,a._)("strong",null,"A Zigbee Adapter",-1),c=(0,a._)("br",{class:"clear"},null,-1),d=(0,a._)("img",{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAYABgAAD/4QCMRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABgAAAAAQAAAGAAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAGSgAwAEAAAAAQAAAEYAAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/bAEMABgQEBQQEBgUFBQYGBgcJDgkJCAgJEg0NCg4VEhYWFRIUFBcaIRwXGB8ZFBQdJx0fIiMlJSUWHCksKCQrISQlJP/bAEMBBgYGCQgJEQkJESQYFBgkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJP/AABEIAEYAZAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcBAgUIBAP/xAAxEAABAwMDAgQGAgEFAAAAAAABAgMRAAQFBiExElEHEyJBFDJCYXGBFZEjFqLR4fD/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACgRAAICAQMCBAcAAAAAAAAAAAABAhEDEiExBFETMnHwI0FhobHB0f/aAAwDAQACEQMRAD8A9URFKRWRQClYpFAZFIrEUoBWZr4czfuYzFXV4yyHnGGlLQ2VdIWQNhPtVHas1xrfMX4sbQtWVsOpTi23ggdIMe/I3EyRUbo0o2X6lxKxKVBQmNjNbTXn3T2u16XukfE5o3K1wFtNAlomZ+YgACSR6QeeeKtbBeJWCzbwt0XAaeKZIUQUzAJEjjn37GiYcGiWTSsJIIkEEHeRSqZG3alZilADSsUKgkSdhQGaVz7zM2lmklTnUR7J3/8Af91E854l2ONCuu4aZA5BMq/r22B/o1HJIqiycOPoaErUEj7mua/qOzZWEhU7wSTAHH/NUPnfHQXbq2MS07eOpUUlSPX0ngyflBEnk/T96jN3eaq1MoLv7ldiwtXSPLkqT3gke32H0jepb5OWXNjxed7nobW2tMDhcddWt5kWRcrZV0sI9bh229I437157yGrsbqpDfwRQpxlfX6kkqmOP3/XevwzWRU/ByaoatlAs3jjRcQtQJBJESgwNiSZnneoug2+M1B8djMetbLjJZNsVFJcJIlYAOyhG353rk3KS32Mw6q03FWvfr+yR3F1a3iGBmbi6t22yQ69aJnzEgfWnmZAG3ufYV1cdn7G2ctk4jHBLSYUHLwl5aZG8Np9IMSOTzzUKx17dv5e0bv7d5pa3VNNpVCgr0kkGNkmO8VOLW367lm0aAUXD0BQPKu23NW65PXjmnyWLpzxjXZBu0ylm47bhSx56VguhJWSn08QEkCJnarTxGax+dtRdY66buGj7oO6T2I5B+xqmsfoC1CAu8ulPKUJhn0oT9+o7k1Zmi9PY7CW6lWNsltTiQFuEytYHEmtpss4qrJPFKUrZxNVKAEniqk8VvGXC6RvGMcbkOXam1L6G3J3CkjpgblW5IAHtVpZK1F7ZvW5KgHElMpMEV591wP9MXLdxmLBVw5ZPKW2uSGrtMEgKgeg7AbECSOdxXKcpJpVt3MZMvhrVRF7jXutNWqWjG2zVhb/AFuXS/JBBgGE7qUd1CDHIr5LXRTV1afyGp8qt94jqNncy0g7e6Qd5MxPVuTUj1I23kMY5qfA3AvdMrcC+uxZIuMWoABTTrfIEj549JO4AE1Fby1tM3h2UZD+RTkFnzGesecu66jCTA9IEkD1H3HO1a4PF1GfJGdZXUfofmvUuPx7bSMLjkmE9Rc6Svy42lKjCf6rsWORucljEqRl2PNKStwtOAqQDx1DuP323qHLx2TfJaUlppKD0kkFM7wYbidjz27139OYjF4sLvbu5VcKWgNJS2qAoqJBAGxOwnYTvSkcMmPDFx8GVy7d/wCHeuNSab01btnUb1++wITFqgOOqMkAqHBTsZBHP5r7Mfp3Bo089qbAOJzmIaQVqFklfnM77pUyB1yOxO3YRUOyuPxNy6FKtki2fb9NqlIICk7JKgdjJ3kEn97VzLFN94ZZhGpNOXXwrjTXxNxjXXy2bppAlaOmCSkexIETtG4MSR7On6abx/GVP1NrfLZfUnmHF2Px3lc3LKB0Nk/KuEkFWwA+Wf1uJFpfUSGdTYqxzLP8Xf290kLDhAaWEgklKuPvvvtXNyFnntUXLmR0xgHcHjspeB5TFg6eh0AwtXrCSkqEmE+gnf3M2x4e+E92rSybPUlo1cKVcreYbuQkqt2uolCCEbFUGVQYkkbikotq4o9EMcYrVjOozrKyzKZwiXMggLLZebHS0kjus+33E1YGjxkTaOqyAZ6SoeV5aSNo3mTvv77fisYnSFjj0NgthZR8ogBKfwBsKkCEJbSEpAAFbUa5NtyfmZtNKUqg1Imo9qvS9pqGxct7llCwoEbiakVYIkVUxV8nkfVWj9UeFuTuMrpi9urRtQ/yFodYWkbhLiDs4n/cASAYNfFqbM6hymGGZdwuMwCypLKk2SEMOuNhAgGCZT1KkbcRxE16wzWBtctbLZfaSoKHaqZ1Z4SvPlqxX5juObfD7RbMOMHcEJMbggkb8SY7VnJUY6lwcZwbaT3Xv7EEvmr+1xzLGLZuMu8+2hoC1KkuJ6uTIlSSZEkbifUdpqO5wZx25NumxuLK+ab8lAeSFOsuqG4UomAiRsRsTMbirp0tpPO6ecTb4damLNxEOBcuOtqn5krWN/TtCpHHappbeHbV9cJvMmpTroAB6jJJ7z7THAAE+1c8T1xUkq9TLwvSuLX4PPen9H6r1DZpt1P3GHKXFpW8GkuPPJgR0KmU79U7CeQatHQvgfjsI+u8+H6rt5pLT13c/wCV51I7z6QTAmBvA7Vblhp+yx6AlhhCAOwropaSkQAK70kd/lT3ONj9LWFkApLXU4PrUZNdhtlKAIHFfpxSpbKKc0pUAilJpQGKDilKAc1qptC+Ug0pQGEtITwkD9VuNvalKrAmszSlQCaTSlADWokn7UpQAqj2pSlAf//Z",title:"Raspberry Pi",class:"float-left"},null,-1),p=(0,a._)("strong",null,"A Server",-1),u={href:"https://www.mosquitto.org/download/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://randomnerdtutorials.com/how-to-install-mosquitto-broker-on-raspberry-pi/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://mqtt.org/software/",target:"_blank",rel:"noopener noreferrer"},m=(0,a._)("br",{class:"clear"},null,-1),b=(0,a._)("li",null,[(0,a._)("p",null,[(0,a._)("img",{src:"data:image/jpeg;base64,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",title:"Zigbee devices",class:"float-left"}),(0,a.Uk)(" One or more "),(0,a._)("strong",null,"Zigbee Devices"),(0,a.Uk)(" which will be paired with Zigbee2MQTT. "),(0,a._)("br",{class:"clear"})])],-1),h={class:"custom-container tip"},v=(0,a._)("p",{class:"custom-container-title"},"TIP",-1),Q=(0,a._)("img",{alt:"USB Cable",src:"data:image/jpeg;base64,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",class:"float-left"},null,-1),B=(0,a._)("br",{class:"clear"},null,-1),E=(0,a._)("h2",{id:"installation",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),(0,a.Uk)(" Installation")],-1),w={href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"},U={href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"},y=(0,a.uE)('<h3 id="_1-find-the-zigbee-adapter" tabindex="-1"><a class="header-anchor" href="#_1-find-the-zigbee-adapter" aria-hidden="true">#</a> 1.) Find the Zigbee-Adapter</h3><h4 id="_1-1-usb-zigbee-adapter" tabindex="-1"><a class="header-anchor" href="#_1-1-usb-zigbee-adapter" aria-hidden="true">#</a> 1.1) USB Zigbee adapter</h4><p>After you plug the adapter in see the <code>dmesg</code> output to find the device location:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">dmesg</span>\n\n<span class="token punctuation">..</span>.\nusbcore: registered new interface driver ch341\nusbserial: USB Serial support registered <span class="token keyword">for</span> ch341-uart\nch341 <span class="token number">3</span>-1:1.0: ch341-uart converter detected\nusb <span class="token number">3</span>-1: ch341-uart converter now attached to ttyUSB0\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As we can see the adapter was identified and mounted on <code>ttyUSB0</code>.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> /dev/ttyUSB0\ncrw-rw---- <span class="token number">1</span> root dialout <span class="token number">188</span>, May <span class="token number">16</span> <span class="token number">19</span>:15 /dev/ttyUSB0\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Here we can see that the adapter is owned by <code>root</code> and accessible from all users in the <code>dialout</code> group.</p><h4 id="_1-2-network-zigbee-adapter" tabindex="-1"><a class="header-anchor" href="#_1-2-network-zigbee-adapter" aria-hidden="true">#</a> 1.2) Network Zigbee adapter</h4><p>Zigbee2MQTT supports mDNS autodiscovery feature for network Zigbee adapters. If your network Zigbee adapter supports mDNS, you do not need to know the IP address of your network Zigbee adapter, Zigbee2MQTT will detect it and configure. Otherwise, you need to know the network Zigbee adapter&#39;s IP address:</p><ul><li>Connect your adapter to your LAN network either over Ethernet or Wi-Fi, depending on your adapter.</li><li>Go to your router/switch setting and find the list of connected device.</li><li>Find the IP address and of your Ethernet Zigbee adapter.</li><li>You also need to know the communication port of your Ethernet Zigbee-Adapter. In most cases (TubeZB, SLZB-06) the default port is <code>6638</code>. You can check the port at your Adapter&#39;s user manual.</li></ul><h3 id="_2-setup-and-start-zigbee2mqtt" tabindex="-1"><a class="header-anchor" href="#_2-setup-and-start-zigbee2mqtt" aria-hidden="true">#</a> 2.) Setup and start Zigbee2MQTT</h3><p>It&#39;s assumed, that you have a recent version of Docker and Docker Compose installed.</p><p>First, we create a folder where we want the project to reside <code>mkdir folder-name</code>. In the folder, we create we save the <code>docker-compose.yml</code> file which defines how Docker would run our containers. The following file consists of two services, one for the MQTT-Server and one for Zigbee2MQTT itself. Be sure to adjust the file to your needs and match the devices-mount in the case your adapter was not mounted on <code>/dev/ttyUSB0</code> or in case you use a network adapter.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.8&#39;</span>\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">mqtt</span><span class="token punctuation">:</span>\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> eclipse<span class="token punctuation">-</span>mosquitto<span class="token punctuation">:</span><span class="token number">2.0</span>\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;./mosquitto-data:/mosquitto&quot;</span>\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;1883:1883&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;9001:9001&quot;</span>\n    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token string">&quot;mosquitto -c /mosquitto-no-auth.conf&quot;</span>\n\n  <span class="token key atrule">zigbee2mqtt</span><span class="token punctuation">:</span>\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> zigbee2mqtt\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> koenkk/zigbee2mqtt\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> ./zigbee2mqtt<span class="token punctuation">-</span>data<span class="token punctuation">:</span>/app/data\n      <span class="token punctuation">-</span> /run/udev<span class="token punctuation">:</span>/run/udev<span class="token punctuation">:</span>ro\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> 8080<span class="token punctuation">:</span><span class="token number">8080</span>\n    <span class="token key atrule">environment</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> TZ=Europe/Berlin\n    <span class="token key atrule">devices</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /dev/ttyUSB0<span class="token punctuation">:</span>/dev/ttyUSB0\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',14),M=(0,a._)("code",null,"zigbee2mqtt-data/configuration.yaml",-1),f=(0,a.uE)('<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Let new devices join our zigbee network</span>\n<span class="token key atrule">permit_join</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n<span class="token comment"># Docker Compose makes the MQTT-Server available using &quot;mqtt&quot; hostname</span>\n<span class="token key atrule">mqtt</span><span class="token punctuation">:</span>\n  <span class="token key atrule">base_topic</span><span class="token punctuation">:</span> zigbee2mqtt\n  <span class="token key atrule">server</span><span class="token punctuation">:</span> mqtt<span class="token punctuation">:</span>//mqtt\n<span class="token comment"># Zigbee Adapter path</span>\n<span class="token key atrule">serial</span><span class="token punctuation">:</span>\n  <span class="token key atrule">port</span><span class="token punctuation">:</span> /dev/ttyUSB0\n<span class="token comment"># Enable the Zigbee2MQTT frontend</span>\n<span class="token key atrule">frontend</span><span class="token punctuation">:</span>\n  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>\n<span class="token comment"># Let Zigbee2MQTT generate a new network key on first start</span>\n<span class="token key atrule">advanced</span><span class="token punctuation">:</span>\n  <span class="token key atrule">network_key</span><span class="token punctuation">:</span> GENERATE\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For network adapters, <code>serial</code> settings should look like this:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">serial</span><span class="token punctuation">:</span>\n  <span class="token key atrule">port</span><span class="token punctuation">:</span> tcp<span class="token punctuation">:</span>//192.168.1.12<span class="token punctuation">:</span><span class="token number">6638</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Where <code>192.168.1.112</code> is the IP address of your network Zigbee adapter, and <code>6638</code> is the port.</p><p>In case you adapter supports mDNS, you can omit the IP address and use a configuration like:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">serial</span><span class="token punctuation">:</span>\n <span class="token key atrule">port</span><span class="token punctuation">:</span> mdns<span class="token punctuation">:</span>//slzb<span class="token punctuation">-</span><span class="token number">06</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Where <code>slzb-06</code> is the mDNS name of your network Zigbee adapter.</p><p>We should now have two files in our directory and can start the stack:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">find</span>\n./docker-compose.yml\n./zigbee2mqtt-data/configuration.yaml\n\n<span class="token comment"># First start</span>\n$ <span class="token function">docker</span> compose up <span class="token parameter variable">-d</span>\n\n<span class="token comment"># Check the logs</span>\n$ <span class="token function">docker</span> compose logs <span class="token parameter variable">-f</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',9),C={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"},I=(0,a._)("p",null,"We can now go on and pair our first device.",-1),S=(0,a._)("h2",{id:"connect-a-device",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#connect-a-device","aria-hidden":"true"},"#"),(0,a.Uk)(" Connect a device")],-1),D=(0,a.uE)('<p>If no instructions are available, the device can probably be paired by factory resetting it.</p><p>Once you see something similar to below in the log your device is paired and you can start controlling it using the frontend and MQTT messages.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Zigbee2MQTT:info  2019-11-09T12:19:56: Successfully interviewed &#39;0x00158d0001dc126a&#39;, device has successfully been paired\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">ATTENTION</p><p>It&#39;s important that <code>permit_join</code> is set to <code>false</code> in your <code>configuration.yaml</code> after initial setup is done to keep your Zigbee network safe and to avoid accidental joining of other Zigbee devices.</p></div>',4),T={},Z=(0,n(983744).Z)(T,[["render",function(A,e){const n=(0,a.up)("RouterLink"),s=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[t,o,i,(0,a._)("ol",null,[(0,a._)("li",null,[(0,a._)("p",null,[l,(0,a.Uk)(),r,(0,a.Uk)(" which is the interface between the Computer (or Server) where you run Zigbee2MQTT and the Zigbee radio communication. Zigbee2MQTT supports a variety of adapters with different kind of connections like USB, GPIO or remote via WIFI or Ethernet. Recommended adapters have a chip starting with CC2652 or CC1352. See "),(0,a.Wm)(n,{to:"/guide/adapters/"},{default:(0,a.w5)((()=>[(0,a.Uk)("supported Adapters")])),_:1}),(0,a.Uk)(". It's recommended to check out your adapter's recommendation details before the installation process, to find out whether it needs any additional configuration parameters. "),c])]),(0,a._)("li",null,[(0,a._)("p",null,[d,(0,a.Uk)(),p,(0,a.Uk)(" where you would run Zigbee2MQTT. Most Raspberry-Pi models are known to work but you can run it on many computers and platforms including Linux, Windows and MacOS. It should have an MQTT broker installed. "),(0,a._)("a",u,[(0,a.Uk)("Mosquitto"),(0,a.Wm)(s)]),(0,a.Uk)(" ("),(0,a._)("a",k,[(0,a.Uk)("Tutorial for Raspberry-Pi"),(0,a.Wm)(s)]),(0,a.Uk)(") is the recommended MQTT broker but "),(0,a._)("a",g,[(0,a.Uk)("others"),(0,a.Wm)(s)]),(0,a.Uk)(" should also work fine. "),m])]),b]),(0,a._)("div",h,[v,(0,a._)("p",null,[Q,(0,a.Uk)(" To improve network range and stability use a USB extension cable. If you experience ANY trouble with device (timeouts, not pairing, devices unreachable, devices dropping from the network, etc.) this is the first thing to do to avoid interference. See "),(0,a.Wm)(n,{to:"/advanced/zigbee/02_improve_network_range_and_stability.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("Improve network range and stability")])),_:1}),(0,a.Uk)(". "),B])]),E,(0,a._)("p",null,[(0,a.Uk)("You can run Zigbee2MQTT in different ways, see "),(0,a.Wm)(n,{to:"/guide/installation/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Installation")])),_:1}),(0,a.Uk)(". In this example "),(0,a._)("a",w,[(0,a.Uk)("Docker"),(0,a.Wm)(s)]),(0,a.Uk)(" and "),(0,a._)("a",U,[(0,a.Uk)("Docker Compose"),(0,a.Wm)(s)]),(0,a.Uk)(" is used to set up and run Zigbee2MQTT.")]),y,(0,a._)("p",null,[(0,a.Uk)("In the next step we'll create a simple "),(0,a.Wm)(n,{to:"/guide/configuration/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Zigbee2MQTT config file")])),_:1}),(0,a.Uk)(" in "),M,(0,a.Uk)(".")]),f,(0,a._)("p",null,[(0,a.Uk)("After some short time you should see some log messages that Mosquitto and Zigbee2MQTT is running now. You can open the frontend using "),(0,a._)("a",C,[(0,a.Uk)("http://localhost:8080"),(0,a.Wm)(s)]),(0,a.Uk)(" (or the hostname of your remote server).")]),I,S,(0,a._)("p",null,[(0,a.Uk)("Search the "),(0,a.Wm)(n,{to:"/supported-devices/"},{default:(0,a.w5)((()=>[(0,a.Uk)("supported devices")])),_:1}),(0,a.Uk)(" for your device and follow the instructions how to pair.")]),D])}]])},110777:A=>{A.exports="data:image/jpeg;base64,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"}}]);
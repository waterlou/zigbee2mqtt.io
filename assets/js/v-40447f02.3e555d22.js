"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[94365],{912441:(e,t,i)=>{i.r(t),i.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-40447f02","path":"/devices/E2134.html","title":"IKEA E2134 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"IKEA E2134 control via MQTT","description":"Integrate your IKEA E2134 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-11-30T19:41:12.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Common problems","slug":"common-problems","link":"#common-problems","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Illuminance (lux) (numeric)","slug":"illuminance-lux-numeric","link":"#illuminance-lux-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1707076149000},"filePathRelative":"devices/E2134.md"}')},723483:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});var n=i(166252);const a=(0,n._)("h1",{id:"ikea-e2134",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#ikea-e2134","aria-hidden":"true"},"#"),(0,n.Uk)(" IKEA E2134")],-1),l=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),o=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"E2134")],-1),c=(0,n._)("td",null,"Vendor",-1),r=(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"VALLHORN wireless motion sensor")],-1),d=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"occupancy, battery, illuminance, illuminance_lux, linkquality")],-1),s=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/E2134.jpg",alt:"IKEA E2134"})])],-1),u=(0,n.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Pair the sensor to Zigbee2MQTT by long pressing the pair button for more than 10 seconds. The red light on the front side should flash a few times and then turn off. If the light red light does not show up and batteries are OK, try pressing the pair button 4 short times. After a few seconds it turns back on and pulsate. When connected, the light turns off.</p><h3 id="common-problems" tabindex="-1"><a class="header-anchor" href="#common-problems" aria-hidden="true">#</a> Common problems</h3><p>Many has experienced using 1.2v AAA batteries (instead of the common 1.5v) makes the device behave correctly. Using 1.5v might result in unexpected behavior like unable to connect and false-positive motion detection.</p>',5),h=(0,n._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,n.Uk)(" OTA updates")],-1),p=(0,n._)("h2",{id:"options",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,n.Uk)(" Options")],-1),m=(0,n.uE)('<ul><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_lux_calibration</code>: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>no_occupancy_since</code>: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a <code>{&quot;no_occupancy_since&quot;: 10}</code> will be send after 10 seconds and a <code>{&quot;no_occupancy_since&quot;: 60}</code> after 60 seconds. The value must be a list of [object Object].</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric" aria-hidden="true">#</a> Illuminance (numeric)</h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric" aria-hidden="true">#</a> Illuminance (lux) (numeric)</h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12),b={},f=(0,i(983744).Z)(b,[["render",function(e,t){const i=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.kq)(" !!!! "),(0,n.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,n.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,n.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,n.kq)(" !!!! "),a,(0,n._)("table",null,[l,(0,n._)("tbody",null,[o,(0,n._)("tr",null,[c,(0,n._)("td",null,[(0,n.Wm)(i,{to:"/supported-devices/#v=IKEA"},{default:(0,n.w5)((()=>[(0,n.Uk)("IKEA")])),_:1})])]),r,d,s])]),(0,n.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,n.kq)(" Notes END: Do not edit below this line "),h,(0,n._)("p",null,[(0,n.Uk)("This device supports OTA updates, for more information see "),(0,n.Wm)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,n.w5)((()=>[(0,n.Uk)("OTA updates")])),_:1}),(0,n.Uk)(".")]),p,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[(0,n.Uk)("How to use device type specific configuration")])),_:1})])]),m])}]])}}]);
<template>
    <h1>QRTEST</h1>
    <div class="qrReader">
      <qrcode-reader :paused="paused" @init="onInit" @decode="onDecode"></qrcode-reader>
    </div>
  </template>
  
  <script>
    import { QrcodeReader } from 'vue-qrcode-reader'
    export default {
      components: { QrcodeReader },
      name: "qrReader",
      data () {
        return {
          paused: false
        }
      },
      methods: {
        async onInit (promise) {
            console.log("4");
          // show loading indicator
          try {
            await promise
            // successfully initialized
          } catch (error) {
            if (error.name === 'NotAllowedError') {
              // user denied camera access permisson
              console.log("0");
            } else if (error.name === 'NotFoundError') {
                console.log("1");
              // no suitable camera device installed
            } else if (error.name === 'NotSupportedError') {
                console.log("2");
              // page is not served over HTTPS (or localhost)
            } else if (error.name === 'NotReadableError') {
                console.log("3");
              // maybe camera is already in use
            } else if (error.name === 'OverconstrainedError') {
                console.log("4");
              // passed constraints don't match any camera. Did you requested the front camera although there is none?
            } else {
                console.log("5");
              // browser is probably lacking features (WebRTC, Canvas)
            }
          } finally {
            console.log("6");
            // hide loading indicator
          }
        },
        onDecode(content){
          this.paused = true
          alert(content)
        }
      }
    }
  </script>
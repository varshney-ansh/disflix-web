import {
    Player as ShakaPlayer,
    ui as ShakaUI,
    polyfill as ShakaPolyfill,
  } from "shaka-player/dist/shaka-player.ui";
  import "shaka-player/dist/controls.css";
  import "./styles.css";
  
  import {
    ForwardTenButton,
    RewindTenButton,
    VerticalVolume,
  } from "shaka-player-ui-controls";
  
  import "shaka-player-ui-controls/dist/main.css";

  export function mainWithAds(url){
    
    // function adContainerClick(event) {
    //   console.log("ad container clicked");
    //   video.pause();
    //   if(video.paused) {
    //     video.play();
    //   } else {
    //     video.pause();
    //   }
    // }

    function onContentPauseRequested() {
      console.log("Content Paused");
    }
    
    function onContentResumeRequested() {
      console.log("Content Resumed");
    }

    function initializeIMA() {
      console.log("initializing IMA");
      const container = video.ui.getControls().getClientSideAdContainer();
      adDisplayContainer = new google.ima.AdDisplayContainer(container, video);
      adsLoader = new google.ima.AdsLoader(adDisplayContainer);
      // adContainer[0].addEventListener('click', adContainerClick);
      // for (var i = 0; i < adContainer.length; i++) {
      //     adContainer[i].addEventListener('click', adContainerClick);
      // }
      // Let the AdsLoader know when the video has ended
      video.addEventListener('ended', function() {
        console.log("ended");
        adsLoader.contentComplete();
      });
      
      //requesting ad from adtagurl
      var adsRequest = new google.ima.AdsRequest();
      adsRequest.adTagUrl = 'https://pubads.g.doubleclick.net/gampad/ads?' +
          'iu=/21775744923/external/single_ad_samples&sz=640x480&' +
          'cust_params=sample_ct%3Dlinear&ciu_szs=300x250%2C728x90&' +
          'gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=';
      
      // Specify the linear and nonlinear slot sizes. This helps the SDK to
      // select the correct creative if multiple are returned.
      adsRequest.linearAdSlotWidth = video.clientWidth;
      adsRequest.linearAdSlotHeight = video.clientHeight;
      adsRequest.nonLinearAdSlotWidth = video.clientWidth;
      adsRequest.nonLinearAdSlotHeight = video.clientHeight / 3;

      // Pass the request to the adsLoader to request ads
      adsLoader.requestAds(adsRequest);

      adManager.initClientSide(container, video);
      adManager.requestClientSideAds(adsRequest);
      // adManager.addEventListener(
      //   google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,
      //   onContentPauseRequested);
      // adManager.addEventListener(
      //   google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
      //   onContentResumeRequested);

    }
    
    //getting reference to video and video container on DOM
    const video = document.getElementById("video");
    const videoContainer = document.getElementById("video-container");
    const currentTimer = document.getElementsByClassName("shaka-current-time");
    const adContainer = document.getElementsByClassName("shaka-client-side-ad-container");
    //initialize shaka player
    ShakaPolyfill.installAll();
    const player = new ShakaPlayer(video);
    const manifestUri = url;
    const adManager = player.getAdManager();
    var adDisplayContainer;
    var adsLoaded = false;
    var adsLoader;
    // video.volume = 0.5;
  
    // With the client sisde logic initialized, you can request ads at any time during the presentation.

    //register controls
    ShakaUI.Controls.registerElement(
      "vertical_volume",
      new VerticalVolume.Factory()
    );
    
    //rewind controls
    ShakaUI.Controls.registerElement("rewind_10", new RewindTenButton.Factory());
  
    //fast forward controls
  
    ShakaUI.Controls.registerElement(
      "forward_10",
      new ForwardTenButton.Factory()
    );

    //create ui config
    const uiConfig = {
      addBigPlayButton: true,
      controlPanelElements: [
        "time_and_duration",
        "spacer",
        "rewind_10",
        "forward_10",
        "spacer",
        "quality",
        "vertical_volume",
        "fullscreen",
      ],
    };
        
    const ui = new ShakaUI.Overlay(player, videoContainer, video);
    ui.configure(uiConfig);

    
    
    // const adsRequest = new google.ima.AdsRequest();
    // // Your ad tag url should go here. We are using a sample ad tag from the
    // // IMA HTML5 SDK implementation guide for this tutorial.
    // adsRequest.adTagUrl = 'https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/vmap_ad_samples&sz=640x480&cust_params=sample_ar%3Dpremidpostpodbumper&ciu_szs=300x250&gdfp_req=1&ad_rule=1&output=vmap&unviewed_position_start=1&env=vp&impl=s&cmsid=496&vid=short_onecue&correlator=';
    // adManager.requestClientSideAds(adsRequest);

    initializeIMA();
    // Initialize the container. Must be done via a user action on mobile devices.

    player
      .load(manifestUri)
      .then(function () {
        // This runs if the asynchronous load is successful.
        console.log("The video has now been loaded!");
      })
      .catch((err) => console.log(err)); // onError is executed if the asynchronous load fails.
  };

  export function mainWithoutAds(url){
 
    //getting reference to video and video container on DOM
    const video = document.getElementById("video");
    const videoContainer = document.getElementById("video-container");
    //initialize shaka player
    ShakaPolyfill.installAll();
    const player = new ShakaPlayer(video);
    const manifestUri = url;
    
    // video.volume = 0.5;
  
    //register controls
    ShakaUI.Controls.registerElement(
      "vertical_volume",
      new VerticalVolume.Factory()
    );
    
    //rewind controls
    ShakaUI.Controls.registerElement("rewind_10", new RewindTenButton.Factory());
  
    //fast forward controls
  
    ShakaUI.Controls.registerElement(
      "forward_10",
      new ForwardTenButton.Factory()
    );

    //create ui config
    const uiConfig = {
      addBigPlayButton: true,
      controlPanelElements: [
        "time_and_duration",
        "spacer",
        "rewind_10",
        "forward_10",
        "spacer",
        "quality",
        "vertical_volume",
        
        "fullscreen",
      ],
    };
  
    
  
    const ui = new ShakaUI.Overlay(player, videoContainer, video);
    ui.configure(uiConfig);
  
    player
      .load(manifestUri)
      .then(function () {
        // This runs if the asynchronous load is successful.
        console.log("The video has now been loaded!");
      })
      .catch((err) => console.log(err)); // onError is executed if the asynchronous load fails.
  };
  
  
  
import { r as registerInstance, h, g as getElement } from './index-14684944.js';
import './constants-53c76d9d.js';
import { s as stringToBoolean } from './utilFunctions-b2eac78a.js';
import { T as TableOfContentProperty } from './TableOfContentProperty-66120778.js';
import { C as CustomTheme } from './CustomTheme-a8c4b938.js';
import { B as BindModel } from './BindModel-c728ddd5.js';

const audioData = new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");

function isMobile(restrict) {
  if (restrict) return false;
  let userAgentKey ='userAgent';
  let sUserAgent = navigator[userAgentKey].toLowerCase();
  let bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
  let bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
  let bIsMidp = sUserAgent.match(/midp/i) == "midp";
  let bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
  let bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
  let bIsAndroid = sUserAgent.match(/android/i) == "android";
  let bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
  let bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
  return bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM;
}

function getScaledDim(img, maxWidth, maxHeight) {
  let scaled = {
    ratio: img.width / img.height,
    width: img.width,
    height: img.height
  };
  if (scaled.width > maxWidth) {
    scaled.width = maxWidth;
    scaled.height = scaled.width / scaled.ratio;
  }
  if (scaled.height > maxHeight) {
    scaled.height = maxHeight;
    scaled.width = scaled.height / scaled.ratio;
  }

  return scaled;

}

/* https://stackoverflow.com/questions/59287928/algorithm-to-create-a-polygon-from-points */
function polySort(points) {
  function squaredPolar(point, centre) {
    return [
      Math.atan2(point[1] - centre[1], point[0] - centre[0]),
      (point[0] - centre[0]) ** 2 + (point[1] - centre[1]) ** 2 // Square of distance
    ];
  }

  // Get "centre of mass"
  let centre = [points.reduce((sum, p) => sum + p[0], 0) / points.length,
    points.reduce((sum, p) => sum + p[1], 0) / points.length];

  // Sort by polar angle and distance, centered at this centre of mass.
  for (let point of points) point.push(...squaredPolar(point, centre));
  points.sort((a, b) => a[2] - b[2] || a[3] - b[3]);
  // Throw away the temporary polar coordinates
  for (let point of points) point.length -= 2;
}



const BarcodeUtilFunctions = {
  isMobile, polySort, getScaledDim
};

const MOBILE_DIMENSIONS = {
  WIDTH:240,
  HEIGHT:320,
  FRAME_WIDTH:160
};
const PC_DIMENSIONS = {
  WIDTH:640,
  HEIGHT:480,
  FRAME_WIDTH:300
};

class CanvasOverlay{

  constructor(scannerContainer, restrictResponsiveness) {
    this.PC_DIMENSIONS = PC_DIMENSIONS;
    this.MOBILE_DIMENSIONS = MOBILE_DIMENSIONS;
    this.scannerContainer = scannerContainer;
    this.isMobileDevice = BarcodeUtilFunctions.isMobile(restrictResponsiveness);
  }

  addCanvasToView(canvasId, customStyle){
    let canvasElement = document.createElement("canvas");
    canvasElement.id=canvasId;
    canvasElement.width=this.isMobileDevice?MOBILE_DIMENSIONS.WIDTH:PC_DIMENSIONS.WIDTH;
    canvasElement.height=this.isMobileDevice?MOBILE_DIMENSIONS.HEIGHT:PC_DIMENSIONS.HEIGHT;
    canvasElement.style.position = "absolute";
    canvasElement.style.width = "100%";
    canvasElement.style.top = "0";
    canvasElement.style.left = "0";

    if (typeof customStyle === "object") {
      Object.keys(customStyle).forEach(key => {
        if (canvasElement.style[key])
          canvasElement.style[key] = customStyle[key];
      });
    }

    this.scannerContainer.appendChild(canvasElement);
    return canvasElement;
  }

}

const ANGLE_WIDTH=50;

class VideoOverlay extends CanvasOverlay{

  constructor(scannerContainer, videoSource, restrictResponsiveness) {
    super(scannerContainer, restrictResponsiveness);
    this.videoSource = videoSource;
    let deviceDimensions = this.isMobileDevice?this.MOBILE_DIMENSIONS:this.PC_DIMENSIONS;

    let xPadding = (deviceDimensions.WIDTH - deviceDimensions.FRAME_WIDTH)/2;
    let yPadding = (deviceDimensions.HEIGHT - deviceDimensions.FRAME_WIDTH)/2;

    //this.cropOptions = [80,160,320,320];
    //for mobile devices we double the proportions because we don't want to touch the image quality by performing any image resizing

    this.cropOptions = this.isMobileDevice?[xPadding*2,yPadding*2,deviceDimensions.FRAME_WIDTH*2,deviceDimensions.FRAME_WIDTH*2]:[xPadding,yPadding,deviceDimensions.FRAME_WIDTH,deviceDimensions.FRAME_WIDTH];
  }

  getCropOptions(){
    return this.cropOptions;
  }

  createOverlaysCanvases(lensCanvas, overlayCanvas){
    this.lensCanvas = this.addCanvasToView(lensCanvas);
    this.overlayCanvas  = this.addCanvasToView(overlayCanvas);
  }

  removeOverlays(){
    this.scannerContainer.removeChild(this.lensCanvas);
    this.scannerContainer.removeChild(this.overlayCanvas);
  }


  drawOverlay(points){
    let x1,y1,x2,y2,x3,y3,x4,y4;
    x1 = points.x1;
    y1 = points.y1;
    x2 = points.x2;
    y2 = points.y2;
    x3 = points.x3;
    y3 = points.y3;
    x4 = points.x4;
    y4 = points.y4;
    //let paddings = this.isMobileDevice? [80,160]:[170,90];
    let paddings = [this.cropOptions[0],this.cropOptions[1]];
    let isLine = x3 + y3 + x4 + y4 === 0;

    x1+=paddings[0];
    x2+=paddings[0];
    x3+=paddings[0];
    x4+=paddings[0];

    y1+=paddings[1];
    y2+=paddings[1];
    y3+=paddings[1];
    y4+=paddings[1];

    this.overlayCanvas.width = this.videoSource['videoWidth'];
    this.overlayCanvas.height = this.videoSource['videoHeight'];
    if (this.overlayCanvas.getContext) {
      let ctx = this.overlayCanvas.getContext('2d');
      ctx.lineWidth = 5;
      ctx.strokeStyle = "#48d96099";
      ctx.fillStyle = "#48d96099";
      ctx.clearRect(0, 0, this.overlayCanvas.width, this.overlayCanvas.height);

      ctx.beginPath();

      if (isLine) {
        ctx.lineTo(x1, y1);
        ctx.lineTo(x2, y2);
      }
      else {
        let points = [[x1, y1], [x2, y2], [x3, y3], [x4, y4]];
        BarcodeUtilFunctions.polySort(points);
        ctx.moveTo(points[0][0], points[0][1]);
        ctx.lineTo(points[1][0], points[1][1]);
        ctx.lineTo(points[2][0], points[2][1]);
        ctx.lineTo(points[3][0], points[3][1]);
      }

      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.strokeStyle = "#48d960FF";
      let xPadding = this.cropOptions[0];
      let yPadding = this.cropOptions[1];
      let frameWidth = this.cropOptions[2];
      this.addLensCorners(ctx,xPadding, yPadding, frameWidth, ANGLE_WIDTH);
      setTimeout(()=>{
        ctx.clearRect(0, 0, this.overlayCanvas.width, this.overlayCanvas.height);
      },500);

    }
  }

  drawLensCanvas(){
    //let lensCanvas = this.element.querySelector("#lensCanvas");
    var ctx = this.lensCanvas.getContext("2d");
    ctx.beginPath();

    //polygon1--- usually the outside polygon, must be clockwise
    let polygonPoints = this.isMobileDevice ? [
        [0, 0],
        [this.MOBILE_DIMENSIONS.WIDTH, 0],
        [this.MOBILE_DIMENSIONS.WIDTH, this.MOBILE_DIMENSIONS.HEIGHT],
        [0, this.MOBILE_DIMENSIONS.HEIGHT]
      ]
      :
      [
        [0, 0],
        [this.PC_DIMENSIONS.WIDTH, 0],
        [this.PC_DIMENSIONS.WIDTH, this.PC_DIMENSIONS.HEIGHT],
        [0, this.PC_DIMENSIONS.HEIGHT]
      ];

    ctx.moveTo(polygonPoints[0][0],polygonPoints[0][1]);
    ctx.lineTo(polygonPoints[1][0],polygonPoints[1][1]);
    ctx.lineTo(polygonPoints[2][0],polygonPoints[2][1]);
    ctx.lineTo(polygonPoints[3][0],polygonPoints[3][1]);
    ctx.lineTo(polygonPoints[0][0],polygonPoints[0][1]);
    ctx.closePath();

    //polygon2 --- usually hole,must be counter-clockwise

    let deviceDimmensions = this.isMobileDevice?this.MOBILE_DIMENSIONS:this.PC_DIMENSIONS;

    let xPadding = (deviceDimmensions.WIDTH - deviceDimmensions.FRAME_WIDTH)/2;
    let yPadding = (deviceDimmensions.HEIGHT - deviceDimmensions.FRAME_WIDTH)/2;
    let frameWidth = deviceDimmensions.FRAME_WIDTH;
    let holePoints = [[xPadding,yPadding],[xPadding, yPadding+frameWidth],[xPadding+frameWidth, yPadding+frameWidth],[xPadding+frameWidth, yPadding]];
    //let holePoints = this.isMobileDevice?[[40,80],[40,240],[200,240],[200,80]]:[[170,90],[170,390],[470,390],[470,90]];
    ctx.moveTo(holePoints[0][0],holePoints[0][1]);
    ctx.lineTo(holePoints[1][0],holePoints[1][1]);
    ctx.lineTo(holePoints[2][0],holePoints[2][1]);
    ctx.lineTo(holePoints[3][0],holePoints[3][1]);
    ctx.lineTo(holePoints[0][0],holePoints[0][1]);
    ctx.closePath();

    ctx.fillStyle = "#77777799";
    ctx.strokeStyle = "#FFFFFFFF";
    ctx.lineWidth = 2;
    ctx.fill();

    let angleWidth = this.isMobileDevice?ANGLE_WIDTH/2:ANGLE_WIDTH;
    this.addLensCorners(ctx,xPadding, yPadding, frameWidth, angleWidth);
  }

  addLensCorners(ctx,xPadding,yPadding, frameWidth, angleWidth) {
    ctx.beginPath();
    //top-left corner
    ctx.moveTo(xPadding, yPadding + angleWidth);
    ctx.lineTo(xPadding, yPadding);
    ctx.lineTo(xPadding + angleWidth, yPadding);

    //top-right corner
    ctx.moveTo(xPadding + frameWidth - angleWidth, yPadding);
    ctx.lineTo(xPadding + frameWidth, yPadding);
    ctx.lineTo(xPadding + frameWidth, yPadding + angleWidth);
    //bottom-right corner
    ctx.moveTo(xPadding + frameWidth - angleWidth, yPadding + frameWidth);
    ctx.lineTo(xPadding + frameWidth, yPadding + frameWidth);
    ctx.lineTo(xPadding + frameWidth, yPadding + frameWidth - angleWidth);
    //bottom-left corner
    ctx.moveTo(xPadding, yPadding + frameWidth - angleWidth);
    ctx.lineTo(xPadding, yPadding + frameWidth);
    ctx.lineTo(xPadding + angleWidth, yPadding + frameWidth);

    ctx.stroke();
  }
}

class ImageOverlay extends CanvasOverlay{

  constructor(scannerContainer) {
    super(scannerContainer);
  }

  createOverlaysCanvases(imageCanvas){
    let style = {
      position:"relative",
      display:"block"
    };
    this.imageCanvas = this.addCanvasToView(imageCanvas,style);
  }

  removeOverlays(){
    this.scannerContainer.removeChild(this.imageCanvas);
  }

  getImageCanvasContext(){
    return this.imageCanvas.getContext("2d");
  }


  drawOverlay(points){

    let x1,y1,x2,y2,x3,y3,x4,y4;
    x1 = points.x1;
    y1 = points.y1;
    x2 = points.x2;
    y2 = points.y2;
    x3 = points.x3;
    y3 = points.y3;
    x4 = points.x4;
    y4 = points.y4;


    let isLine = x3 + y3 + x4 + y4 === 0;
    if (this.imageCanvas.getContext) {
      let ctx = this.imageCanvas.getContext('2d');
      ctx.lineWidth = 8;
      ctx.strokeStyle = "#48d96099";
      ctx.fillStyle = "#48d96099";

      ctx.beginPath();

      if (isLine) {
        ctx.lineTo(x1, y1);
        ctx.lineTo(x2, y2);
      }
      else {
        let points = [[x1, y1], [x2, y2], [x3, y3], [x4, y4]];
        BarcodeUtilFunctions.polySort(points);
        ctx.moveTo(points[0][0], points[0][1]);
        ctx.lineTo(points[1][0], points[1][1]);
        ctx.lineTo(points[2][0], points[2][1]);
        ctx.lineTo(points[3][0], points[3][1]);
      }

      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
  }

  drawUnmatch(message){
    let ctx = this.imageCanvas.getContext('2d');
    ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
    ctx.beginPath();
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fill();
    let fontSize = Math.floor(ctx.canvas.width/20);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = fontSize+'px serif';
    let textWidth = ctx.measureText(message).width;

    ctx.fillText(message , (ctx.canvas.width/2) - (textWidth / 2), (ctx.canvas.height/2) + fontSize);


  }
}

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const SCAN_TIMEOUT = 100;
const PskBarcodeScanner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.title = "";
        this.allowFileBrowsing = false;
        // force camera to not be stretched (PC DIMENSIONS)
        this.normalSize = false;
        this.componentIsDisconnected = false;
        this.ZXing = null;
        this.decodePtr = null;
        this.videoElement = null;
        this.cameraIsAvailable = false;
        this.cameraIsOn = false;
        this.overlay = null;
        this.handleCameraError = (error) => {
            console.log('Error: ', error);
            this.cameraIsAvailable = false;
            this.stopCameraUsage();
        };
        this.changeCamera = () => {
            this.stopTracks();
            this.getStream();
        };
        /**
         * select the stream and get barcode from the stream
         */
        this.getStream = () => {
            let camerasSelectList = this.element.querySelector('select#videoSource');
            let alternativeCameras = Array.from(camerasSelectList.querySelectorAll("option")).map((option) => {
                return option.value;
            }).filter((cameraId) => {
                return cameraId !== camerasSelectList.value;
            });
            let constraints = {
                audio: false
            };
            if (camerasSelectList.value) {
                constraints['video'] = {
                    deviceId: { exact: camerasSelectList.value }
                };
            }
            else {
                constraints['video'] = true;
            }
            let gotStream = (stream) => {
                window['stream'] = stream; // make stream available to console
                this.cameraIsOn = true;
                this.videoElement.srcObject = stream;
                this.scanBarcodeFromCamera();
            };
            let startVideo = (constraints) => {
                navigator.mediaDevices.getUserMedia(constraints).then(gotStream.bind(this)).catch((err) => {
                    if (err.message === "Could not start video source") {
                        if (alternativeCameras.length) {
                            this.removeDeviceIdFromList(constraints['video'].deviceId.exact);
                            constraints.video.deviceId = { exact: alternativeCameras.shift() };
                            startVideo(constraints);
                        }
                    }
                    else {
                        this.handleCameraError(err);
                    }
                });
            };
            startVideo(constraints);
        };
    }
    stopTracks() {
        if (window['stream']) {
            window['stream'].getTracks().forEach(function (track) {
                track.stop();
            });
            this.cameraIsOn = false;
        }
    }
    cleanupOverlays() {
        if (this.overlay) {
            this.overlay.removeOverlays();
        }
    }
    /**
     * stop camera and prepare the view for enabling it again
     */
    stopCameraUsage() {
        let scannerContainer = this.element.querySelector("#scanner_container");
        let useCameraBtn = this.element.querySelector("#use-camera-btn");
        if (useCameraBtn) {
            if (this.cameraIsAvailable) {
                this.stopTracks();
                useCameraBtn.style.display = "block";
            }
            else {
                useCameraBtn.style.display = "none";
            }
        }
        this.element.querySelector("#video").style.display = "none";
        this.element.querySelector("#camera-source").style.display = "none";
        let videoSelectOptions = this.element.querySelector('select#videoSource');
        videoSelectOptions.options.length = 0;
        videoSelectOptions.removeEventListener("change", this.changeCamera);
        this.cleanupOverlays();
        this.overlay = new ImageOverlay(scannerContainer);
        this.overlay.createOverlaysCanvases("imageCanvas");
    }
    /**
     * start camera and prepare the view for overlaying the video stream
     */
    startCameraUsage() {
        let useCameraBtn = this.element.querySelector("#use-camera-btn");
        if (useCameraBtn) {
            useCameraBtn.style.display = "none";
        }
        this.element.querySelector("#video").style.display = "block";
        this.element.querySelector("#camera-source").style.display = "block";
        let scannerContainer = this.element.querySelector("#scanner_container");
        this.cleanupOverlays();
        this.startCameraScan();
        this.overlay = new VideoOverlay(scannerContainer, this.videoElement, this.normalSize);
        this.overlay.createOverlaysCanvases("lensCanvas", "overlayCanvas");
        this.overlay.drawLensCanvas();
    }
    removeDeviceIdFromList(deviceId) {
        let camerasSelectList = this.element.querySelector('select#videoSource');
        for (let i = 0; i < camerasSelectList.length; i++) {
            if (camerasSelectList.options[i].value === deviceId) {
                camerasSelectList.remove(i);
                //select nextElement if available
                if (camerasSelectList.length) {
                    camerasSelectList.selectedIndex = i;
                }
                else {
                    camerasSelectList.selectedIndex = -1;
                }
                break;
            }
        }
    }
    /**
     * attempt to start camera and get the stream
     */
    startCameraScan() {
        this.videoElement = this.element.querySelector('video');
        let videoSelect = this.element.querySelector('select#videoSource');
        let gotDevices = (deviceInfos) => {
            if (deviceInfos.length) {
                for (let i = deviceInfos.length - 1; i >= 0; --i) {
                    let deviceInfo = deviceInfos[i];
                    let option = document.createElement('option');
                    option.value = deviceInfo.deviceId;
                    if (deviceInfo.kind === 'videoinput') {
                        option.text = deviceInfo.label || 'camera ' +
                            (videoSelect.length + 1);
                        videoSelect.appendChild(option);
                    }
                }
            }
            else {
                this.stopCameraUsage();
            }
        };
        navigator.mediaDevices.enumerateDevices()
            .then(gotDevices).then(this.getStream).catch(this.handleCameraError);
        videoSelect.addEventListener("change", this.changeCamera.bind(this));
    }
    /**
     * ZXing library initialization
     * @param successCallback will be called when the library is ready to accept decoding tasks
     * @param resultCallback will be called when decoding tasks has positive results
     */
    initializeZXing(successCallback, resultCallback) {
        let tick = () => {
            if (window['ZXing']) {
                this.ZXing = window['ZXing']();
                this.decodePtr = this.ZXing.Runtime.addFunction(decodeCallback);
                setTimeout(successCallback, SCAN_TIMEOUT);
            }
            else {
                setTimeout(tick, SCAN_TIMEOUT);
            }
        };
        setTimeout(tick, SCAN_TIMEOUT);
        //@ts-ignore
        let decodeCallback = (ptr, len, resultIndex, resultCount, x1, y1, x2, y2, x3, y3, x4, y4) => {
            let result = new Uint8Array(this.ZXing.HEAPU8.buffer, ptr, len);
            let stringResult = "";
            let separatorIndex = 0;
            let separatorStarted = false;
            for (let i = 0; i < result.length; i++) {
                //29 -  group separator char code
                if (result[i] == 29) {
                    stringResult += "(";
                    separatorStarted = true;
                    separatorIndex = 0;
                }
                else {
                    stringResult += String.fromCharCode(result[i]);
                    if (separatorStarted) {
                        separatorIndex++;
                        if (separatorIndex == 2) {
                            stringResult += ")";
                            separatorStarted = false;
                        }
                    }
                }
            }
            resultCallback({ points: { x1, y1, x2, y2, x3, y3, x4, y4 }, data: stringResult });
        };
    }
    /**
     * this function is taking an uploaded image from the device and sending it to the decoder
     * @param event
     */
    scanBarcodeFromUploadedFile(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.stopCameraUsage();
        if (!event.data || !event.data.length) {
            return;
        }
        let file = event.data[0];
        let reader = new FileReader();
        // load to image to get it's width/height
        let img = new Image();
        img.onload = () => {
            let ctx = this.overlay.getImageCanvasContext();
            // scale canvas to image
            let scaled = BarcodeUtilFunctions.getScaledDim(img, 640, 480);
            ctx.canvas.width = scaled.width;
            ctx.canvas.height = scaled.height;
            // draw image
            ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
            let imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
            let idd = imageData.data;
            let image = this.ZXing._resize(ctx.canvas.width, ctx.canvas.height);
            this.decodeImage(image, idd, () => {
                this.overlay.drawUnmatch("No code was matched!");
            });
        };
        // this is to setup loading the image
        reader.onloadend = function () {
            //@ts-ignore
            img.src = reader.result;
        };
        // this is to read the file
        reader.readAsDataURL(file);
    }
    /**
     * this function is taking a snapshot from the video and sending a task to the decoder
     */
    scanBarcodeFromCamera() {
        // let vid = this.element.querySelector("#video");
        let barcodeCanvas = document.createElement("canvas");
        //[x,y, width, height]
        let crpOpt = this.overlay.getCropOptions();
        barcodeCanvas.width = crpOpt[2];
        barcodeCanvas.height = crpOpt[3];
        let barcodeContext = barcodeCanvas.getContext('2d');
        //let imageWidth = vid['videoWidth'], imageHeight = vid['videoHeight'];
        //barcodeContext.drawImage(this.videoElement, 0, 0, imageWidth, imageHeight);
        barcodeContext.drawImage(this.videoElement, crpOpt[0], crpOpt[1], crpOpt[2], crpOpt[3], 0, 0, crpOpt[2], crpOpt[3]);
        // read barcode
        //let imageData = barcodeContext.getImageData(0, 0, imageWidth, imageHeight);
        let imageData = barcodeContext.getImageData(0, 0, crpOpt[2], crpOpt[3]);
        let idd = imageData.data;
        let image = this.ZXing._resize(crpOpt[2], crpOpt[3]);
        this.decodeImage(image, idd, () => {
            if (!this.componentIsDisconnected) {
                setTimeout(() => {
                    if (this.cameraIsOn) {
                        this.scanBarcodeFromCamera();
                    }
                }, SCAN_TIMEOUT);
            }
        });
    }
    decodeImage(image, idd, callback) {
        for (let i = 0, j = 0; i < idd.length; i += 4, j++) {
            this.ZXing.HEAPU8[image + j] = idd[i];
        }
        let err = this.ZXing._decode_any(this.decodePtr);
        if (err === -2) {
            if (typeof callback === "function") {
                callback();
            }
        }
    }
    /**
     * COMPONENT LIFECYCLE  METHODS
     */
    /**
     * check if any camera is available before first render
     */
    componentWillLoad() {
        function detectWebcam(callback) {
            let md = navigator.mediaDevices;
            if (!md || !md.enumerateDevices)
                return callback(false);
            md.enumerateDevices().then(devices => {
                callback(devices.some(device => 'videoinput' === device.kind));
            });
        }
        return new Promise((resolve => {
            detectWebcam((hasCamera) => {
                this.cameraIsAvailable = hasCamera;
                resolve();
            });
        }));
    }
    /**
     * after first render occurred, add the buttons events listeners if needed and initialize the ZXing library
     */
    componentDidLoad() {
        if (this.componentIsDisconnected) {
            return;
        }
        if (this.cameraIsAvailable === false) {
            this.element.addEventListener("loaded-local-file", this.scanBarcodeFromUploadedFile.bind(this));
        }
        else {
            if (stringToBoolean(this.allowFileBrowsing)) {
                this.element.addEventListener("loaded-local-file", this.scanBarcodeFromUploadedFile.bind(this));
                this.element.addEventListener("use-camera", this.startCameraUsage.bind(this));
            }
        }
        this.initializeZXing(this.startCameraUsage.bind(this), (result) => {
            this.modelHandler.updateModel('data', result.data);
            audioData.play();
            this.overlay.drawOverlay(result.points);
            if (!this.componentIsDisconnected) {
                setTimeout(() => {
                    if (this.cameraIsOn) {
                        this.scanBarcodeFromCamera();
                    }
                }, 1000);
            }
        });
    }
    disconnectedCallback() {
        this.componentIsDisconnected = true;
        this.stopTracks();
    }
    render() {
        if (this.componentIsDisconnected) {
            return null;
        }
        let fileBrowsingIsAllowed = stringToBoolean(this.allowFileBrowsing);
        return ([h("script", { async: true, src: "/cardinal/libs/zxing.js" }),
            h("psk-card", { title: this.title }, this.cameraIsAvailable === false ? h("psk-highlight", { title: "No camera detected", "type-of-highlight": "warning" }, h("p", null, "You can still use your device files to check for barcodes")) : null, fileBrowsingIsAllowed || this.cameraIsAvailable === false ?
                [
                    h("psk-files-chooser", { accept: "image/*", label: "Load a file from device", "event-name": "loaded-local-file" }),
                    h("psk-button", { "event-name": "use-camera", label: "Use camera", style: { display: "none" }, id: "use-camera-btn" })
                ] :
                null, h("div", { class: "select", id: "camera-source" }, h("label", null, "Video source: "), h("select", { id: "videoSource" })), h("div", { style: { position: "relative" }, id: "scanner_container" }, h("video", { muted: true, autoplay: true, id: "video", playsinline: "true", style: { width: "100%" } })))]);
    }
    get element() { return getElement(this); }
};
__decorate([
    BindModel()
], PskBarcodeScanner.prototype, "modelHandler", void 0);
__decorate([
    CustomTheme()
], PskBarcodeScanner.prototype, "element", void 0);
__decorate([
    TableOfContentProperty({
        description: `The data-model that will be updated with the retrieved data from the scanner.`,
        isMandatory: true,
        propertyType: `string`
    })
], PskBarcodeScanner.prototype, "data", void 0);
__decorate([
    TableOfContentProperty({
        description: `A title that will be used for the current component instance.`,
        isMandatory: false,
        propertyType: `string`
    })
], PskBarcodeScanner.prototype, "title", void 0);
__decorate([
    TableOfContentProperty({
        description: `A boolean value indicating that the current component instance is accepting files from the device. Please note that if no camera is detected, this feature will be automatically enabled.`,
        isMandatory: false,
        propertyType: `boolean`
    })
], PskBarcodeScanner.prototype, "allowFileBrowsing", void 0);

export { PskBarcodeScanner as psk_barcode_scanner };

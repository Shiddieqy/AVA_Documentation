/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "AVA LLC Documentation", "index.html", [
    [ "AVA LLC MAINBOARD Firmware", "index.html", "index" ],
    [ "Communication Protocols", "comm_protocol.html", [
      [ "UART Telemetry Protocol", "comm_protocol.html#uart", [
        [ "Configuration", "comm_protocol.html#uart_config", null ],
        [ "Complete UART Query / Response Protocol", "comm_protocol.html#uart_protocol", [
          [ "Frame Structure", "comm_protocol.html#uart_frame_structure", null ]
        ] ],
        [ "Function Codes", "comm_protocol.html#uart_func", null ],
        [ "Streaming Data Format (Response 0x11)", "comm_protocol.html#uart_stream", null ],
        [ "Batch Command (0x03 / 0x13)", "comm_protocol.html#uart_batch", null ],
        [ "Individual Control Commands", "comm_protocol.html#uart_cmd_individual", [
          [ "Drive Command (0x04 / 0x14)", "comm_protocol.html#uart_drive", null ],
          [ "Brake Command (0x05 / 0x15)", "comm_protocol.html#uart_brake", null ],
          [ "Steering Command (0x06 / 0x16)", "comm_protocol.html#uart_steer", null ],
          [ "Command Timing", "comm_protocol.html#uart_timing", null ]
        ] ]
      ] ],
      [ "CAN Bus Protocols", "comm_protocol.html#can", [
        [ "Configuration", "comm_protocol.html#can_config", null ],
        [ "Throttle (CAN2ANALOG)", "comm_protocol.html#can_throttle", null ],
        [ "Brake (iBooster)", "comm_protocol.html#can_booster", null ],
        [ "Steering (EPS System)", "comm_protocol.html#can_steering", [
          [ "Command Frame (0x314)", "comm_protocol.html#autotoc_md14", null ],
          [ "Feedback Frame (0x18F)", "comm_protocol.html#autotoc_md15", null ]
        ] ],
        [ "Ultrasonic (Distance Sensors)", "comm_protocol.html#can_ultrasonic", null ]
      ] ],
      [ "Related Subsystems", "comm_protocol.html#ref", null ]
    ] ],
    [ "Topics", "topics.html", "topics" ]
  ] ]
];

var NAVTREEINDEX =
[
"comm_protocol.html"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';
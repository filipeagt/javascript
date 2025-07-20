/* Create a WiFi access point and provide a web server on it. */

#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>

#ifndef APSSID
#define APSSID "Carrinho Wifi"
#define APPSK "12345678"
#endif

/* Pins configuration */
#define UP 0
#define DOWN 1
#define LEFT 2
#define RIGHT 3

/* Set these to your desired credentials. */
const char *ssid = APSSID;
const char *password = APPSK;

ESP8266WebServer server(80);

/* Just a little test message.  Go to http://192.168.4.1 in a web browser
   connected to this access point to see it.
*/
void handleRoot() {
  server.send(200, "text/html", 
  "<!DOCTYPE html>\
<html lang='pt-br'>\
\
<head>\
    <meta charset='UTF-8'>\
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>\
    <title>SNES Controller</title>\
    <style>\
        * {\
            margin: 0px;\
            padding: 0px;\
            box-sizing: border-box;\
        }\
\
        body {\
            display: flex;\
            justify-content: center;\
            align-items: center;\
            background-color: #333;\
            font-family: 'Helvetica Neue', sans-serif;\
            -webkit-user-select: none;\
            -ms-user-select: none;\
            user-select: none;\
            width: 100dvw;\
            height: 100dvh;\
        }\
\
        .snes-controller {\
            width: 100dvw;\
            height: 100dvh;\
            max-height: 50vw;\
            background-color: #d1d1d1;\
            border-radius: 15px 15px 10px 10px;\
            box-shadow: 0 10px 0 #b0b0b0, inset 0 2px 3px rgba(255, 255, 255, 0.4), inset 0 -2px 3px rgba(0, 0, 0, 0.3);\
            display: flex;\
            justify-content: space-between;\
            align-items: center;\
            position: relative;\
        }\
\
        .left-side,\
        .right-side {\
            width: 150px;\
            height: 100%;\
            display: flex;\
            align-items: center;\
            justify-content: center;\
        }\
\
        /* D-Pad */\
        .d-pad {\
            position: relative;\
            width: 120px;\
            height: 120px;\
        }\
\
        .d-pad-btn {\
            position: absolute;\
            background-color: #5a5a5a;\
            box-shadow: 0 3px 0 #3a3a3a, inset 0 1px 1px rgba(255, 255, 255, 0.3);\
            cursor: pointer;\
        }\
\
        .d-pad-btn.pressed {\
            transform: translateY(2px);\
            box-shadow: 0 1px 0 #3a3a3a, inset 0 1px 1px rgba(0, 0, 0, 0.4);\
        }\
\
        .d-pad-btn.up {\
            width: 40px;\
            height: 40px;\
            top: 0;\
            left: 40px;\
            border-radius: 5px 5px 0 0;\
        }\
\
        .d-pad-btn.right {\
            width: 40px;\
            height: 40px;\
            top: 40px;\
            right: 0;\
            border-radius: 0 5px 5px 0;\
        }\
\
        .d-pad-btn.down {\
            width: 40px;\
            height: 40px;\
            bottom: 0;\
            left: 40px;\
            border-radius: 0 0 5px 5px;\
            z-index: 1;\
        }\
\
        .d-pad-btn.left {\
            width: 40px;\
            height: 40px;\
            top: 40px;\
            left: 0;\
            border-radius: 5px 0 0 5px;\
        }\
\
        .d-pad-center {\
            position: absolute;\
            width: 40px;\
            height: 40px;\
            top: 40px;\
            left: 40px;\
            background-color: #5a5a5a;\
            box-shadow: 0 3px 0 #3a3a3a, inset 0 1px 1px rgba(255, 255, 255, 0.3);\
        }\
\
        /* Center Section */\
        .center-section {\
            display: flex;\
            flex-direction: column;\
            align-items: center;\
            gap: 20px;\
        }\
\
        .brand {\
            text-align: center;\
            color: #9a8f9b;\
            font-weight: bold;\
        }\
\
        .super-nintendo {\
            font-style: italic;\
            font-size: 16px;\
            letter-spacing: -1px;\
        }\
\
        .entertainment-system {\
            font-size: 6px;\
            letter-spacing: 0.5px;\
        }\
\
        .center-buttons {\
            display: flex;\
            gap: 10px;\
        }\
\
        .select-start-btn {\
            width: 40px;\
            height: 15px;\
            background-color: #5a5a5a;\
            border-radius: 10px;\
            box-shadow: 0 2px 0 #3a3a3a;\
            cursor: pointer;\
            color: #9a8f9b;\
            font-size: 10px;\
            text-align: center;\
            line-height: 15px;\
            font-weight: bold;\
        }\
\
        .select-start-btn.pressed {\
            transform: translateY(1px);\
            box-shadow: 0 1px 0 #3a3a3a;\
        }\
\
\
        /* Action Buttons */\
        .right-side {\
            position: relative;\
            transform: rotate(-45deg);\
            padding-bottom: 10px;\
        }\
\
        .action-buttons {\
            display: grid;\
            grid-template-areas: 'y x' 'b a';\
            gap: 15px;\
        }\
\
        .action-btn-outer {\
            width: 50px;\
            height: 50px;\
            border-radius: 50%;\
            display: flex;\
            justify-content: center;\
            align-items: center;\
            cursor: pointer;\
        }\
\
        .action-btn-inner {\
            width: 100%;\
            height: 100%;\
            border-radius: 50%;\
            display: flex;\
            justify-content: center;\
            align-items: center;\
            font-size: 20px;\
            font-weight: bold;\
            color: white;\
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);\
            box-shadow: 0 4px 0 #333;\
            transform: rotate(45deg);\
        }\
\
        .action-btn-outer.pressed .action-btn-inner {\
            transform: translateY(2px) rotate(45deg);\
            box-shadow: 0 1px 0 #333;\
        }\
\
        .x {\
            grid-area: x;\
        }\
\
        .y {\
            grid-area: y;\
        }\
\
        .a {\
            grid-area: a;\
        }\
\
        .b {\
            grid-area: b;\
        }\
\
        .x .action-btn-inner,\
        .y .action-btn-inner {\
            box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.3), 0 4px 0 #333;\
        }\
\
        .x.pressed .action-btn-inner,\
        .y.pressed .action-btn-inner {\
            box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5), 0 1px 0 #333;\
        }\
\
        .x .action-btn-inner {\
            background-color: #0072c6;\
        }\
\
        .y .action-btn-inner {\
            background-color: #1e8c47;\
        }\
\
        .a .action-btn-inner {\
            background-color: #ce2029;\
        }\
\
        .b .action-btn-inner {\
            background-color: #f7d200;\
        }\
    </style>\
</head>\
\
<body>\
    <div class='snes-controller'>\
        <div class='left-side'>\
            <div class='d-pad'>\
                <div class='d-pad-btn up' data-key='up'></div>\
                <div class='d-pad-btn right' data-key='right'></div>\
                <div class='d-pad-btn down' data-key='down'></div>\
                <div class='d-pad-btn left' data-key='left'></div>\
                <div class='d-pad-center'></div>\
            </div>\
        </div>\
        <div class='center-section'>\
            <div class='brand'>\
                <span class='super-nintendo'>Super Brinquedo</span><br>\
                <span class='entertainment-system'>ENTERTAINMENT CAR</span>\
            </div>\
            <div class='center-buttons'>\
                <div class='select-start-btn select' data-key='select'>SELECT</div>\
                <div class='select-start-btn start' data-key='start'>START</div>\
            </div>\
        </div>\
        <div class='right-side'>\
            <div class='action-buttons'>\
                <div class='action-btn-outer x' data-key='x'>\
                    <div class='action-btn-inner'>X</div>\
                </div>\
                <div class='action-btn-outer y' data-key='y'>\
                    <div class='action-btn-inner'>Y</div>\
                </div>\
                <div class='action-btn-outer b' data-key='b'>\
                    <div class='action-btn-inner'>B</div>\
                </div>\
                <div class='action-btn-outer a' data-key='a'>\
                    <div class='action-btn-inner'>A</div>\
                </div>\
            </div>\
        </div>\
    </div>\
    <script>\
        document.addEventListener('DOMContentLoaded', () => {\
            const buttons = document.querySelectorAll('[data-key]');\
\
            function handlePress(element) {\
                if (element) {\
                    element.classList.add('pressed');\
                    var data_key = element.getAttribute('data-key');\
                    commandOn(data_key);\
                }\
            }\
\
            function handleRelease(element) {\
                if (element) {\
                    element.classList.remove('pressed');\
                    var data_key = element.getAttribute('data-key');\
                    commandOff(data_key);\
                }\
            }\
\
            async function commandOn(btn) {\
                const url = '/on/' + btn.toString();\
                try {\
                    const response = await fetch(url);\
                    if (!response.ok) {\
                        throw new Error(`Response status: ${response.status}`);\
                    }\
                    const text = await response.text();\
                    console.log(text + ' pressionado');\
                } catch (error) {\
                    console.error(error.message);\
                }\
            }\
\
            async function commandOff(btn) {\
                const url = '/off/' + btn.toString();\
                try {\
                    const response = await fetch(url);\
                    if (!response.ok) {\
                        throw new Error(`Response status: ${response.status}`);\
                    }\
                    const text = await response.text();\
                    console.log(text + ' solto');\
                } catch (error) {\
                    console.error(error.message);\
                }\
            }\
\
            buttons.forEach(button => {\
                // Mouse events\
                button.addEventListener('mousedown', (e) => {\
                    e.preventDefault();\
                    handlePress(button);\
                });\
                button.addEventListener('mouseup', () => handleRelease(button));\
                button.addEventListener('mouseleave', () => handleRelease(button));\
\
                // Touch events\
                button.addEventListener('touchstart', (e) => {\
                    e.preventDefault();\
                    handlePress(button);\
                });\
                button.addEventListener('touchend', () => handleRelease(button));\
                button.addEventListener('touchcancel', () => handleRelease(button));\
            });\
\
            // Keyboard events\
            const keyMap = {\
                'ArrowUp': 'up', 'ArrowDown': 'down', 'ArrowLeft': 'left', 'ArrowRight': 'right',\
                'KeyZ': 'b', 'KeyX': 'a', 'KeyA': 'y', 'KeyS': 'x',\
                'Enter': 'start', 'ShiftRight': 'select'\
            };\
\
            document.addEventListener('keydown', (e) => {\
                const key = keyMap[e.code];\
                if (key) {\
                    const button = document.querySelector(`[data-key='${key}']`);\
                    if (button) {\
                        e.preventDefault();\
                        handlePress(button);\
                    }\
                }\
            });\
\
            document.addEventListener('keyup', (e) => {\
                const key = keyMap[e.code];\
                if (key) {\
                    const button = document.querySelector(`[data-key='${key}']`);\
                    if (button) {\
                        e.preventDefault();\
                        handleRelease(button);\
                    }\
                }\
            });\
        });\
    </script>\
</body>\
\
</html>");
}

void handleOnUp() {
  digitalWrite(UP, HIGH);
  server.send(200, "text/plain", "Up");
}

void handleOffUp() {
  digitalWrite(UP, LOW);
  server.send(200, "text/plain", "Up");
}

void handleOnDown() {
  digitalWrite(DOWN, HIGH);
  server.send(200, "text/plain", "Down");
}

void handleOffDown() {
  digitalWrite(DOWN, LOW);
  server.send(200, "text/plain", "Down");
}

void handleOnLeft() {
  digitalWrite(LEFT, HIGH);
  server.send(200, "text/plain", "Left");
}

void handleOffLeft() {
  digitalWrite(LEFT, LOW);
  server.send(200, "text/plain", "Left");
}

void handleOnRight() {
  digitalWrite(RIGHT, HIGH);
  server.send(200, "text/plain", "Right");
}

void handleOffRight() {
  digitalWrite(RIGHT, LOW);
  server.send(200, "text/plain", "Right");
}

void handleUnsedBtn() {
  server.send(200, "text/plain", "Button");
}

void setup() {
  pinMode(UP, OUTPUT);
  pinMode(DOWN, OUTPUT);
  pinMode(LEFT, OUTPUT);
  pinMode(RIGHT, OUTPUT);
  digitalWrite(UP, LOW);
  digitalWrite(DOWN, LOW);
  digitalWrite(LEFT, LOW);
  digitalWrite(RIGHT, LOW);
  delay(1000);
  Serial.begin(115200);
  Serial.println();
  Serial.print("Configuring access point...");
  /* You can remove the password parameter if you want the AP to be open. */
  WiFi.softAP(ssid, password);

  IPAddress myIP = WiFi.softAPIP();
  Serial.print("AP IP address: ");
  Serial.println(myIP);
  server.on("/", handleRoot);
  // Botões utilizados para controle
  server.on("/on/a", handleOnUp);
  server.on("/off/a", handleOffUp);
  server.on("/on/b", handleOnDown);
  server.on("/off/b", handleOffDown);
  server.on("/on/left", handleOnLeft);
  server.on("/off/left", handleOffLeft);
  server.on("/on/right", handleOnRight);
  server.on("/off/right", handleOffRight);
  // Botões não utilizados
  server.on("/on/up", handleUnsedBtn);
  server.on("/off/up", handleUnsedBtn);
  server.on("/on/down", handleUnsedBtn);
  server.on("/off/down", handleUnsedBtn);
  server.on("/on/x", handleUnsedBtn);
  server.on("/off/x", handleUnsedBtn);
  server.on("/on/y", handleUnsedBtn);
  server.on("/off/y", handleUnsedBtn);  
  server.on("/on/select", handleUnsedBtn);
  server.on("/off/select", handleUnsedBtn);
  server.on("/on/start", handleUnsedBtn);
  server.on("/off/start", handleUnsedBtn);

  server.begin();
  Serial.println("HTTP server started");
}

void loop() {
  server.handleClient();
}

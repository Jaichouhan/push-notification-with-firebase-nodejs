var FCM = require("fcm-node");
const express = require("express");
const router = express.Router();
var serverKey =
  "AAAA7Xxwy9E:APA91bHZHrYXQX3VnCApon13zzhv_rodrx6WRgPK6eeJ2kearHDrU1vtEkaAL26e7neGjNPJbAG0wi2IfnejkHteR-UDVnB7dbHcViAysRVGDunMIFXyGSaPwW2K31rZv4sDywSc6lqM"; //put the generated private key path here
var fcm = new FCM(serverKey);

router.post("/notification", () => {
  var message = {
    //this may vary according to the message type (single recipient, multicast, topic, et cetera)
    to: "fhAo2KAGQuqcOFhZ5n9_1i:APA91bGcJatnfbDhh50NjSdEI35T0Jj5V2tOVdPnP32rgYb3aKUu05loujjBHVQCUGoXKz4AEKZ6gykOkvGT_8vz-WzJvPDMPF7zv13t95tuQnhsI1_jw0C7MCNfTtYx0GzRzO8jD6wq",
    collapse_key: "your_collapse_key",
    notification: {
      title: "Title of your push notification",
      body: "Body of your push notification",
    },
    data: {
      //you can send only notification or only data(or include both)
      my_key:
        "fhAo2KAGQuqcOFhZ5n9_1i:APA91bGcJatnfbDhh50NjSdEI35T0Jj5V2tOVdPnP32rgYb3aKUu05loujjBHVQCUGoXKz4AEKZ6gykOkvGT_8vz-WzJvPDMPF7zv13t95tuQnhsI1_jw0C7MCNfTtYx0GzRzO8jD6wq",
      my_another_key:
        "fhAo2KAGQuqcOFhZ5n9_1i:APA91bGcJatnfbDhh50NjSdEI35T0Jj5V2tOVdPnP32rgYb3aKUu05loujjBHVQCUGoXKz4AEKZ6gykOkvGT_8vz-WzJvPDMPF7zv13t95tuQnhsI1_jw0C7MCNfTtYx0GzRzO8jD6wq",
    },
  };
  fcm.send(message, function (err, response) {
    if (err) {
      console.log("Something has gone wrong!");
    } else {
      console.log("Successfully sent with response: ", response);
    }
  });
});

module.exports = router;

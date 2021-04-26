import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IHSAA-app';

  cols = [
    { key: "_id", display: "#" },
    { key: "school", display: "School" },
    { key: "distance", display: "Distance" },

    // following objects will contain a specific config parameters
    // based on this params we will change the display of each column

    {
      key: "host", display: "Host?",
      // this column holds a boolean value, we will display a value
      // in true/false cases
      config: { isBoolean: true, values: { true: "Host", false: "Other" } }
    },
    {
      key: "action", display: "Action",
      // in this column we have actions like activate/block account
      // so we will create a button and create it event click
      config: { isAction: true, actions: ["delete", "update"] }
    }
  ];
  USERS_DATA = [
    { _id: 1, school: "Marion High School", distance: 0, host: true },
    { _id: 2, school: "Ben Davis High School", distance: 15, host: false },
    { _id: 3, school: "Fishers High School", distance: 20, host: false },
    { _id: 4, school: "Shortridge High School", distance: 18, host: false },
  ]
  onActionHandler(event: any) {
    console.log(event);
  }


}

import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
  selector: "app-table",
  templateUrl: "./app-table.component.html",
  styleUrls: ["./app-table.component.css"]
})
export class AppTableComponent {
  @Output("onAction") emitter = new EventEmitter();
  @Input("data") dataSource: any = [];
  @Input("cols") tableCols: any = [];
  // We will need this getter to exctract keys from tableCols
  keys() {
    return this.tableCols.map((key: any) => key);
  }
  // this function will return a value from column configuration
  // depending on the value that element holds
  showBooleanValue(elt: any, column: any) {
    return column.config.values[`${elt[column.key]}`];
  }
}

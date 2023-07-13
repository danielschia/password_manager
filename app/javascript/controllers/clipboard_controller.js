import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static values = {
    content: String
  }
  // used to debug the copy to clipboard
  // connect(){
  //   console.log(this.contentValue)
  // }

  copy(){
    navigator.clipboard.writeText(this.contentValue).then(
      () => {
        /* clipboard successfully set */
      },
      () => {
       alert("Failed to copy to Clipboard")
      },
    );
  }
}

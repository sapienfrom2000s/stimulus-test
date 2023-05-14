import { Controller } from "@hotwired/stimulus"

class HelloController extends Controller {
  static target = [ "toggler" ]
  static  values = {
    clicks: Number
  }

  arandommethod(){
    this.clicksValue++
    console.log(this.clicksValue)
    this.dispatch("arandommethod", { detail: { content: this.clicksValue) } })
  }
}

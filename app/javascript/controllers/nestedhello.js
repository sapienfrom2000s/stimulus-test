import { Controller } from "@hotwired/stimulus"

export NestedhelloController class extends Controller {
  static classes = [ "bla" ]

  anotherrandommethod({ detail: { content } }){
    console.log('triggered anotherrandommethod')
  }   
}

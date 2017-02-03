import { Component } from '@angular/core';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  stringInterpolation = 'This is stringinterpolation!';
  numberInterpolation = 2;

  delete = false;
  test = 'Starting Value';

  boundValue = 1000;

  onTest(){
    return true;
  }

  OnClicked(value: string){
    alert(value);
  }
}

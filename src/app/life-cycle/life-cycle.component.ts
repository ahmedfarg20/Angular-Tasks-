import { Component,DoCheck,OnChanges,OnInit,OnDestroy,SimpleChange, AfterContentChecked, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent implements OnInit,OnChanges,OnDestroy,DoCheck,AfterContentChecked,AfterContentInit {
  ngOnChanges():void{
console.log('ngOnChanges');

  }  ngOnInit():void{
    console.log('ngOnInit');

      }  ngDoCheck():void{
        console.log('ngDoCheck');

          }
          ngAfterContentInit():void{
            console.log('ngAfterContentInit');

              }  ngAfterContentChecked():void{
                console.log('ngAfterContentChecked');

                  }
                  ngAfterViewInit():void{
                    console.log('ngAfterViewInit');

                      }
            ngOnDestroy():void{
            console.log('ngOnDestroy');

              }

}

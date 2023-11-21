import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterContentChecked,
    OnDestroy
{
  ngAfterContentChecked(): void {
    this.text = "Conteudo alterado apos [ngAfterContentInit]";

    console.log(this.text);
  }

  text: string = "";

  ngOnDestroy(): void {
    //console.log('ngOnDestroy');
  }
  ngAfterViewChecked(): void {
    //console.log('ngAfterViewChecked');
  }
  ngAfterContentInit(): void {
    this.text = "Conteudo alterado apos [ngAfterContentInit]";
    //console.log('ngAfterContentInit');
  }
  ngAfterViewInit(): void {
    this.text = "Conteudo alterado apos [ngAfterViewInit]"
    console.log('ngAfterViewInit');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck =', this.text);
  }
  ngOnChanges(changes: SimpleChanges): void {
    //console.log('ngOnChanges');
  }
  ngOnInit(): void {
    console.log('ngOnInit');
    this.text = "Conteudo inicial"
  }
}

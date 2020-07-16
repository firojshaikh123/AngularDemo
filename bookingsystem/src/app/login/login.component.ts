import { Input, Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//import { Subscription } from 'rxjs/Subscription';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loation:string;
  roomtype;
  myVariable:Subscription;
 @Input() loc123:string;
 @Input() typeOfRoom:string;

  HotelInfo=[
    {Location:"turkey", room:"triple", name:"Novotel", price:5000},
    {Location:"Russia", room:"Double", name:"Hyatt", price:6000},
    {Location:"Egept", room:"single", name:"Hyatt", price:7000},
    {Location:"turkey", room:"Double", name:"lemon tree", price:58000},
    {Location:"Russia", room:"single", name:"Hyatt", price:9000},
    {Location:"turkey", room:"Double", name:"Marriot", price:4000},
  ]

  
  //route:Router;
  constructor(private _route : ActivatedRoute, private route123:Router) { 
    this.route123.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
  };

  var a =this._route.snapshot.paramMap.get('loc');
var b= this._route.snapshot.paramMap.get('room');
alert( a +"    "+b);

  }

  ngOnInit(): void {

this._route.queryParams.subscribe(x=>{ this.loation=x['loc'];


});

    this._route.params.subscribe(params => {
      // this.loation = params['loc'];
      // this.roomtype = params['room'];
this.GetSerchData();
      // get
    });






    //console.log(this.loation+"  "+this.roomtype);
  }

  ngOnDestroy()
  {

    this.myVariable.unsubscribe();

  }
  GetSerchData()
  {

 alert("this is search function from Search component");

  }

}

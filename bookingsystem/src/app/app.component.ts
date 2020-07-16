import { Component } from '@angular/core';
import{ Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookingsystem';
  location = "p";
  rooms = "D";

  Dest1="";
  roomCat="";

  Location:string;
  room_Type:string;
  
  //_router: Router;
  
  constructor(private _router:Router)
  {
    this.location = this.Dest1;
    
  }

  SearchHotels()
  {
    alert(this.Dest1);
    this._router.navigate(['login', this.Dest1, this.rooms]);
    alert("calling");
  }

  Search()
  {

    this.Location = this.Dest1;
    this.room_Type=this.roomCat;
    
    alert("Input parameters"+this.location+"   "+this.Dest1);
  }
}

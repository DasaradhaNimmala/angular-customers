import { Component,Input } from "@angular/core";
@Component({
    selector:"app-users",
    templateUrl:"./users.component.html",
    styleUrls:["./users.component.css"]
})
export class UsersComponent{  
 @Input() users:Array<{name:string, location:string, gender:string ,age:number}>=[];
 hiddenItems:any={};
 constructor(){  
 }

 deleteUser(index:number){
   this.users.splice(index,1);
 }
 addUser(){
   this.users.push( { name: "Flemming", location: "UK", gender: "Male",age:50 });
 }

}
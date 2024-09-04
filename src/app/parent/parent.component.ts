import { CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
// import {CdkDragDrop } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  standalone:true,
  imports: [CdkDropListGroup, CdkDropList, NgFor, CdkDrag],
})
export class ParentComponent {

 
  unAssigned:string[]=[]

  twoDivArr= ['1','2']
  
  output:any=[]
 
  firstArr=['A','B','C']
  SecondArr =['D','E','F'] 
  // object ={
  //   arrayone:this.firstArr,
  //   arraytwo:this.SecondArr,
  //   arraythree:this.unAssigned
  // }  
  object:any ={
    '1':this.firstArr,
    '2':this.SecondArr,
    '3':this.unAssigned
  }
  objkey:any  
  objvalue:any
  constructor() {
  }
  ngOnInit(){
    // this.output= Object.keys(this.object).map((key)=>{
    //   return{
    //     parentNumber:key,
    //     child:this.object[key]
    //   }
    // })
    console.log(this.output)
    this.objkey= Object.keys(this.object)
    console.log(this.objkey)
    console.log(this.output.parentNumber)
    // console.log(this.object[1],"hi")
    // console.log(this.object[2])
    // console.log(this.object)
    console.log(this.twoDivArr.keys())
    console.log(this.output)
    // console.log(this.output[0].Name)
    
    }

    drop(event: CdkDragDrop<string[]>) {
      console.log(event.container,"data" ,"previousindex",event.previousIndex,"currentIndex", event.currentIndex)
      if(event.previousContainer == event.container){
      moveItemInArray(event.container.data,event.previousIndex,event.currentIndex);
    }
      else{
        console.log(event.container.data)
        transferArrayItem(event.previousContainer.data,event.container.data,event.previousIndex,event.currentIndex);
      }
    }
}

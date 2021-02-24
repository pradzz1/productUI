import { Component, OnInit } from '@angular/core';
import data from '../../assets/data/productList.json';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent  {
  
    /* An empty array that is responsible to add a division */
       public items = []; 
        public data = data.Products;
       /* A two-way binding performed which 
          pushes text on division */
       public newTask; 
     
     
       /* When input is empty, it will 
          not create a new division */
       public addToList() { 
           if (this.newTask == '') { 
           } 
           else { 
               this.items.push(this.newTask); 
               this.newTask = ''; 
           } 
       } 
     
       /* This function takes to input the 
          task, that has to be deleted*/
       public deleteTask(index) { 
           this.items.splice(index, 1); 
       } 

}

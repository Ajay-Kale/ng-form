import { NgModule } from "@angular/core";
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';  
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatNativeDateModule } from "@angular/material/core";


const material =[
    MatFormFieldModule,    
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatSliderModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,

];
    @NgModule({
        declarations:[],
        imports:[material],
        exports:[material],
        providers:[],
        bootstrap:[]
    })

export class AppMaterialModule {}
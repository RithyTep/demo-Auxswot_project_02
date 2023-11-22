import AOS from 'aos'; //AOS - 1
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { DailogComponent } from 'src/app/admin/components/dailog/dailog.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { House } from 'src/app/admin/model/House';
import { HouseService } from 'src/app/admin/services/House.service';
import { DashboardComponent } from 'src/app/admin/components/dashboard/dashboard.component';
import { collectionData, Firestore, collection } from '@angular/fire/firestore';
@Component({
  selector: 'app-content4',
  templateUrl: './content4.component.html',
  styleUrls: ['./content4.component.css'],
})
export class Content4Component implements OnInit {
  editState: boolean = false;
  dataSource: MatTableDataSource<House>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  obs: Observable<any>;
  noHouseEntries = false;
  uid: any;
  userData!: Observable<any>;
  sortProperty: string = '';
  filterValue: string = '';
  constructor(
    private Houseservice: HouseService,
    public dialog: MatDialog,
    public afAuth: AngularFireAuth,
    private firestore: Firestore
  ) {}
  getAllHouses() {
    const collectionInstance = collection(this.firestore, 'houses');
    collectionData(collectionInstance).subscribe((val) => {
      console.log(val);
    });
    this.userData = collectionData(collectionInstance);
    (error) => {
      alert('Some error while fetching data');
    };
  }

  ngOnInit() {
    this.getAllHouses();
  }

  editTask(event, task) {
    this.editState = !this.editState;
  }
}

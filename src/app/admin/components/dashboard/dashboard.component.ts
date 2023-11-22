import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { DailogComponent } from '../dailog/dailog.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { House } from '../../model/House';
import { HouseService } from '../../services/House.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  dataSource: MatTableDataSource<House>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  obs: Observable<any>;
  noHouseEntries = false;
  uid: any;
  userData!: Observable<any>;
  sortProperty: string = '';
  searchTerm: string;

  constructor(
    public dialog: MatDialog,
    public afAuth: AngularFireAuth,
    private firestore: AngularFirestore
   ) {
    this.getData();
    this.afAuth.authState.subscribe((user) => {
    if (user) this.uid = user.uid;
    });
   }
   

  ngOnInit(): void {}

  getData() {
    const collectionInstance = this.firestore.collection('houses');
    collectionInstance.valueChanges({ idField: 'id' }).subscribe((val) => {
    console.log(val);
    });
    this.userData = collectionInstance.valueChanges({ idField: 'id' });
   }
   onSubmit() {
    if (this.searchTerm !== "") {
      this.searchTerm = this.searchTerm; // convert to uppercase
     // an array of keywords
      this.userData = this.firestore
        .collection("houses", ref =>
          ref.where('keyword' , "array-contains", this.searchTerm.toUpperCase()) 
     
        )
        .valueChanges({ idField: "id" });
    } else {
      this.getData();
    }
  }


  editHouse(HouseData: any) {
    console.log(HouseData);
    this.dialog
      .open(DailogComponent, {
        width: '100%',
        data: HouseData,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'Update') {
          this.getData();
        }
      });
  }
  

  postHouse(id: string) {
    if (confirm('Are you sure you want to Post this House?')) {
    const docInstance = this.firestore.doc(`houses/${id}`);
    docInstance.update({ HouseStatus: 'Posted' }).then(() => {});
    alert('House Post successfully!');
    this.getData();
    };
    (error) => {
    alert('House could not be Post');
    };
   }
   
   DemoHouse(id: string) {
    if (confirm('Are you sure you want to Demo this House?')) {
    const docInstance = this.firestore.doc(`houses/${id}`);
    docInstance.update({ HouseStatus: 'Demo' }).then(() => {});
    alert('House Demo successfully!');
    this.getData();
    };
    (error) => {
    alert('House could not be Demo');
    };
   }
   
   deleteHouse(id: string) {
    if (confirm('Are you sure you want to delete this House?')) {
    const docInstance = this.firestore.doc(`houses/${id}`);
    docInstance.delete().then(() => {
    console.log('deleted');
    alert('House deleted successfully!');
    this.getData();
    });
    (error) => {
    alert('House could not be deleted');
    };
    }
   }

}

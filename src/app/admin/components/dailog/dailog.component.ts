import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  AngularFireStorage,
  AngularFireStorageReference,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import { finalize, map, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import moment from 'moment';
export interface Category {
  type: string;
}

@Component({
  selector: 'app-dailog',
  templateUrl: './dailog.component.html',
  styleUrls: ['./dailog.component.css'],
})
export class DailogComponent implements OnInit {
  HouseForm: FormGroup;
  editMode = false;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<unknown>;
  uploadProgress: Observable<unknown>;
  btnCurrentVal = 'Save';
  userName: any;
  userImage:any;
  uid;
  userData!: Observable<any>;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private formbuilder: FormBuilder,
    private dialogref: MatDialogRef<DailogComponent>,
    private afStorage: AngularFireStorage,
    public afAuth: AngularFireAuth,
    private firestore: Firestore
  ) {
    this.getData();
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.uid = user.uid;
        this.userName = user.displayName;
        this.userImage = user.photoURL;
      }
    })
  }

  ngOnInit(): void {
    this.HouseForm = this.formbuilder.group({
      uid: ['', Validators.required],
      discountPrice: ['', Validators.required],
      HouseAddress: ['', Validators.required],
      HouseStatus: [''],
      dateCreated: [''],
      keyword: [''],
      HouseImage: ['', Validators.required],
      originalPrice: ['', Validators.required],
      HouseDescription: ['', Validators.required],
      userImage: ['', Validators.required],
      userName: ['', Validators.required],
    });

    if (this.editData) {
      this.editMode = true;
      this.btnCurrentVal = 'Update';
      this.HouseForm.controls['userImage'].setValue(this.editData.userImage);
      this.HouseForm.controls['userName'].setValue(this.editData.userName);
      this.HouseForm.controls['uid'].setValue(this.editData.uid);
      this.HouseForm.controls['discountPrice'].setValue(
        this.editData.discountPrice
      );
      this.HouseForm.controls['HouseStatus'].setValue(
        this.editData.HouseStatus
      );
      this.HouseForm.controls['HouseAddress'].setValue(
        this.editData.HouseAddress
      );
      this.HouseForm.controls['HouseImage'].setValue(this.editData.HouseImage);
      this.HouseForm.controls['originalPrice'].setValue(
        this.editData.originalPrice
      );
      this.HouseForm.controls['HouseDescription'].setValue(
        this.editData.HouseDescription
      );
    }
  }

  getData() {
    const collectionInstance = collection(this.firestore, 'houses');
    collectionData(collectionInstance, { idField: 'id' }).subscribe((val) => {
      console.log(val);
    });
    this.userData = collectionData(collectionInstance, { idField: 'id' });
  }

  upload(event) {
    const id = Math.random().toString(36).substring(2);
    const file = event.target.files[0];
    let filePath = id;
    this.ref = this.afStorage.ref(id);
    this.task = this.afStorage.upload(filePath, file);
    this.uploadState = this.task.snapshotChanges().pipe(map((s) => s.state));
    this.uploadProgress = this.task.percentageChanges();
    this.task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.ref.getDownloadURL().subscribe((url) => {
            this.HouseForm.patchValue({
              HouseImage: url,
              uid: this.uid,
              userName: this.userName,
              userImage: this.userImage,
              HouseStatus: 'Demo',
              dateCreated: moment().format('YYYY-MM-DD HH:mm:ss'),
              keyword: [
                ...this.getSubstrings(this.HouseForm.value.HouseAddress),
                ...this.getSubstrings(this.HouseForm.value.discountPrice),
              ],
            });
          });
        })
      )
      .subscribe();
  }

  getSubstrings(str: string): string[] {
    const substrings = [];

    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        substrings.push(str.substring(i, j).toLocaleUpperCase());
      }
    }

    return substrings;
  }

  addHouse() {
    if (this.editData) {
      this.updateHouse(this.editData?.id, this.editData);
      return;
    }
    const collectionInstance = collection(this.firestore, 'houses');
    addDoc(collectionInstance, this.HouseForm.value).then(() => {
      alert('Post saved successfully');
      this.HouseForm.reset();
      this.dialogref.close('save');
    }),
      (error) => {
        alert('Your post did not saved successfully');
      };
  }

  updateHouse(id: string, data: any) {
    const docInstance = doc(this.firestore, 'houses', id);
    updateDoc(docInstance, this.HouseForm.value).then(() => {
      alert('Post saved successfully');
      this.HouseForm.reset();
      this.dialogref.close('save');
    }),
      (error) => {
        alert('Your post did not saved successfully');
      };
  }
}

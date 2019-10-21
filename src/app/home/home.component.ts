import { Component, OnInit, TemplateRef } from '@angular/core';
import { Articles } from '../article';
import { ServicefileService } from '../servicefile.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Ddl } from '../ddlcategory';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arr: Articles[] = [];
  allarticles: Articles[] = [];
  closeBtnName: string;
  AddForm: FormGroup;
  arr1: Articles[];
  cat: Ddl[];
  readmore:any[];
  // tslint:disable-next-line: max-line-length
  constructor(private data: ServicefileService, private modalService: BsModalService, public modalRef: BsModalRef, public bsModalRef: BsModalRef, private fb: FormBuilder) { }

  ngOnInit() {
    this.getArticles();
    this.getAllcategories();
    this.AddForm = this.fb.group({
      articleName: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
      createdBy: new FormControl(null, Validators.required),
      previewContent: new FormControl(null),
      articleId: new FormControl(null),
      categoryName: new FormControl(null),
      createdByName: new FormControl(null),
      createdDate: new FormControl(null),
      modifiedBy: new FormControl(null),
      modifiedByName: new FormControl(null),
      modifiedDate: new FormControl(null),
      categoryId: new FormControl(null, Validators.required),

    })
  }
  getArticles() {
    this.data.getArticles().subscribe(

      (data: Articles[]) => {
        this.arr = data;
        console.log(this.arr);
        this.allarticles = this.arr['kbArticles'];

      }
    );
  }
  getAllcategories() {
    console.log('hhhhh')
    this.data.getCategories().subscribe(
      (data: Ddl[]) => {
        console.log(data);
        this.cat = data;

      }
    )
  }
  openModal(template: TemplateRef<any>, item) {
    this.modalRef = this.modalService.show(template);

    this.AddForm.patchValue({
      articleId: item.articleId,
      articleName: item.articleName,
      content: item.content,
      previewContent: item.previewContent,
      categoryId: item.categoryId,
      categoryName: item.categoryName,
      createdBy: item.createdBy,
    });
    //this.modalRef.content.closeBtnName = 'Close';
  }
  OnEditArticleSave(item) {
    this.data.addArticles(item).subscribe(
      (data: Articles[]) => {
        this.arr1 = data;
        console.log(this.arr1);
        this.getArticles();
        alert("updated successfully");
        this.AddForm.reset();
        this.modalRef.hide();

      });
  }
  openaddModal(addpop: TemplateRef<any>) {
    this.modalRef = this.modalService.show(addpop);

    //this.bsModalRef.content.closeBtnName = 'Close';
  }

  confirm() {
    this.modalRef.hide();
  }
  decline() {
    this.modalRef.hide();
  }
  OnAddArticleSave(item) {
    console.log(item);
    this.data.addArticles(item).subscribe(
      (data: Articles[]) => {
        this.arr1 = data;
        console.log(this.arr1);
        this.getArticles();
        alert("Added successfully");
      }

    );
    this.AddForm.reset();
    this.modalRef.hide();

  }
  openread(readmore: TemplateRef<any>, item) {
    this.modalRef = this.modalService.show(readmore);
  console.log(item);
    this.data.readarti(item.articleId).subscribe(
      (data: any) => {
        console.log(data);
        this.readmore=data;
        console.log(readmore);

      }
    );
    //this.bsModalRef.content.closeBtnName = 'Close';
  }
}

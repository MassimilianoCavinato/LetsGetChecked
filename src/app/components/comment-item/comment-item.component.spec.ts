import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentItemComponent } from './comment-item.component';
import { BlogService } from '../../services/blog.service';
import { ActivatedRoute } from '@angular/router';

describe('CommentItemComponent', () => {
  let component: CommentItemComponent;
  let fixture: ComponentFixture<CommentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentItemComponent ],
      providers: [ BlogService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    
    fixture = TestBed.createComponent(CommentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

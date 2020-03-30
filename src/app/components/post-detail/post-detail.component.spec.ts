import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PostDetailComponent } from './post-detail.component';
import { BlogService } from '../../services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('PostDetailComponent', () => {
  let component: PostDetailComponent;
  let fixture: ComponentFixture<PostDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetailComponent ],
      providers: [ 
        BlogService,  
        {
          provide: ActivatedRoute,
          useValue:  { snapshot: { params: { 'id': '1' }}}
        } 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

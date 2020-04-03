import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PostItemComponent } from './post-item.component';
import { BlogService } from '../../services/blog.service';

describe('PostItemComponent', () => {
  let component: PostItemComponent;
  let fixture: ComponentFixture<PostItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostItemComponent ],
      providers: [ BlogService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('component title should be a string',  async(() => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(typeof(component.title)).toEqual('string');
  }));

});

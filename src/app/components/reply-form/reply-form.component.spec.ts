import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReplyFormComponent } from './reply-form.component';
import { BlogService } from '../../services/blog.service';

describe('ReplyFormComponent', () => {
  let component: ReplyFormComponent;
  let fixture: ComponentFixture<ReplyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplyFormComponent ],
      providers: [ BlogService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have only one button', () => {
    let html_collection = document.getElementsByTagName('button');
    expect(html_collection.length).toBe(1);
  });

  it('should have "send" as text in the button', () => {
    let html_collection = document.getElementsByTagName('button');
    expect(html_collection[0].innerText).toBe("send");
  });
  
});

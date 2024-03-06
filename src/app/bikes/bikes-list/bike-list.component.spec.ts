import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikesListComponent } from './bike-list.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('BikeListComponent', () => {
  let component: BikesListComponent;
  let fixture: ComponentFixture<BikesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
    .compileComponents();


    fixture = TestBed.createComponent(BikesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

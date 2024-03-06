import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
import { BikeDetailsComponent } from './bike-details.component';
import { BikesService } from '../services/bikes.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BikeDetailsComponent', () => {
  let component: BikeDetailsComponent;
  let fixture: ComponentFixture<BikeDetailsComponent>;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BikeDetailsComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute,
          useValue:
            {
              snapshot: {
                params: {
                  'id': '2',
                }
              }
            }
        },
        { provide: BikesService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeDetailsComponent);
    component = fixture.componentInstance;
    route = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get details bi Id', () => {
    route.snapshot.params['id'] = '2';
    fixture = TestBed.createComponent(BikeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.bikeId).toBe('2');
  });
});

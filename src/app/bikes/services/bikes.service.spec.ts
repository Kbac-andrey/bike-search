import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BikesService } from './bikes.service';
import { IBikeResp, IBikesResp } from '../types/bike';

describe('BikesService', () => {
  let service: BikesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BikesService]
    });
    service = TestBed.inject(BikesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return bikes', () => {
    const mockBikesResponse: IBikesResp = {
      bikes: [
        {
          date_stolen: Date.now(),
          description: 'Mock bike description',
          frame_colors: ['red', 'blue'],
          frame_model: 'Mock model',
          id: 1,
          is_stock_img: true,
          large_img: 'mock_large_img_url',
          location_found: 'Mock location',
          manufacturer_name: 'Mock manufacturer',
          external_id: null,
          registry_name: null,
          registry_url: null,
          serial: '123456',
          status: 'stolen',
          stolen: true,
          stolen_coordinates: [123, 456],
          stolen_location: 'Mock stolen location',
          thumb: 'mock_thumb_url',
          title: 'Mock bike',
          url: 'mock_bike_url',
          year: 2022,
          propulsion_type_slug: 'mock_propulsion_type_slug',
          cycle_type_slug: 'mock_cycle_type_slug'
        }
      ]
    };

    service.getBikes().subscribe(response => {
      expect(response).toEqual(mockBikesResponse);
    });

    const req = httpTestingController.expectOne('https://bikeindex.org:443/api/v3/search');
    expect(req.request.method).toEqual('GET');
    req.flush(mockBikesResponse);
  });

  it('should search for bikes based on location', () => {
    const location = 'New York';
    const mockSearchResponse: IBikesResp = { bikes: [
        {
          date_stolen: Date.now(),
          description: 'Mock bike description',
          frame_colors: ['red', 'blue'],
          frame_model: 'Mock model',
          id: 1,
          is_stock_img: true,
          large_img: 'mock_large_img_url',
          location_found: 'Mock location',
          manufacturer_name: 'Mock manufacturer',
          external_id: null,
          registry_name: null,
          registry_url: null,
          serial: '123456',
          status: 'stolen',
          stolen: true,
          stolen_coordinates: [123, 456],
          stolen_location: 'Mock stolen location',
          thumb: 'mock_thumb_url',
          title: 'Mock bike',
          url: 'mock_bike_url',
          year: 2022,
          propulsion_type_slug: 'mock_propulsion_type_slug',
          cycle_type_slug: 'mock_cycle_type_slug'
        }
      ] };

    service.searchBike(location).subscribe(response => {
      expect(response).toEqual(mockSearchResponse);
    });

    const req = httpTestingController.expectOne(`https://bikeindex.org/api/v3/search?page=1&per_page=10&location=${location.toLowerCase()}&distance=10&stolenness=proximity`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockSearchResponse);
  });

  it('should get bike by ID', () => {
    const id = '123';
    const mockBikeResponse: IBikeResp = { bike: {
      date_stolen: null,
        description: 'Mock bike description',
        frame_colors: ['red', 'blue'],
        frame_model: 'Mock model',
        id: 1,
        is_stock_img: true,
        large_img: 'mock_large_img_url',
        location_found: 'Mock location',
        manufacturer_name: 'Mock manufacturer',
        external_id: null,
        registry_name: null,
        registry_url: null,
        serial: '123456',
        status: 'stolen',
        stolen: true,
        stolen_coordinates: 'test',
        stolen_location: 'Mock stolen location',
        thumb: 'mock_thumb_url',
        title: 'Mock bike',
        url: 'mock_bike_url',
        year: 2022,
        propulsion_type_slug: 'mock_propulsion_type_slug',
        cycle_type_slug: 'mock_cycle_type_slug',
        registration_created_at: Date.now(),
        registration_updated_at: Date.now(),
        api_url: 'mock_api_url',
        manufacturer_id: 1,
        paint_description: 'Mock paint description',
        name: 'Mock bike name',
        frame_size: 'Mock frame size',
        rear_tire_narrow: true,
        front_tire_narrow: false,
        type_of_cycle: 'Mock cycle type',
        test_bike: false,
        rear_wheel_size_iso_bsd: 'Mock rear wheel size',
        front_wheel_size_iso_bsd: 'Mock front wheel size',
        handlebar_type_slug: 'mock_handlebar_type_slug',
        frame_material_slug: 'mock_frame_material_slug',
        front_gear_type_slug: 'mock_front_gear_type_slug',
        rear_gear_type_slug: 'mock_rear_gear_type_slug',
        extra_registration_number: 'Mock extra registration number',
        additional_registration: 'Mock additional registration',
        stolen_record: {
        date_stolen: Date.now(),
          location: 'Mock stolen location',
          latitude: 123,
          longitude: 456,
          theft_description: 'Mock theft description',
          police_report_number: 789
      },
      public_images: ['mock_image_url_1', 'mock_image_url_2'],
        components: [
        {
          id: 1,
          description: 'Mock component description',
          serial_number: '123456',
          component_type: 'Mock component type',
          component_group: 'Mock component group',
          rear: true,
          front: false,
          manufacturer_name: 'Mock component manufacturer',
          model_name: 'Mock component model',
          year: 2021
        }
      ]
    } };

    service.getBike(id).subscribe(response => {
      expect(response).toEqual(mockBikeResponse);
    });

    const req = httpTestingController.expectOne(`https://bikeindex.org:443/api/v3/bikes/${id}`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockBikeResponse);
  });
});

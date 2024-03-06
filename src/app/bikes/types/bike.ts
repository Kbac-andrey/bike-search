export interface IBikesResp { bikes: IBike[] | [] }
export interface IBikeResp { bike: IDetailBike }
export interface IBike {
  date_stolen: number,
  description: null | string,
  frame_colors:  string[],
  frame_model: string,
  id: number,
  is_stock_img: boolean,
  large_img: null | string,
  location_found: null | string,
  manufacturer_name: null | string,
  external_id: null | number,
  registry_name: null | string,
  registry_url: null | string,
  serial: null | string,
  status: string,
  stolen: boolean,
  stolen_coordinates: number[],
  stolen_location: null | string,
  thumb: null | string,
  title: null | string,
  url: null | string,
  year: null | number,
  propulsion_type_slug: null | string,
  cycle_type_slug: null | string
}
export interface IDetailBike {
  date_stolen: Date | null;
  description: string;
  frame_colors: string[];
  frame_model: string;
  id: number;
  is_stock_img: boolean;
  large_img: string;
  location_found: string | null;
  manufacturer_name: string;
  external_id: string | null;
  registry_name: string | null;
  registry_url: string | null;
  serial: string;
  status: string;
  stolen: boolean;
  stolen_coordinates: string | null;
  stolen_location: string | null;
  thumb: string;
  title: string;
  url: string;
  year: number;
  propulsion_type_slug: string;
  cycle_type_slug: string;
  registration_created_at: number;
  registration_updated_at: number;
  api_url: string;
  manufacturer_id: number;
  paint_description: string | null;
  name: string;
  frame_size: string;
  rear_tire_narrow: boolean;
  front_tire_narrow: boolean | null;
  type_of_cycle: string;
  test_bike: boolean;
  rear_wheel_size_iso_bsd: string | null;
  front_wheel_size_iso_bsd: string | null;
  handlebar_type_slug: string | null;
  frame_material_slug: string;
  front_gear_type_slug: string | null;
  rear_gear_type_slug: string | null;
  extra_registration_number: string | null;
  additional_registration: string | null;
  stolen_record: {
    date_stolen: number;
    location: string;
    latitude: number;
    longitude: number;
    theft_description: string;
    police_report_number: number
  } | null;
  public_images: string[];
  components: IBikeComponent[];
}
interface IBikeComponent {
  id: number;
  description: string;
  serial_number: string;
  component_type: string;
  component_group: string;
  rear: boolean | null;
  front: boolean | null;
  manufacturer_name: string | null;
  model_name: string;
  year: number | null;
}


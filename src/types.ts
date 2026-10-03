export interface AppointmentFormData {
  email: string;
  phone: string;
  date: string;
  service?: string;
  notes?: string;
}

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string }[];
}

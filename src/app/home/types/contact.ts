export interface ContactFormPayload {
  fullName: string;
  email: string;
  workEmail?: string;
  phone?: string;
  message: string;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}
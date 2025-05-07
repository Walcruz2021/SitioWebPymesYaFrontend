export type NoteFetch={
  notes:NoteItem[];
  isLoading:boolean;
  isError:boolean
}

export type NoteItem = {
  [key: string]: any;

};

export type Note = {
  [key: string]: any;
title1:string
};

type NoteProps = {
  note: NoteItem;
  siguiente: () => void;
  anterior: () => void;
  buttonBack: boolean;
  buttonNext: boolean;
};

export type ProductFetch = {
  products: ProductItem[];
  isLoading: boolean;
  isError: boolean;
};

export type CompanyFetch = {
  companies: CompanyItem[];
  isLoading: boolean;
  isError: boolean;
};

export type ServiceFetch = {
  companies: ServiceItem[];
  isLoading: boolean;
  isError: boolean;
};

export type CategoryFetch = {
  categories: CategoryItem[];
  isLoading: boolean;
  isError: boolean;
};

export type ProductItem = {
  id: number;
  category: string;
  title: string;
  image: string;
  description: string;
  price: number;
};

export type CompanyItem = {
  _id: number;
  avatar: any;
  nameCompany: String;
  userCompany:String;
  identifier: number;
  phone: string;
  phone2:string;
  address: string;
  notesComp: string;
  country: string;
  cityName: string;
  level: number;
  Category: string;
  siteWeb: string;
  typeCategory: string;
  levelPay: string;
};

export type NewPaperItem={
  _id: number,
  img1:string,
  title1:string
  paragraph1:string
}

export type ServiceItem = {
  _id: number;
  avatar: any;
  nameCompany: String;
  fullName:String;
  identifier: number;
  phone: string;
  phone2:string;
  address: string;
  noteService: string;
  country: string;
  cityName: string;
  level: number;
  Category: string;
  siteWeb: string;
  typeCategory: string;
  levelPay: string;
};

export type CategoryItem = {
  _id: string;
  name: string;
  logo: string;
};

export type CartActionReducer = {
  payload: any;
  type: "ADD" | "REMOVE" | "REMOVE-ALL" | "CLEAR";
};

export type Customer = {
  name: string;
  lastName: string;
  email: string;
  address: string;
};

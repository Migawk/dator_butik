export type Product = {
	id: number;
	name: string;
	slug: string;
	createdAt: Date;
	updatedAt: Date;
	description: string;
	shortDescription: string;
	stock: number;
	images: string[]; ////////
	sku: string;
	rating: number;
	attributes: Attributes; ////////
	categoryId: number;
	ownerId: number;

	price: number;
	currency: Currency;
}

export type User = {
	id: number;
	fullName: string;
	nickname: string;
	email: string;
	phone: string;
	avatar: string | null;
	currency: Currency;
	role: "owner" | "admin" | "seller" | "customer";
	status: "default" | "banned";
	createdAt: Date;
	updatedAt: Date;
	password: string;

	addresses: Address[];
	cards: Card[];
	orders: Order[];
	comments: Comment[];
	products: Product[];
}

export type Address = {
	id: number;
	street: string;
	city: string;
	houseNr: string;
	zip: string;
	country: string;
	useful_info: string;
	user?: UserRef;
}

export type Card = {
	id: number;
	number: string;
	expiries: number[];
	security: number;
	bank?: string;
	iban?: string;
}

export type Order = {
	id: number;
	address: Address;
	user: User;
	products: Product[];
	summa: number;
	currency: Currency;
	info: string;
}

export type Comment = {
	id: number;
	title: string;
	content: string;
	createdAt: Date;
	updatedAt: Date;
	author: UserSelection;
	product: ProductRef;
	rate: number;
}
export type Category = {
	id: number;
	name: string;
	slug: string;
}

export const currencies = ["USD", "EUR", "SEK", "UAH"] as const;

export type Currency = "USD" | "EUR" | "SEK" | "UAH";
export type Role = "owner" | "admin" | "seller" | "customer";
export type UserStatus = "default" | "banned";

export type Attributes = {
	[key: string]: unknown[]
};

type UserRef = Pick<User, "id">;
type UserSelection = Pick<User,
	"id" |
	"nickname" |
	"currency" |
	"role" |
	"createdAt" |
	"updatedAt" |
	"avatar">

type ProductRef = Pick<Product, "id">;

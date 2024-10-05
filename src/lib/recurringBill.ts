export default interface RecurringBill {
	avatar: string;
	name: string;
	category: string;
	date: string;
	amount: number;
	recurring: boolean;
	billDue: boolean;
	billPaid: boolean;
	daysDiff: number;
}

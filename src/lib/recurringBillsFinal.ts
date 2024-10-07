import data from "../data.json";
import type RecurringBill from "./recurringBill";
import type TransactionType from "./transaction";
const uniqueTransactions: any = {};
const filteredTransactions: TransactionType[] = [];

data.transactions.forEach((transaction) => {
	if (!transaction.recurring) return;
	if (!uniqueTransactions[transaction.name]) {
		uniqueTransactions[transaction.name] = true;
		filteredTransactions.push(transaction);
	}
});

filteredTransactions.sort((a, b) => {
	// @ts-ignore
	return new Date(a.date).getDate() - new Date(b.date).getDate();
});

const date = new Date("2024-08-28T22:00:00.000Z");
export const finalBills: RecurringBill[] = [];

filteredTransactions.forEach((transaction) => {
	const transactionDate = new Date(transaction.date);
	let daysDiff = transactionDate.getDate() - date.getDate();
	const todaysDateAsDay = date.getDate();
	const billAsDay = transactionDate.getDate();

	let billPaid: boolean = false;
	let billDue: boolean = false;
	if (todaysDateAsDay > billAsDay) {
		billPaid = true;
	}
	if (
		(billAsDay > todaysDateAsDay && Math.abs(daysDiff) < 5) ||
		billAsDay === todaysDateAsDay
	) {
		billDue = true;
	}
	const finalBill: RecurringBill = {
		avatar: transaction.avatar,
		amount: transaction.amount,
		category: transaction.category,
		name: transaction.name,
		date: transaction.date,
		recurring: transaction.recurring,
		billDue: billDue,
		billPaid: billPaid,
		daysDiff: daysDiff,
	};
	finalBills.push(finalBill);
});

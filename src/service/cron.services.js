import moment from "moment";
import cron from "node-cron";
import loanRepository from "../repositories/loan.repositories.js";
import sendEmail from "./email.services.js";

cron.schedule("0 9 * * *", async () => {
  console.log("Running daily job to check for due dates..");

  const loans = await loanRepository.findAllLoansRepository();
  const today = moment().startOf("day");

  loans.forEach(async (loan) => {
    const dueDate = moment(loan.dueDate).startOf("day");
    const reminderDueDate = moment(dueDate).subtract(1, "days");

    if (today.isSame(reminderDueDate)) {
      sendEmail(loans.email, loans.title, loan.dueDate);
    }
  });
});

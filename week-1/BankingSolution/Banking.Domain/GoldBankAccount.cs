

namespace Banking.Domain;

public class GoldBankAccount : BankAccount
{
    public override void Deposit(TransactionAmount amountToDeposit)
    {
        base.Deposit(amountToDeposit * 1.10M);
    }
}


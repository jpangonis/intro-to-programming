


namespace Banking.Domain
{
    public class BankAccount
    {
        private decimal _currentBalance = 5000;
        
        public void Deposit(decimal amountToDeposit)
        {
            _currentBalance += amountToDeposit;
        }

        public decimal GetBalance()
        {
            return _currentBalance;
        }

        public void Withdraw(decimal amountToWithdraw)
        {
            _currentBalance -= amountToWithdraw;
        }
    }
}